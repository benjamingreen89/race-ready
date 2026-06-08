import { useState } from "react";

const PHASES = [
  {
    id: "ramp",
    label: "Ramp Up",
    dates: "1 Jun – 7 Jun",
    color: "#2E6DA4",
    bg: "#D6E8F5",
    focus: "Habit Reset",
    calories: "1800–1900",
    protein: "160–175g",
    carbs: "160–180g",
    fat: "55–65g",
    notes: "Get back into meal prep and tracking. Rebuild habits before the challenge starts. Get the blender sorted and hit Sunday meal prep.",
    rules: [
      "Restart daily calorie and protein tracking",
      "Sunday meal prep without fail",
      "7+ hours sleep average",
      "One rest day minimum (Saturday)",
      "2.5–3L water daily",
    ],
    meals: {
      breakfast: [
        { name: "Protein Smoothie", desc: "VPA Whey Blend + banana + milk + peanut butter", macros: "~420 kcal | 40g protein" },
        { name: "Protein Oats", desc: "60g oats + 1 scoop VPA + milk + honey", macros: "~450 kcal | 42g protein" },
      ],
      lunch: [
        { name: "High Protein Soup", desc: "Chicken breast or turkey mince, lentils, veg, stock. Batch prep Sunday.", macros: "~400 kcal | 45g protein" },
        { name: "Salad Bowl", desc: "Mixed greens, 150g grilled chicken, chickpeas, veg, olive oil dressing", macros: "~380 kcal | 45g protein" },
      ],
      snack: [
        { name: "Protein Water", desc: "MyProtein protein water", macros: "90 kcal | 20g protein" },
        { name: "Greek Yoghurt", desc: "170g plain Greek yoghurt + berries", macros: "120 kcal | 17g protein" },
      ],
      dinner: [
        { name: "Slow Cook Casserole", desc: "Beef chuck or chicken thigh, tomatoes, stock, root veg, beans", macros: "~480 kcal | 45g protein" },
        { name: "Chicken Stir Fry", desc: "Chicken breast, broccolini, capsicum, bok choy, oyster sauce. 1/2 cup rice.", macros: "~450 kcal | 42g protein" },
        { name: "Beef Stir Fry", desc: "Lean beef strips, Asian veg, sesame oil, soy, garlic. 1/2 cup rice.", macros: "~460 kcal | 40g protein" },
      ],
    },
  },
  {
    id: "phase1",
    label: "Phase 1",
    sublabel: "BFT Challenge",
    dates: "8 Jun – 2 Aug",
    color: "#E65100",
    bg: "#FFF3E0",
    focus: "Aggressive Cut",
    calories: "1550–1700",
    protein: "170–180g",
    carbs: "110–130g",
    fat: "45–55g",
    longRunCalories: "1700–1900",
    longRunCarbs: "160–180g",
    notes: "Eight weeks of disciplined eating. BFT six days + runs. Replicate and exceed your last challenge result (11.3kg). You have done it before.",
    rules: [
      "Meal prep every Sunday. No exceptions.",
      "Log every single meal. Do not guess.",
      "Protein target is non-negotiable.",
      "Do NOT skip meals when scales disappoint.",
      "Sleep 7+ hours minimum.",
      "2.5–3L water daily.",
      "One rest day minimum per week.",
      "Add 150–200 kcal in carbs on runs 13km+",
    ],
    meals: {
      breakfast: [
        { name: "Protein Smoothie", desc: "VPA Whey Blend + banana + milk + peanut butter + spinach (optional)", macros: "~420 kcal | 40g protein" },
        { name: "Protein Oats", desc: "60g oats + 1 scoop VPA stirred in + milk + cinnamon or honey", macros: "~450 kcal | 42g protein" },
      ],
      lunch: [
        { name: "High Protein Soup", desc: "Chicken or turkey mince, lentils or chickpeas, hearty winter veg, stock. Batch prep.", macros: "~400 kcal | 45g protein" },
        { name: "Salad Bowl", desc: "Mixed greens, 150g grilled chicken or tuna, chickpeas, veg, small dressing", macros: "~380 kcal | 45g protein" },
      ],
      snack: [
        { name: "Protein Water", desc: "Afternoon only. Best option for Phase 1.", macros: "90 kcal | 20g protein" },
        { name: "Greek Yoghurt", desc: "Plain, 170g. Add berries if needed.", macros: "120 kcal | 17g protein" },
        { name: "Rice Cakes + Cottage Cheese", desc: "2 rice cakes + 80g cottage cheese", macros: "150 kcal | 12g protein" },
      ],
      dinner: [
        { name: "Slow Cook Beef", desc: "Beef chuck, diced tomatoes, stock, onion, garlic, carrot, sweet potato. Your serve: extra veg not mash.", macros: "~480 kcal | 45g protein" },
        { name: "Chicken Casserole", desc: "Chicken thigh (skin off), cannellini beans, crushed tomatoes, silverbeet, stock", macros: "~460 kcal | 48g protein" },
        { name: "Chicken Stir Fry", desc: "Chicken breast, broccoli, capsicum, snow peas, bok choy, oyster sauce. 1/2 cup rice.", macros: "~450 kcal | 42g protein" },
        { name: "Beef Stir Fry", desc: "Lean beef strips, Asian veg, sesame oil, soy, garlic. 1/2 cup rice.", macros: "~460 kcal | 40g protein" },
        { name: "Pasta Night", desc: "Lean beef or turkey bolognese, wholemeal pasta (60–70g dry for you), zucchini grated in", macros: "~500 kcal | 42g protein" },
        { name: "Baked Salmon", desc: "Salmon fillet, roast veg (zucchini, capsicum, broccolini)", macros: "~450 kcal | 44g protein" },
      ],
    },
  },
  {
    id: "phase2",
    label: "Phase 2",
    sublabel: "Moderate Cut",
    dates: "3 Aug – 14 Sep",
    color: "#2E7D32",
    bg: "#E8F5E9",
    focus: "Cut to 15% BF",
    calories: "1700–1900",
    protein: "165–180g",
    carbs: "150–180g",
    fat: "50–60g",
    longRunCalories: "1900–2100",
    longRunCarbs: "200–230g",
    notes: "Long runs building to 16–24km. Still cutting but with more fuel. Target: reach approx 15% body fat (around 76–78kg total weight) by end of Phase 2.",
    rules: [
      "Carb load Saturday night for Sunday long runs 13km+",
      "Pre-run meal 60–90 min before long runs",
      "Carry gels for runs over 90 minutes",
      "Recovery meal within 30–45 min post long run",
      "Protein and sleep remain non-negotiable",
      "Slightly bigger carb portions on training days",
    ],
    meals: {
      breakfast: [
        { name: "Protein Smoothie", desc: "VPA Whey Blend + banana + milk + peanut butter", macros: "~420 kcal | 40g protein" },
        { name: "Protein Oats (Long Run Pre-Fuel)", desc: "60g oats + banana + 1 scoop VPA + honey. Eat 60–90 min before run.", macros: "~480 kcal | 42g protein" },
        { name: "Sourdough + Peanut Butter + Banana", desc: "2 slices sourdough, peanut butter, banana. Quick pre-run option.", macros: "~450 kcal | 18g protein" },
      ],
      lunch: [
        { name: "High Protein Soup", desc: "Chicken or turkey base, lentils, hearty winter veg. Batch prep Sunday.", macros: "~400 kcal | 45g protein" },
        { name: "Chicken Rice Bowl", desc: "Grilled chicken, 3/4 cup brown rice, salad, light dressing", macros: "~460 kcal | 46g protein" },
      ],
      snack: [
        { name: "Protein Water", desc: "Afternoon snack", macros: "90 kcal | 20g protein" },
        { name: "Greek Yoghurt + Fruit", desc: "170g yoghurt + mixed berries or banana", macros: "150 kcal | 17g protein" },
      ],
      dinner: [
        { name: "Slow Cook Lamb", desc: "Lamb shoulder, Mediterranean veg, chickpeas, tomatoes, cumin", macros: "~520 kcal | 48g protein" },
        { name: "Chicken Soup", desc: "Whole chicken simmered, shredded, with veg and noodles or rice. Great recovery meal.", macros: "~460 kcal | 46g protein" },
        { name: "Thai Chicken Curry", desc: "Chicken breast, light coconut milk, zucchini, capsicum, 1/2 cup rice", macros: "~490 kcal | 44g protein" },
        { name: "Baked Chicken Thighs", desc: "Skin-off thighs, roast veg tray, lemon and herbs. Family favourite.", macros: "~460 kcal | 46g protein" },
        { name: "Beef Tacos", desc: "Lean mince, 2 corn tortillas, salsa, avocado, slaw. Keep to 2 tortillas.", macros: "~480 kcal | 38g protein" },
        { name: "Pasta (Carb Load Night)", desc: "100g dry wholemeal pasta, lean bolognese or napoli. Bigger serve than Phase 1.", macros: "~580 kcal | 44g protein" },
      ],
    },
  },
  {
    id: "phase3",
    label: "Phase 3",
    sublabel: "Maintenance + Fuel",
    dates: "15 Sep – 28 Sep",
    color: "#4A148C",
    bg: "#F3E5F5",
    focus: "Fuel the Big Runs",
    calories: "2000–2200",
    protein: "160–170g",
    carbs: "220–260g",
    fat: "55–70g",
    longRunCalories: "2300–2500",
    longRunCarbs: "290–320g",
    notes: "Long runs hit 21–32km. Body composition is secondary. Arrive at race day lean, strong and fuelled. Weight may nudge up slightly. This is normal.",
    rules: [
      "Carbs are the priority now. Eat them.",
      "Fuel during runs over 90 min: 30–60g carbs per hour via gels",
      "Recovery meal within 30–45 min of finishing long runs",
      "Practice your race day fuelling strategy in training",
      "Sleep is critical at this training load",
      "Do not restrict on heavy training days",
    ],
    meals: {
      breakfast: [
        { name: "Protein Oats (Main Option)", desc: "80g oats + banana + 1 scoop VPA + honey + milk. Bigger portion now.", macros: "~550 kcal | 44g protein" },
        { name: "Protein Smoothie", desc: "VPA Whey + banana + oats blended in + milk + peanut butter", macros: "~500 kcal | 42g protein" },
      ],
      lunch: [
        { name: "Chicken Rice Bowl", desc: "150g grilled chicken, 1 cup brown rice, roast veg, light dressing", macros: "~520 kcal | 48g protein" },
        { name: "Hearty Soup + Bread", desc: "Protein soup + 1–2 slices sourdough", macros: "~480 kcal | 42g protein" },
      ],
      snack: [
        { name: "Banana + Rice Cakes", desc: "1 banana + 2 rice cakes with peanut butter", macros: "200 kcal | 8g protein" },
        { name: "Greek Yoghurt + Granola", desc: "Yoghurt + small serve granola + berries", macros: "220 kcal | 16g protein" },
      ],
      dinner: [
        { name: "Pasta Night (Bigger Serve)", desc: "Lean bolognese, 100–120g dry pasta, side salad", macros: "~620 kcal | 46g protein" },
        { name: "Chicken + Sweet Potato", desc: "Grilled chicken, large sweet potato, steamed broccoli", macros: "~520 kcal | 48g protein" },
        { name: "Slow Cook Casserole + Rice", desc: "Beef or chicken casserole + 3/4 cup rice to boost carbs", macros: "~560 kcal | 48g protein" },
      ],
    },
  },
  {
    id: "phase4",
    label: "Phase 4",
    sublabel: "Race Prep",
    dates: "29 Sep – 11 Oct",
    color: "#B71C1C",
    bg: "#FFEBEE",
    focus: "Carb Load + Race Day",
    calories: "2200–2800",
    protein: "130–165g",
    carbs: "260–400g",
    fat: "60–75g",
    notes: "Taper and carb load. Scales WILL go up. Do not panic. Water retention with glycogen loading is working. The goal is to arrive at the start line fuelled and ready.",
    rules: [
      "3-day carb load: 6–8 October. Shift macros to carbs heavily.",
      "Reduce dietary fat slightly during carb load",
      "Keep foods simple and familiar. No new foods race week.",
      "Race morning: eat 3 hours before start",
      "Race day meal: toast + jam + banana + electrolytes",
      "Gel every 30–40 min from 45 min into the race",
      "Drink at every aid station, even if not thirsty",
      "Post race: chocolate milk or protein bar within 30 min",
    ],
    meals: {
      breakfast: [
        { name: "Race Week Breakfast", desc: "2–3 slices sourdough + jam or honey + banana + sports drink", macros: "~550 kcal | 18g protein" },
        { name: "Oats (Pre-Race Option)", desc: "80g oats + honey + banana + pinch salt. Eat 3 hours before start.", macros: "~520 kcal | 16g protein" },
      ],
      lunch: [
        { name: "Pasta Bowl", desc: "Pasta with tomato-based sauce, chicken, side of bread", macros: "~650 kcal | 44g protein" },
        { name: "Rice Bowl", desc: "Chicken, 1.5 cups cooked rice, roast veg, light sauce", macros: "~580 kcal | 46g protein" },
      ],
      snack: [
        { name: "Rice Cakes + Honey", desc: "Simple, low fat, easy carbs", macros: "140 kcal | 3g protein" },
        { name: "Banana + Sports Drink", desc: "Quick energy top-up", macros: "180 kcal | 2g protein" },
      ],
      dinner: [
        { name: "Pasta Carb Load Dinner", desc: "Classic pasta, tomato-based sauce, garlic bread, side salad. Eat until comfortably full.", macros: "~700 kcal | 38g protein" },
        { name: "Chicken + Rice + Veg", desc: "Simple and familiar. Good carb base without heavy fat.", macros: "~580 kcal | 46g protein" },
      ],
    },
  },
];

