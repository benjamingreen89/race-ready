// Bumped from form-v1: the old worker could serve a stale app shell forever.
// Its plain fetch() read through the browser HTTP cache, which still held the
// shell under the pre-no-cache max-age=3600, so a deploy never reached the
// page. The shell is now fetched with cache:'reload' to bypass that entirely.
const CACHE = 'form-v2';
const SHELL = './form.html';
const ASSETS = [
  SHELL,
  './form-manifest.json',
  './form-icon.svg',
  './form-icon-192.png',
  './form-icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isShell(request, url) {
  return request.mode === 'navigate' || url.pathname.endsWith('/form.html') || url.pathname === '/';
}

// Always go to the network for the app shell, bypassing the HTTP cache, and
// keep the last good copy only as an offline fallback.
async function shellFirst(request) {
  try {
    const fresh = await fetch(request, { cache: 'reload' });
    if (fresh && fresh.ok) {
      const cache = await caches.open(CACHE);
      cache.put(SHELL, fresh.clone());
    }
    return fresh;
  } catch (err) {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(request) || await cache.match(SHELL);
    if (cached) return cached;
    throw err;
  }
}

// Static assets: serve from cache, then refresh in the background.
async function assetFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then(res => { if (res && res.ok) cache.put(request, res.clone()); return res; })
    .catch(() => null);
  return cached || network.then(r => r || Response.error());
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;   // let Firestore and fonts through
  if (url.pathname.endsWith('/form-sw.js')) return;  // never intercept the worker itself
  e.respondWith(isShell(e.request, url) ? shellFirst(e.request) : assetFirst(e.request));
});
