export interface UsefulResource {
  id: string;
  title: string;
  category: "Official Cambridge" | "Practice & Drills" | "Authentic Reading" | "Vocabulary & Grammar";
  description: string;
  url: string;
  badgeText: string;
  recommendedFor: string;
}

export const C1_RESOURCES: UsefulResource[] = [
  {
    id: "res-1",
    title: "Cambridge C1 Advanced Official Overview",
    category: "Official Cambridge",
    description: "Official Cambridge English website detailing exam structure, paper weights, timing, and downloadable sample papers.",
    url: "https://www.cambridgeenglish.org/exams-and-tests/advanced/",
    badgeText: "Official Site",
    recommendedFor: "Understanding exam format and downloading free sample papers."
  },
  {
    id: "res-2",
    title: "Flo-Joe: The Main Event for CAE",
    category: "Practice & Drills",
    description: "Premier preparation portal for Cambridge C1 Advanced with daily Use of English Part 1-4 exercises, writing feedback, and vocabulary builders.",
    url: "https://www.flo-joe.co.uk/cae/students/tests/",
    badgeText: "Top Rated",
    recommendedFor: "Daily Key Word Transformations and Use of English drills."
  },
  {
    id: "res-3",
    title: "Write & Improve by Cambridge",
    category: "Official Cambridge",
    description: "Automated AI feedback tool developed by Cambridge English to evaluate C1 essays, reports, proposals, and reviews in seconds.",
    url: "https://writeandimprove.com/",
    badgeText: "AI Writing Tool",
    recommendedFor: "Submitting practice essays and tracking CEFR grade accuracy."
  },
  {
    id: "res-4",
    title: "BBC Learning English (C1 / Advanced)",
    category: "Vocabulary & Grammar",
    description: "Comprehensive lessons on advanced English grammar, idioms, phrasal verbs, and listening practice.",
    url: "https://www.bbc.co.uk/learningenglish/english/course/towards-advanced",
    badgeText: "Free Audio/Video",
    recommendedFor: "Natural C1 listening & nuanced grammar explanations."
  },
  {
    id: "res-5",
    title: "The Guardian — Authentic Reading",
    category: "Authentic Reading",
    description: "High-level journalism covering international news, culture, science, and opinion pieces ideal for C1 vocabulary expansion.",
    url: "https://www.theguardian.com",
    badgeText: "Authentic Media",
    recommendedFor: "Improving reading speed and identifying inversion & participle clauses in real contexts."
  },
  {
    id: "res-6",
    title: "The Economist",
    category: "Authentic Reading",
    description: "In-depth analysis of global business, policy, and economics featuring rich academic C1/C2 vocabulary.",
    url: "https://www.economist.com",
    badgeText: "C1/C2 Vocabulary",
    recommendedFor: "Mastering formal register for CAE Writing and Speaking."
  },
  {
    id: "res-7",
    title: "Oxford 3000 & 5000 C1 Wordlist",
    category: "Vocabulary & Grammar",
    description: "Curated vocabulary list of key C1 words compiled by Oxford University Press with definitions and collocations.",
    url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000",
    badgeText: "Word Bank",
    recommendedFor: "Targeted C1 vocabulary building."
  }
];