const PREP_ROUTINE = [
  { step: "1. Soup", detail: "Big pot of high protein winter soup. Enough for 5 lunches. Chicken or turkey base with lentils and winter veg." },
  { step: "2. Protein Batch", detail: "Grill or bake 6–8 chicken breasts. Use through the week for bowls, stir fries, quick meals." },
  { step: "3. Veg Prep", detail: "Wash, chop and portion salad veg into containers. Roast a tray of sweet potato." },
  { step: "4. Smoothie Bags", detail: "Portion smoothie bags in the freezer. Banana + spinach in zip lock bags. Just add powder and milk each morning." },
  { step: "5. Snacks Out", detail: "Set out Greek yoghurt and rice cakes for the week so they're visible and ready to grab." },
];

const MacroBar = ({ label, value, color, bg }) => (
  <div style={{ background: bg, borderRadius: 10, padding: "10px 14px", textAlign: "center", flex: 1 }}>
    <div style={{ fontSize: 11, color: "#666", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
    <div style={{ fontSize: 20, fontWeight: 800, color, marginTop: 2 }}>{value}</div>
  </div>
);

const MealCard = ({ meal }) => (
  <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: "12px 14px", marginBottom: 8 }}>
    <div style={{ fontWeight: 700, fontSize: 14, color: "#1A3557" }}>{meal.name}</div>
    <div style={{ fontSize: 13, color: "#555", marginTop: 3 }}>{meal.desc}</div>
    <div style={{ fontSize: 12, color: "#888", marginTop: 5, fontStyle: "italic" }}>{meal.macros}</div>
  </div>
);

