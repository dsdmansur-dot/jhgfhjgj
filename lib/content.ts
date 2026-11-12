export const site = {
  name: "Mansur",
  title: "Mansur — Work & Travel Journal",
  description:
    "Real stories, practical guides and honest conversations about building a life through work and travel.",
  location: "Based everywhere",
  email: "Business inquiries via the website",
};

export const socials = [
  {
    name: "Instagram",
    handle: "Daily frames & field notes",
    metric: "Audience",
    value: "—",
    url: "https://www.instagram.com/",
    image: "/images/social-instagram.jpg",
    className: "social-instagram",
  },
  {
    name: "TikTok",
    handle: "Unfiltered work abroad",
    metric: "Video views",
    value: "—",
    url: "https://www.tiktok.com/",
    image: "/images/social-tiktok.jpg",
    className: "social-tiktok",
  },
  {
    name: "YouTube",
    handle: "Long-form stories & guides",
    metric: "Community",
    value: "—",
    url: "https://www.youtube.com/",
    image: "/images/social-youtube.jpg",
    className: "social-youtube",
  },
  {
    name: "Telegram",
    handle: "Direct notes & opportunities",
    metric: "Members",
    value: "—",
    url: "https://t.me/Abilmansur0",
    image: "/images/social-telegram.jpg",
    className: "social-telegram",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  image: string;
  location: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "first-season-work-travel-usa",
    category: "Work & Travel",
    title: "Your first season abroad starts before the flight",
    excerpt:
      "The documents, decisions and honest expectations that make the difference between a chaotic start and a considered one.",
    date: "October 18, 2026",
    dateISO: "2026-10-18",
    readTime: "7 min read",
    image: "/images/journal-departure.jpg",
    location: "New York, USA",
    intro:
      "A Work & Travel season is often presented as a single brave decision: buy the ticket and go. In reality, the calmest experiences are built from many small, unglamorous decisions made before departure.",
    sections: [
      {
        heading: "Start with your non-negotiables",
        paragraphs: [
          "Before comparing destinations, define what the season needs to give you. It might be language practice, international work experience, a first taste of independent living, or simply a change of perspective. Your answer will shape every choice that follows.",
          "Set a realistic budget that includes the first weeks after arrival, not just the flight and program costs. A separate emergency reserve is not pessimism; it is what gives you room to make good decisions.",
        ],
      },
      {
        heading: "Understand the work, not only the place",
        paragraphs: [
          "A beautiful destination can still be the wrong fit if the schedule, accommodation or role does not match your expectations. Ask for precise details: weekly hours, pay structure, housing costs, transport and what happens if your placement changes.",
          "Keep copies of every important document online and offline. Share your itinerary with someone you trust, and learn the local rules that apply to your work authorization.",
        ],
      },
      {
        heading: "Leave space for the unplanned",
        paragraphs: [
          "Preparation should create freedom, not a rigid script. The conversations, places and people you did not plan for often become the part you remember. Build a safe foundation, then allow the experience to surprise you.",
        ],
      },
    ],
  },
  {
    slug: "real-cost-of-summer-abroad",
    category: "Salaries & Expenses",
    title: "The real cost of a summer abroad",
    excerpt:
      "A clear framework for counting the expenses nobody puts in the brochure — and knowing what you can actually save.",
    date: "September 29, 2026",
    dateISO: "2026-09-29",
    readTime: "6 min read",
    image: "/images/journal-cost.jpg",
    location: "Field notes",
    intro:
      "The headline salary rarely tells the whole story. To understand the economics of a season abroad, look at cash flow week by week and count the quiet expenses alongside the obvious ones.",
    sections: [
      {
        heading: "Build your arrival budget",
        paragraphs: [
          "List every expense before your first paycheck: deposits, the first weeks of housing, local transport, groceries, work clothing and a basic phone setup. Then add a buffer for delays.",
          "Separate one-time costs from recurring costs. This makes it easier to see when you might break even and how much money needs to be available from day one.",
        ],
      },
      {
        heading: "Track net income, not the hourly rate",
        paragraphs: [
          "Your real income depends on guaranteed hours, deductions, tips where applicable, and the cost of getting to work. A higher hourly rate can disappear quickly when housing is expensive or shifts are inconsistent.",
        ],
      },
      {
        heading: "Decide what value means to you",
        paragraphs: [
          "Not every benefit appears in a spreadsheet. Language, confidence and international experience matter — but they work best alongside a transparent financial plan, not instead of one.",
        ],
      },
    ],
  },
  {
    slug: "first-week-new-country",
    category: "Real Experiences",
    title: "What nobody tells you about the first week",
    excerpt:
      "Between arrival and belonging: jet lag, new routines, small wins and giving yourself time to land.",
    date: "September 12, 2026",
    dateISO: "2026-09-12",
    readTime: "5 min read",
    image: "/images/journal-city.jpg",
    location: "Chicago, USA",
    intro:
      "The first week can feel like a film and a test at the same time. Everything is vivid, but even buying lunch requires attention. That intensity is normal — it is not a sign that you made the wrong choice.",
    sections: [
      {
        heading: "Lower the pressure",
        paragraphs: [
          "You do not need to make lifelong friends, see every landmark and feel completely at home in seven days. Focus on the useful things: sleep, food, your route to work and one familiar place nearby.",
        ],
      },
      {
        heading: "Create a small routine",
        paragraphs: [
          "A morning coffee in the same place or a short evening walk gives the new city a sense of rhythm. Routine does not make the experience less adventurous; it gives you the energy to enjoy it.",
          "Check in with people at home, but leave enough attention for where you are. Belonging usually arrives through repeated ordinary moments.",
        ],
      },
      {
        heading: "Ask one more question",
        paragraphs: [
          "When instructions are unclear, ask. When you feel lost, ask. Most people respond better to honest curiosity than to someone pretending to understand. Each answer makes the next day simpler.",
        ],
      },
    ],
  },
  {
    slug: "choosing-right-destination",
    category: "Destinations",
    title: "Choose a destination for the life you want",
    excerpt:
      "Beyond the postcard: pace, community, seasonality and the practical details that shape everyday life.",
    date: "August 24, 2026",
    dateISO: "2026-08-24",
    readTime: "8 min read",
    image: "/images/journal-destination.jpg",
    location: "The Pacific Coast",
    intro:
      "A destination photograph shows you a view, not a Tuesday afternoon. Choosing well means imagining the ordinary days: your commute, the weather, the people around you and how you will spend a day off.",
    sections: [
      {
        heading: "City energy or seasonal community",
        paragraphs: [
          "Large cities offer variety and transport, while resort towns can offer a close-knit seasonal community and easier access to nature. Neither is universally better; the right choice depends on your personality and priorities.",
        ],
      },
      {
        heading: "Research the season",
        paragraphs: [
          "Tourism changes throughout the year. Ask when work begins, when hours peak and what happens at the end of the season. Understand local housing before you commit, especially in popular destinations.",
        ],
      },
      {
        heading: "Picture your free time",
        paragraphs: [
          "The best location supports the memories you want to make. Mountains, ocean, museums, nightlife or quiet — choosing what you genuinely enjoy is more useful than choosing what looks impressive online.",
        ],
      },
    ],
  },
  {
    slug: "confidence-has-a-passport",
    category: "Personal Stories",
    title: "Confidence has a passport",
    excerpt:
      "On becoming the person who asks, tries, gets lost and keeps going — one unfamiliar place at a time.",
    date: "August 06, 2026",
    dateISO: "2026-08-06",
    readTime: "4 min read",
    image: "/images/journal-confidence.jpg",
    location: "A personal note",
    intro:
      "Travel does not instantly transform you. It offers a series of moments in which you can choose to act differently. Over time, those choices become evidence that you can trust yourself somewhere new.",
    sections: [
      {
        heading: "The courage is in the ordinary",
        paragraphs: [
          "Confidence is asking for directions in a language you are still learning. It is walking into work on the first day, admitting what you do not know and returning the next morning a little more capable.",
        ],
      },
      {
        heading: "Home becomes a bigger idea",
        paragraphs: [
          "Living elsewhere changes your relationship with where you came from. Some details become clearer, some assumptions soften, and you begin to carry more than one place with you.",
        ],
      },
      {
        heading: "Bring the lesson back",
        paragraphs: [
          "The real souvenir is a wider sense of possibility. You learn that unfamiliar does not mean impossible — and that lesson stays useful long after the suitcase is unpacked.",
        ],
      },
    ],
  },
];

export const partnershipFormats = [
  {
    number: "01",
    title: "Sponsored stories",
    description:
      "Useful, honest content that places your brand inside a real travel narrative — with clear disclosure and a natural point of view.",
  },
  {
    number: "02",
    title: "Brand integration",
    description:
      "Thoughtful product or service placement across short-form video, photography and long-form editorial storytelling.",
  },
  {
    number: "03",
    title: "Employer spotlight",
    description:
      "A transparent look at your workplace, team, location and candidate experience for people considering work abroad.",
  },
  {
    number: "04",
    title: "UGC production",
    description:
      "Platform-ready vertical video and photography created for your own channels, grounded in authentic travel experience.",
  },
  {
    number: "05",
    title: "Brand ambassadorship",
    description:
      "Long-term creative collaboration that builds recognition through continuity rather than a one-off appearance.",
  },
];
