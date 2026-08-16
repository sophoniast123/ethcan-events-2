// Central data for the ETHCAN Events site.

export const ALL_IMAGES = Array.from(
  { length: 72 },
  (_, i) => `/img/event-${String(i + 1).padStart(2, "0")}.jpg`
);

// Curated slices so every image gets used somewhere on the page (all from new images 44-73).
export const HERO_IMAGES = ALL_IMAGES.slice(43, 73); // 44–73 rotating hero backdrop
export const ABOUT_IMAGES = ALL_IMAGES.slice(43, 51); // 44–51 collage
export const WTD_IMAGES = ALL_IMAGES.slice(56, 60); // 52–55 main event section
export const PROGRAMME_IMAGES = ALL_IMAGES.slice(13, 21); // 56–63 programme cards
export const GALLERY_IMAGES = ALL_IMAGES.slice(63, 71); // 64–73 gallery grid

export const EVENT = {
  name: "World Tourism Day 2026 Celebration",
  theme: "Digital Agenda and Artificial Intelligence to Redesign Tourism",
  city: "Science Museum, Addis Ababa, Ethiopia",
  dateLabel: "24 – 26 September 2026",
  // Countdown target: World Tourism Day 2026
  targetDate: "2026-09-24T09:00:00+03:00",
  email: "ethcanevents@gmail.com",
  phone: "+251 976 629 099 / +251 976 629 199 /+1 519 722 8295 (CAN)",
  address: "Glory Building, 6th Floor, Office 605, Addis Ababa, Ethiopia / 10 Indigo Street, Kitchener, Ontario, Canada, N2E4E8",
  hours: "Mon–Sat, 8:30 AM – 6:30 PM EAT",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "WTD 2026", href: "#wtd2026" },
  { label: "Pillars", href: "#pillars" },
  { label: "Programme", href: "#programme" },
  { label: "Participation", href: "#participation" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
];

export const TICKER_WORDS = [
  "Smart Tourism",
  "Artificial Intelligence",
  "Land of Origins",
  "Invest in Ethiopia",
  "Pan-African",
  "Digital Agenda",
  "Culture & Heritage",
  "Addis Ababa 2026",
  "Diaspora Connect",
  "Sustainable Travel",
];

export const STATS = [
  { value: 500, suffix: "+", label: "Strategic Partners" },
  { value: 300000, suffix: "+", label: "Attendees" },
  { value: 15000, suffix: "+", label: "Expected Delegates" },
  { value: 60, suffix: "+", label: "Countries Represented" },
  { value: 40, suffix: "+", label: "Forums & Sessions" },
  { value: 120, suffix: "+", label: "Exhibitors & Brands" }
];

export const PILLARS = [
  {
    icon: "🤖",
    title: "Technology & AI",
    text: "Artificial intelligence, digital platforms and smart-destination tools redesigning how the world travels to and within Africa.",
  },
  {
    icon: "🌍",
    title: "Tourism",
    text: "Positioning Ethiopia — the Land of Origins — as a leading global destination for culture, nature, adventure and faith tourism.",
  },
  {
    icon: "💼",
    title: "Business & Investment",
    text: "Unlocking hospitality, aviation and destination-infrastructure investment through high-level forums and matchmaking.",
  },
  {
    icon: "🎭",
    title: "Culture & Heritage",
    text: "Pan-African cultural programmes celebrating music, cuisine, fashion and the living heritage of 80+ Ethiopian nations.",
  },
  {
    icon: "🤝",
    title: "Diaspora & Partnership",
    text: "Engaging the Ethiopian and African diaspora as investors, ambassadors and co-creators of the continent's tourism future.",
  },
];

export type ProgrammeItem = {
  title: string;
  category: "Ceremonies" | "Forums & Summits" | "Exhibitions" | "Culture & Community";
  day: string;
  text: string;
  image?: string;
};

