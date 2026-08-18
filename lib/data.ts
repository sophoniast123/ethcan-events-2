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
  phone1 : "+251 976 629 099 / +251 976 629 199 (ETH)",
  phone2 : "+1-519-722-8295 (CAN)",
  address: "Glory Building, 6th Floor, Office 605, Addis Ababa, Ethiopia",
  address2: " 10 Indigo Street, Kitchener, Ontario, Canada, N2E4E8",
  hours: "Mon–Sat, 8:30 AM – 6:30 PM EAT",
  locationUrl: "https://maps.app.goo.gl/zfHWBYidknv232MC7",
  timezone: "EAT / UTC+3",
  timezoneLabel: "Addis Ababa Time",
};

export const EVENT_SCHEDULE = [
  { day: "Thursday, September 24", time: "9:00 AM – 9:00 PM" },
  { day: "Friday, September 25", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday, September 26", time: "9:00 AM – 2:00 PM" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "PanAfrica Cultures", href: "#pan-africa-cultures" },
  { label: "Ethiopian Culinary", href: "#ethiopian-culinary" },
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
  { value: 10, suffix: "+", label: "Forums & Sessions" },
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

// PanAfrica Cultures — structured data for the carousel
export interface CultureItem {
  id: string;
  name: string;
  region: string;
  country: string;
  description: string;
  image: string;
  category: string;
}

export const PANAFRICA_CULTURES: CultureItem[] = [
  {
    id: "ethiopian-culture",
    name: "Ethiopian Culture",
    region: "East Africa",
    country: "Ethiopia",
    description: "Ancient Christian traditions, rock-hewn churches of Lalibela, unique calendar and script, and the birthplace of coffee.",
    image: "/f&b/ethiopia.jpg",
    category: "Heritage & Religion",
  },
  {
    id: "west-african-culture",
    name: "West African Culture",
    region: "West Africa",
    country: "Ghana, Nigeria, Senegal, Mali",
    description: "Rich traditions of griots (oral historians), kente cloth, highlife music, and ancient empires like Ghana, Mali, and Songhai.",
    image: "/f&b/west.jpg",
    category: "Music & Textiles",
  },
  {
    id: "east-african-culture",
    name: "East African Culture",
    region: "East Africa",
    country: "Kenya, Tanzania, Uganda, Rwanda",
    description: "Maasai beadwork, Swahili coastal heritage, Great Rift Valley cultures, and vibrant contemporary arts scenes in Nairobi and Dar es Salaam.",
    image: "/f&b/east.jpg",
    category: "Traditions & Landscapes",
  },
  {
    id: "southern-african-culture",
    name: "Southern African Culture",
    region: "Southern Africa",
    country: "South Africa, Zimbabwe, Botswana, Namibia",
    description: "San rock art, Zulu and Xhosa traditions, Cape Malay cuisine, and the dynamic creative energy of Johannesburg and Cape Town.",
    image: "/f&b/south.jpg",
    category: "Art & Heritage",
  },
  {
    id: "north-african-culture",
    name: "North African Culture",
    region: "North Africa",
    country: "Morocco, Egypt, Tunisia, Algeria",
    description: "Medina architecture, Berber (Amazigh) heritage, Islamic art and calligraphy, ancient pharaonic legacy, and vibrant souk culture.",
    image: "/f&b/north.jpg",
    category: "Architecture & History",
  },
  {
    id: "african-clothing",
    name: "Traditional African Clothing",
    region: "Continent-wide",
    country: "Various Nations",
    description: "Kente (Ghana), Ankara (West Africa), Kitenge (East Africa), Shweshwe (Southern Africa), Djellaba (North Africa) — textiles that tell stories.",
    image: "/f&b/clothing.jpg",
    category: "Fashion & Textiles",
  },
  {
    id: "african-festivals",
    name: "African Festivals",
    region: "Continent-wide",
    country: "Various Nations",
    description: "Timkat (Ethiopia), FESPACO (Burkina Faso), Cape Town Jazz Festival, Festival au Désert (Mali), Calabar Carnival (Nigeria) — celebrations of life.",
    image: "/f&b/festival.jpg",
    category: "Celebration & Community",
  },
  {
    id: "african-art",
    name: "African Art",
    region: "Continent-wide",
    country: "Various Nations",
    description: "Contemporary masters like El Anatsui, Wangechi Mutu, Zanele Muholi; ancient Benin bronzes, Dogon sculpture, and thriving gallery scenes.",
    image: "/f&b/art.jpg",
    category: "Visual Arts",
  },
  {
    id: "african-music-dance",
    name: "African Music & Dance",
    region: "Continent-wide",
    country: "Various Nations",
    description: "Afrobeat (Fela Kuti), Amapiano (SA), Highlife, Gnawa (Morocco), Ethio-jazz (Mulatu Astatke), traditional drumming — the heartbeat of the continent.",
    image: "/f&b/dance.jpg",
    category: "Performing Arts",
  },
  {
    id: "african-architecture",
    name: "African Architecture & Heritage",
    region: "Continent-wide",
    country: "Various Nations",
    description: "Great Zimbabwe stone ruins, Djenné mud mosque (Mali), Lalibela churches (Ethiopia), Kasbahs (Morocco), Cape Dutch architecture — built heritage across millennia.",
    image: "/f&b/arch.jpg",
    category: "Built Heritage",
  },
];

// Ethiopian Culinary — structured data for the food carousel
export interface CulinaryItem {
  id: string;
  name: string;
  nameAmharic?: string;
  description: string;
  ingredients: string;
  culturalNote: string;
  image: string;
  category: string;
}

export const ETHIOPIAN_CULINARY: CulinaryItem[] = [
  {
    id: "injera",
    name: "Injera",
    nameAmharic: "እንጀራ",
    description: "Ethiopia's iconic spongy sourdough flatbread made from teff flour — the foundation of every traditional meal.",
    ingredients: "Teff flour, water, fermentation starter (ersho)",
    culturalNote: "Injera doubles as both plate and utensil — tear off pieces to scoop up stews. A symbol of Ethiopian hospitality and community dining.",
    image: "/f&b/injera.jpg",
    category: "Staple Bread",
  },
  {
    id: "doro-wot",
    name: "Doro Wot",
    nameAmharic: "ዶሮ ወጥ",
    description: "Ethiopia's national dish — rich, spicy chicken stew simmered in berbere spice blend with hard-boiled eggs.",
    ingredients: "Chicken, berbere spice, onions, niter kibbeh (spiced butter), garlic, ginger, eggs",
    culturalNote: "Traditionally served for holidays and special occasions. The eggs symbolize prosperity and are often given to honored guests.",
    image: "/f&b/doro wot.jpg",
    category: "Stew",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    nameAmharic: "ክትፎ",
    description: "Minced raw beef marinated in mitmita (chili powder) and niter kibbeh — a delicacy from the Gurage region.",
    ingredients: "Prime beef, mitmita spice, niter kibbeh, korerima (Ethiopian cardamom)",
    culturalNote: "Served lebleb (lightly cooked) or raw. Traditionally accompanied by ayib (fresh cheese) and gomen (collard greens) to balance the heat.",
    image: "/f&b/kitfo.jpg",
    category: "Specialty",
  },
  {
    id: "tibs",
    name: "Tibs",
    nameAmharic: "ጥብስ",
    description: "Sautéed beef or lamb with onions, peppers, and rosemary — served sizzling in a clay dish.",
    ingredients: "Beef/lamb, onions, peppers, tomatoes, rosemary, niter kibbeh, berbere",
    culturalNote: "A popular celebratory dish. Served in a heated clay pot (melekia) that keeps it sizzling at the table.",
    image: "/f&b/Awaze Tibs.jpg",
    category: "Grilled/Sautéed",
  },
  {
    id: "shiro",
    name: "Shiro",
    nameAmharic: "ሽሮ",
    description: "Velvety chickpea or broad bean stew flavored with berbere, garlic, and onions — a beloved vegetarian staple.",
    ingredients: "Chickpea/broad bean flour, berbere, onions, garlic, niter kibbeh",
    culturalNote: "Essential during Orthodox fasting periods (tsom) when animal products are avoided. Every region has its own variation.",
    image: "/f&b/Shiro Wot.jpg",
    category: "Vegetarian Stew",
  },
  {
    id: "beyaynetu",
    name: "Beyaynetu",
    nameAmharic: "በያይነቱ",
    description: "A colorful vegetarian platter featuring 6–12 different stews (wots) served atop a large injera — a feast of flavors and textures.",
    ingredients: "Injera, shiro, misir wot, gomen, atakilt wot, kik alicha, ayib, and seasonal vegetables",
    culturalNote: "Meaning 'a bit of everything' — the ultimate fasting meal. Showcases Ethiopia's incredible diversity of plant-based cooking.",
    image: "/f&b/beyayenetu.jpg",
    category: "Platter",
  },
  {
    id: "firfir",
    name: "Firfir (Fitfit)",
    nameAmharic: "ፍርፍር",
    description: "Shredded injera mixed with spicy berbere sauce and niter kibbeh — a popular breakfast or leftover dish.",
    ingredients: "Injera, berbere, niter kibbeh, onions, tomatoes, optional yogurt",
    culturalNote: "Creative use of leftover injera. Served with a dollop of fresh yogurt to cool the heat. A comfort food staple.",
    image: "/f&b/firfir.jpg",
    category: "Breakfast",
  },
  {
    id: "gored-gored",
    name: "Gored Gored",
    nameAmharic: "ጎረድ ጎረድ",
    description: "Cubes of raw prime beef dipped in mitmita and niter kibbeh — the purist's version of kitfo, unminced.",
    ingredients: "Prime beef cubes, mitmita, niter kibbeh, awaze (chili paste)",
    culturalNote: "Served with injera and ayib. A test of quality — only the freshest, most tender beef is used. Reserved for special occasions.",
    image: "/f&b/gored gored.jpg",
    category: "Raw Specialty",
  },
  {
    id: "ethiopian-coffee",
    name: "Ethiopian Coffee Ceremony",
    nameAmharic: "ቡና",
    description: "Ritual preparation of coffee from green beans — roasted, ground, and brewed in a jebena (clay pot) over charcoal.",
    ingredients: "Green coffee beans (heirloom varieties), water, optional incense (frankincense/myhrr)",
    culturalNote: "Birthplace of coffee. The ceremony takes 1–2 hours with three rounds (abol, tona, baraka) — a social ritual of friendship and respect.",
    image: "/f&b/bunna.jpg",
    category: "Beverage & Ritual",
  }
];