export default function NutritionPlan() {
  const [activePhase, setActivePhase] = useState("phase1");
  const [activeTab, setActiveTab] = useState("overview");
  const [mealTab, setMealTab] = useState("breakfast");

  const phase = PHASES.find(p => p.id === activePhase);

  const tabStyle = (id) => ({
    padding: "8px 16px",
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    background: activeTab === id ? phase.color : "#f0f0f0",
    color: activeTab === id ? "#fff" : "#555",
    transition: "all 0.2s",
  });

  const mealTabStyle = (id) => ({
    padding: "6px 14px",
    borderRadius: 16,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 12,
    background: mealTab === id ? phase.color : "#f0f0f0",
    color: mealTab === id ? "#fff" : "#666",
    transition: "all 0.2s",
  });

  return (
    <div style={{ fontFamily: "'Georgia', serif", maxWidth: 680, margin: "0 auto", background: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#1A3557", padding: "24px 20px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#7BAAD4", letterSpacing: 3, fontWeight: 600, textTransform: "uppercase" }}>Ben's</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>RACE READY</div>
        <div style={{ fontSize: 13, color: "#7BAAD4", marginTop: 2 }}>Nutrition Plan • June – October 2026</div>
        <div style={{ marginTop: 10, display: "inline-block", background: "#E65100", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "#fff", fontWeight: 700 }}>
          Nike Melbourne Marathon • 11 October 2026
        </div>
      </div>

      {/* Phase Selector */}
      <div style={{ background: "#fff", padding: "12px 16px", borderBottom: "1px solid #eee", display: "flex", gap: 6, overflowX: "auto" }}>
        {PHASES.map(p => (
          <button
            key={p.id}
            onClick={() => { setActivePhase(p.id); setActiveTab("overview"); }}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: `2px solid ${activePhase === p.id ? p.color : "#ddd"}`,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 12,
              background: activePhase === p.id ? p.bg : "#fff",
              color: activePhase === p.id ? p.color : "#888",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Phase Header */}
      <div style={{ background: phase.bg, padding: "16px 20px", borderBottom: `3px solid ${phase.color}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: phase.color }}>{phase.label}{phase.sublabel ? `: ${phase.sublabel}` : ""}</div>
            <div style={{ fontSize: 13, color: "#555", marginTop: 2 }}>{phase.dates}</div>
          </div>
          <div style={{ background: phase.color, color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>{phase.focus}</div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <MacroBar label="Calories" value={phase.calories} color={phase.color} bg="#fff" />
          <MacroBar label="Protein" value={phase.protein} color="#2E7D32" bg="#E8F5E9" />
          <MacroBar label="Carbs" value={phase.carbs} color="#E65100" bg="#FFF3E0" />
          <MacroBar label="Fat" value={phase.fat} color="#4A148C" bg="#F3E5F5" />
        </div>
        {phase.longRunCalories && (
          <div style={{ marginTop: 10, background: "#fff", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#555", borderLeft: `3px solid ${phase.color}` }}>
            <strong style={{ color: phase.color }}>Long Run Days (13km+):</strong> {phase.longRunCalories} kcal • Carbs: {phase.longRunCarbs} • Add carbs night before and on the day
          </div>
        )}
      </div>

      {/* Tab Nav */}
      <div style={{ background: "#fff", padding: "12px 16px", display: "flex", gap: 8, borderBottom: "1px solid #eee" }}>
        <button style={tabStyle("overview")} onClick={() => setActiveTab("overview")}>Overview</button>
        <button style={tabStyle("meals")} onClick={() => setActiveTab("meals")}>Meals</button>
        <button style={tabStyle("rules")} onClick={() => setActiveTab("rules")}>Rules</button>
        <button style={tabStyle("prep")} onClick={() => setActiveTab("prep")}>Meal Prep</button>
      </div>

      {/* Tab Content */}
      <div style={{ padding: "16px 20px" }}>
        {activeTab === "overview" && (
          <div>
            <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, background: "#fff", borderRadius: 10, padding: "14px 16px", border: "1px solid #eee" }}>
              {phase.notes}
            </p>

            {/* Protein Target Reference */}
            <div style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#1A3557", marginBottom: 10 }}>Daily Protein Targets</div>
              {[
                { meal: "Breakfast", target: "38–45g", source: "VPA Whey Blend + oats or smoothie" },
                { meal: "Lunch", target: "40–48g", source: "Chicken soup or salad bowl" },
                { meal: "Snack", target: "17–22g", source: "Protein water or Greek yoghurt" },
                { meal: "Dinner", target: "45–55g", source: "Lean protein base" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: i % 2 === 0 ? "#f5f5f5" : "#fff", borderRadius: 8, padding: "10px 14px", marginBottom: 4, border: "1px solid #eee" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#1A3557" }}>{item.meal}</span>
                    <div style={{ fontSize: 12, color: "#777", marginTop: 1 }}>{item.source}</div>
                  </div>
                  <span style={{ fontWeight: 800, fontSize: 14, color: "#2E7D32" }}>{item.target}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#E8F5E9", borderRadius: 8, padding: "10px 14px", border: "2px solid #2E7D32" }}>
                <span style={{ fontWeight: 800, fontSize: 14, color: "#2E7D32" }}>Daily Total</span>
                <span style={{ fontWeight: 800, fontSize: 16, color: "#2E7D32" }}>160–170g</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "meals" && (
          <div>
            <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
              {["breakfast", "lunch", "snack", "dinner"].map(m => (
                <button key={m} style={mealTabStyle(m)} onClick={() => setMealTab(m)}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
            {phase.meals[mealTab].map((meal, i) => (
              <MealCard key={i} meal={meal} />
            ))}
          </div>
        )}

        {activeTab === "rules" && (
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1A3557", marginBottom: 12 }}>Phase Rules</div>
            {phase.rules.map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, border: `1px solid ${phase.bg}`, borderLeft: `4px solid ${phase.color}` }}>
                <div style={{ background: phase.color, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ fontSize: 14, color: "#333", lineHeight: 1.5 }}>{rule}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "prep" && (
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1A3557", marginBottom: 4 }}>Sunday Meal Prep Routine</div>
            <div style={{ fontSize: 13, color: "#777", marginBottom: 14 }}>~90 minutes. Sets up the whole week.</div>
            {PREP_ROUTINE.map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "14px 16px", marginBottom: 8, border: "1px solid #eee" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: phase.color }}>{item.step}</div>
                <div style={{ fontSize: 13, color: "#555", marginTop: 4, lineHeight: 1.6 }}>{item.detail}</div>
              </div>
            ))}

            <div style={{ marginTop: 16, fontWeight: 700, fontSize: 15, color: "#1A3557", marginBottom: 10 }}>Shopping Staples</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", border: "1px solid #eee" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1A3557", marginBottom: 8 }}>Proteins</div>
                {["Chicken breast (1.5–2kg/wk)", "Lean beef or turkey mince", "Salmon fillets", "Eggs (dozen)", "Greek yoghurt (plain)", "VPA Whey Blend", "Tuna cans", "Cottage cheese"].map((item, i) => (
                  <div key={i} style={{ fontSize: 12, color: "#555", padding: "3px 0", borderBottom: "1px solid #f5f5f5" }}>{item}</div>
                ))}
              </div>
              <div style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", border: "1px solid #eee" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1A3557", marginBottom: 8 }}>Carbs + Veg</div>
                {["Rolled oats", "Wholemeal pasta", "Basmati or brown rice", "Sweet potato", "Mixed salad greens", "Broccoli, zucchini, capsicum", "Bananas + berries", "Sourdough bread", "Chickpeas + lentils (canned)", "Rice cakes"].map((item, i) => (
                  <div key={i} style={{ fontSize: 12, color: "#555", padding: "3px 0", borderBottom: "1px solid #f5f5f5" }}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ background: "#1A3557", padding: "16px 20px", textAlign: "center", marginTop: 16 }}>
        <div style={{ fontSize: 12, color: "#7BAAD4" }}>You have done this before. Now do it better.</div>
        <div style={{ fontSize: 11, color: "#E65100", marginTop: 4, fontWeight: 700 }}>Nike Melbourne Marathon • 11 October 2026</div>
      </div>
    </div>
  );
}
