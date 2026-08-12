export type Course = {
  slug: string;
  name: string;
  category: string;
  duration: string;
  durationWeeks: number;
  mode: string;
  level: string;
  description: string;
  outcome: string;
  accent: string;
  modules: { title: string; lessons: string }[];
  tools: string[];
};

export const courses: Course[] = [
  {
    slug: "spoken-english",
    name: "Spoken English",
    category: "Communication",
    duration: "10 weeks",
    durationWeeks: 10,
    mode: "Offline + Live",
    level: "Beginner",
    description: "Build everyday fluency, grammar confidence and clear pronunciation through guided practice.",
    outcome: "Speak more comfortably in study, work and daily situations.",
    accent: "#eaf4ff",
    tools: ["Role-play labs", "Audio practice", "Speaking journal"],
    modules: [
      { title: "Everyday foundations", lessons: "Sentence patterns, essential grammar, introductions and common conversations" },
      { title: "Listening and pronunciation", lessons: "Sound clarity, word stress, listening drills and self-correction" },
      { title: "Speaking with confidence", lessons: "Group discussions, presentations, phone calls and real-life role plays" },
      { title: "Workplace communication", lessons: "Professional vocabulary, meetings, email basics and interview speaking" },
    ],
  },
  {
    slug: "tally-gst",
    name: "Tally + GST",
    category: "Commerce",
    duration: "12 weeks",
    durationWeeks: 12,
    mode: "Offline",
    level: "Beginner",
    description: "Learn practical accounting workflows, inventory, invoicing and GST essentials in TallyPrime.",
    outcome: "Handle common business accounts and GST entries with confidence.",
    accent: "#fff3dc",
    tools: ["TallyPrime", "GST portal demos", "Practice company data"],
    modules: [
      { title: "Accounting essentials", lessons: "Ledgers, vouchers, journal entries and trial balance" },
      { title: "TallyPrime workflows", lessons: "Company setup, sales, purchases, banking and inventory" },
      { title: "GST in practice", lessons: "Tax structure, invoices, returns overview and reconciliation" },
      { title: "Business simulation", lessons: "Month-end project using realistic sample transactions" },
    ],
  },
  {
    slug: "advanced-excel",
    name: "Advanced Excel",
    category: "Office Skills",
    duration: "8 weeks",
    durationWeeks: 8,
    mode: "Offline + Live",
    level: "Intermediate",
    description: "Turn raw data into useful reports with formulas, PivotTables, dashboards and automation basics.",
    outcome: "Work faster and present clear, decision-ready reports.",
    accent: "#e6f8f2",
    tools: ["Microsoft Excel", "Power Query", "Dashboard templates"],
    modules: [
      { title: "Formula fluency", lessons: "Logical, lookup, text, date and dynamic array functions" },
      { title: "Data preparation", lessons: "Cleaning, validation, tables and Power Query foundations" },
      { title: "Analysis and reporting", lessons: "PivotTables, charts, slicers and management summaries" },
      { title: "Dashboard project", lessons: "Build and present an interactive business dashboard" },
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    category: "Creative",
    duration: "16 weeks",
    durationWeeks: 16,
    mode: "Offline",
    level: "Beginner",
    description: "Learn design principles and create a practical portfolio across brand, print and social media work.",
    outcome: "Develop a focused beginner portfolio with trainer feedback.",
    accent: "#f3eaff",
    tools: ["Photoshop", "Illustrator", "Canva"],
    modules: [
      { title: "Design foundations", lessons: "Composition, colour, typography and visual hierarchy" },
      { title: "Image editing", lessons: "Selections, retouching, compositing and export workflows" },
      { title: "Vector design", lessons: "Shapes, pen tool, logos, icons and print artwork" },
      { title: "Portfolio sprint", lessons: "Brand mini-system, campaign posts and presentation" },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "Technology",
    duration: "20 weeks",
    durationWeeks: 20,
    mode: "Offline + Live",
    level: "Beginner",
    description: "Build responsive websites with HTML, CSS, JavaScript and a practical introduction to React.",
    outcome: "Publish responsive projects and explain how they work.",
    accent: "#e9efff",
    tools: ["VS Code", "GitHub", "React"],
    modules: [
      { title: "Web foundations", lessons: "Semantic HTML, accessible structure and browser fundamentals" },
      { title: "Responsive styling", lessons: "CSS layout, components, breakpoints and interaction states" },
      { title: "JavaScript essentials", lessons: "Variables, functions, DOM, events and APIs" },
      { title: "Project and publishing", lessons: "React basics, Git workflow and portfolio deployment" },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "Marketing",
    duration: "14 weeks",
    durationWeeks: 14,
    mode: "Live + Offline",
    level: "Beginner",
    description: "Plan content, understand paid campaigns and measure digital activity with practical exercises.",
    outcome: "Create a basic campaign plan and performance report.",
    accent: "#fff0ed",
    tools: ["Meta Ads demos", "Google Analytics demos", "Canva"],
    modules: [
      { title: "Digital strategy", lessons: "Audiences, funnels, positioning and channel planning" },
      { title: "Content and social", lessons: "Content pillars, calendars, creative briefs and community basics" },
      { title: "Campaign foundations", lessons: "Paid media structure, budgets, targeting and creative testing" },
      { title: "Measurement", lessons: "KPIs, analytics concepts, reporting and campaign review" },
    ],
  },
  {
    slug: "interview-preparation",
    name: "Interview Preparation",
    category: "Career Skills",
    duration: "4 weeks",
    durationWeeks: 4,
    mode: "Offline + Live",
    level: "Beginner",
    description: "Prepare clear answers, improve professional communication and practise realistic mock interviews.",
    outcome: "Attend interviews with a stronger story and better preparation.",
    accent: "#f1f6e8",
    tools: ["Mock interview", "CV checklist", "Feedback scorecard"],
    modules: [
      { title: "Your professional story", lessons: "Strengths, examples, self-introduction and role research" },
      { title: "Answer structures", lessons: "Common questions, STAR method and difficult conversations" },
      { title: "Interview presence", lessons: "Voice, body language, online interviews and follow-up" },
      { title: "Mock and feedback", lessons: "Recorded practice, personalised review and improvement plan" },
    ],
  },
];

export const faqs = [
  ["Who can join the courses?", "Most programmes are designed for students, graduates, working professionals and business owners. Each course page lists any specific prerequisites."],
  ["Are classes online or at the centre?", "Both options are available for selected courses. You can choose a live online or Ahmedabad centre batch during counselling."],
  ["How can I know the fees?", "Fees depend on the course, learning mode and current batch plan. Book a free counselling call for a clear, no-pressure fee explanation."],
  ["Will I receive a certificate?", "A SkillBridge course-completion certificate is provided for eligible programmes after attendance and assessment requirements are met."],
  ["What if I miss a class?", "Trainers provide a catch-up plan based on the topic and batch. Options may include notes, practice work or a suitable repeat session."],
  ["Is the demo class really free?", "Yes. The demo is a short, no-obligation way to understand the teaching style and course fit."],
  ["Do you guarantee placement?", "No institute can honestly guarantee a job. We provide interview practice, portfolio guidance and career-readiness support where relevant."],
];

export const batches = [
  ["Advanced Excel", "18 Aug 2026", "8:00–9:30 AM", "Few seats"],
  ["Spoken English", "20 Aug 2026", "6:30–8:00 PM", "Open"],
  ["Tally + GST", "24 Aug 2026", "10:30 AM–12:00 PM", "Open"],
  ["Web Development", "29 Aug 2026", "6:00–8:00 PM", "Enquire"],
];

export const stories = [
  { initials: "MP", name: "Meera P.", course: "Spoken English · Sample story", quote: "The weekly speaking practice helped me organise my thoughts and participate more confidently in class discussions." },
  { initials: "AS", name: "Aarav S.", course: "Advanced Excel · Sample story", quote: "Building one complete dashboard made formulas and PivotTables feel much more practical than learning them separately." },
  { initials: "NK", name: "Nisha K.", course: "Graphic Design · Sample story", quote: "The feedback sessions helped me improve my layouts and explain the choices behind my portfolio work." },
];