export const PROGRAMME: ProgrammeItem[] = [
  {
    title: "Grand Opening Ceremony",
    category: "Ceremonies",
    day: "Day 1",
    text: "Official opening with government leaders, UN Tourism representatives, diplomatic corps and cultural performances.",
    image: PROGRAMME_IMAGES[0],
  },
  {
    title: "High-Level Policy Dialogues",
    category: "Forums & Summits",
    day: "Day 1–2",
    text: "Ministers, policymakers and industry leaders shape the digital agenda for African tourism policy.",
    image: PROGRAMME_IMAGES[1],
  },
  {
    title: "AI & Smart Tourism Summit",
    category: "Forums & Summits",
    day: "Day 2",
    text: "The flagship summit on artificial intelligence, big data and smart destinations redesigning global tourism.",
    image: PROGRAMME_IMAGES[2],
  },
  {
    title: "Tourism Investment Forum",
    category: "Forums & Summits",
    day: "Day 2–3",
    text: "Deal-rooms and pitch sessions connecting investors with hospitality and destination-development projects.",
    image: PROGRAMME_IMAGES[3],
  },
  {
    title: "Destination & Hospitality Exhibitions",
    category: "Exhibitions",
    day: "Day 1–3",
    text: "Destinations, hotels, airlines and travel-tech innovators exhibit to thousands of trade and public visitors.",
    image: PROGRAMME_IMAGES[4],
  },
  {
    title: "Pan-African Cultural Programmes",
    category: "Culture & Community",
    day: "Day 1–3",
    text: "Music, dance, cuisine and fashion showcases celebrating Ethiopia and the wider African continent.",
    image: PROGRAMME_IMAGES[5],
  },
  {
    title: "Ethiopian Diaspora Tourism & Investment Forum",
    category: "Forums & Summits",
    day: "Day 3",
    text: "Dedicated forum engaging the global Ethiopian diaspora in tourism promotion and investment.",
    image: PROGRAMME_IMAGES[6],
  },
  {
    title: "Digital Skills & Youth Innovation Lab",
    category: "Culture & Community",
    day: "Day 3",
    text: "Hands-on workshops equipping young Ethiopians with AI and digital-tourism skills, plus a startup showcase.",
    image: PROGRAMME_IMAGES[7],
  },
  {
    title: "Sustainable Tourism Roundtable",
    category: "Forums & Summits",
    day: "Day 3",
    text: "Experts chart a responsible, community-first path for tourism growth across the Horn of Africa.",
  },
  {
    title: "City & Heritage Familiarization Tours",
    category: "Culture & Community",
    day: "Day 3",
    text: "Guided experiences across Addis Ababa's museums, markets and landmarks for international delegates.",
  },
  {
    title: "Gala Dinner & Tourism Excellence Awards",
    category: "Ceremonies",
    day: "Day 3",
    text: "A celebratory evening honouring outstanding contributions to Ethiopian and African tourism.",
  },
  {
    title: "Closing Ceremony & Addis Declaration",
    category: "Ceremonies",
    day: "Day 3",
    text: "Adoption of the Addis Ababa declaration on AI and the digital future of African tourism.",
  },
];

export const PROGRAMME_FILTERS = [
  "All",
  "Ceremonies",
  "Forums & Summits",
  "Exhibitions",
  "Culture & Community",
] as const;

export const AUDIENCES = [
  "Government Ministries & Agencies",
  "UN & International Organizations",
  "Embassies & Diplomatic Missions",
  "Tourism Boards & DMOs",
  "Airlines & Aviation Partners",
  "Hotels & Hospitality Groups",
  "Tour Operators & Travel Agencies",
  "Investors & Development Banks",
  "AI & Travel-Tech Companies",
  "Startups & Innovators",
  "Universities & Researchers",
  "Cultural Institutions & Artists",
  "Media & Content Creators",
  "Ethiopian & African Diaspora",
  "Chambers of Commerce",
  "NGOs & Community Organizations",
  "Students & Youth Groups",
  "Friends of Ethiopia",
];

export const PARTNER_TIERS = [
  {
    tier: "Organised By",
    partners: [{ name: "ETHCAN Events", tag: "Premium Events Company · Ethiopia" }],
  },
  {
    tier: "Host & Institutional Partners",
    partners: [
      { name: "Ministry of Tourism", tag: "Federal Democratic Republic of Ethiopia" },
      { name: "Addis Ababa City Administration", tag: "Host City" },
      { name: "African Union", tag: "Continental Partner" },
      { name: "UN Tourism Liaison", tag: "Global Observance" },
    ],
  },
  {
    tier: "Official Partners",
    partners: [
      { name: "Ethiopian Airlines", tag: "Official Carrier" },
      { name: "Ethiopian Skylight Hotel", tag: "Official Hotel" },
      { name: "Ethio Telecom", tag: "Connectivity Partner" },
      { name: "Commercial Bank of Ethiopia", tag: "Banking Partner" },
    ],
  },
  {
    tier: "Supporting Partners",
    partners: [
      { name: "Tourism Ethiopia", tag: "Destination Marketing" },
      { name: "Addis Chamber", tag: "Business Community" },
      { name: "Ethiopian Hotels Association", tag: "Industry Body" },
      { name: "Creative Hubs Ethiopia", tag: "Culture & Innovation" },
      { name: "National Media Partners", tag: "Broadcast & Press" },
      { name: "Diaspora Networks", tag: "Global Community" },
    ],
  },
];
