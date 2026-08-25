export const METADATA = {
  author: "Abdallah Elsobky",
  title: "Portfolio | Abdallah Elsobky",
  description:
    "Abdallah Elsobky is a passionate Mobile Developer, dedicated to crafting seamless and innovative mobile applications that captivate and engage users.",
  siteUrl: "",
  twitterHandle: "@AbdallahElsobk4",
  keywords: [
    "Abdallah Elsobky",
    "Mobile Engineer",
    "Kotlin Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Native Android Developer",
  "Jetpack Compose & Compose Multiplatform (CMP)",
  "Clean Architecture, MVI & Reactive Flow",
  "1st Place Winner @ JETS MobileX 2026",
  "Top 35 ITI Problem Solver & 2x ECPC Finalist",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: its.abdallah.elsobky@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/abdallah-elsobky-5150701a6/",
  },
  {
    name: "github",
    url: "https://github.com/Abdallah-Elsobky",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/elsobkyabdallah/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/AbdallahElsobk4",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@Abdallah_Elsobky",
  },
  {
    name: "upwork",
    url: "https://www.upwork.com/freelancers/~01c2d80e703288ef2f",
  },
];

export const SKILLS = {
  languagesAndCore: [
    { name: "Kotlin", icon: "kotlin" },
    { name: "Android SDK", icon: "android" },
    { name: "Java", icon: "java" },
    { name: "Dart", icon: "dart" },
    { name: "C++", icon: "c++" },
    { name: "Python", icon: "python" },
  ],
  uiAndFrameworks: [
    { name: "Jetpack Compose", icon: "compose" },
    { name: "Material Design 3", icon: "material3" },
    { name: "Flutter", icon: "flutter" },
    { name: "Figma UI/UX", icon: "figma" },
  ],
  librariesAndFrameworks: [
    { name: "Coroutines & Flow", icon: "coroutines" },
    { name: "Dagger Hilt", icon: "hilt" },
    { name: "Navigation 3", icon: "nav3" },
    { name: "Room ORM", icon: "room" },
    { name: "Retrofit", icon: "retrofit" },
    { name: "OkHttp", icon: "okhttp" },
    { name: "WorkManager", icon: "workmanager" },
    { name: "Paging 3", icon: "paging" },
    { name: "Jetpack DataStore", icon: "datastore" },
    { name: "Koin DI", icon: "koin" },
    { name: "Coil Image Loader", icon: "coil" },
    { name: "Ktor Client", icon: "ktor" },
  ],
  databases: [
    { name: "Room DB", icon: "room" },
    { name: "Firebase", icon: "firebase" },
    { name: "SQLite", icon: "sqlite" },
    { name: "MySQL", icon: "mysql" },
  ],
  testingAndTools: [
    { name: "Gradle (Kotlin DSL)", icon: "gradle" },
    { name: "JUnit 5", icon: "junit" },
    { name: "MockK", icon: "mockk" },
    { name: "Git", icon: "git" },
    { name: "GitHub & CI/CD", icon: "github" },
  ],
};

export const PROJECTS = [
  {
    name: "Awan ⏳",
    type: "Android App",
    image: "/projects/awan15.jpg",
    images: [
      "/projects/awan15.jpg",
      "/projects/awan11.jpg",
      "/projects/awan1.jpg",
      "/projects/awan2.jpg",
      "/projects/awan4.jpg",
      "/projects/awan5.jpg",
      "/projects/awan6.jpg",
      "/projects/awan7.jpg",
      "/projects/awan8.jpg",
      "/projects/awan9.jpg",
      "/projects/awan10.jpg",
      "/projects/awan12.jpg",
      "/projects/awan13.jpg",
      "/projects/awan14.jpg",
      "/projects/awan3.jpg",
    ],
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "⏳ AI-assisted adaptive scheduling Android app with Clean Architecture, 100% Jetpack Compose, Zone routines, and gamification.",
    gradient: ["#6366F1", "#3730A3"],
    url: "https://github.com/Awan-app/Awan-Android",
    tech: ["kotlin", "android", "sqlite", "api", "github"],
  },
  {
    name: "Carto 🛍️",
    type: "Android App",
    image: "/projects/carto8.jpg",
    images: [
      "/projects/carto8.jpg",
      "/projects/carto5.jpg",
      "/projects/carto3.jpg",
      "/projects/carto4.jpg",
      "/projects/carto2.jpg",
      "/projects/carto6.jpg",
      "/projects/carto7.jpg",
      "/projects/carto1.jpg",
      "/projects/carto9.jpg",
      "/projects/carto10.png",
      "/projects/carto11.png",
      "/projects/carto12.jpg",
      "/projects/carto13.jpg",
      "/projects/carto14.jpg",
    ],
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "🏆 1st Place Winner – JETS MobileX 2026. Native Shopify e-commerce platform with embedded AI Shopping Assistant, Clean Architecture, and Compose.",
    gradient: ["#8B5CF6", "#4C1D95"],
    url: "https://github.com/Big-OO/carto",
    tech: ["kotlin", "android", "api", "sqlite", "github"],
  },
  {
    name: "Trendo",
    type: "CMP App",
    image: "/projects/trendo1.jpg",
    images: [
      "/projects/trendo1.jpg",
      "/projects/trendo2.jpg",
      "/projects/trendo3.jpg",
    ],
    blurImage: "/projects/blur/trendify.jpg",
    description: "📰 Real-time trending news app with category filtering, region picker, offline-first Room caching, and favorites.",
    gradient: ["#1E3C72", "#2A5298"],
    url: "https://github.com/Abdallah-Elsobky/Trendo",
    tech: ["kotlin", "cmp", "api", "sqlite", "github"],
  },
  {
    name: "Tempo 🌦️",
    type: "Android App",
    image: "/projects/tempo3.jpg",
    images: [
      "/projects/tempo3.jpg",
      "/projects/tempo2.jpg",
      "/projects/tempo5.jpg",
      "/projects/tempo4.jpg",
      "/projects/tempo1.jpg",
    ],
    blurImage: "/projects/blur/weather.jpg",
    description: "🌦️ Modern Android weather app with Jetpack Compose, detailed forecasts, map location picker, and smart WorkManager alerts.",
    gradient: ["#4B0082", "#2E004D"],
    url: "https://github.com/Abdallah-Elsobky/Tempo",
    tech: ["kotlin", "android", "sqlite", "api", "github"],
  },
  {
    name: "Foodo",
    type: "Android App",
    image: "/projects/fodo1.png",
    images: [
      "/projects/fodo1.png",
      "/projects/fodo2.png",
      "/projects/fodo3.png",
      "/projects/fodo4.png",
      "/projects/fodo5.png",
    ],
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "🍽️ Feature-rich Android meal planner & recipe management app with global recipes, date planning, favorites, and shopping cart.",
    gradient: ["#E64A19", "#BF360C"],
    url: "https://github.com/Abdallah-Elsobky/Foodo",
    tech: ["android", "java", "sqlite", "api", "github"],
  },
  {
    name: "Islami 📖",
    type: "Android App",
    image: "/projects/quran1.png",
    images: [
      "/projects/quran1.png",
      "/projects/quran2.png",
      "/projects/quran3.png",
    ],
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "🕌 Comprehensive Islamic Android app featuring the complete Holy Quran, Ahadith, electronic Sebha, and Islamic radio streams.",
    gradient: ["#B8860B", "#705305"],
    url: "https://github.com/Abdallah-Elsobky/Islami",
    tech: ["kotlin", "android", "sqlite", "api", "github"],
  },
  {
    name: "Trendify",
    type: "Android App",
    image: "/projects/trendify3.png",
    images: [
      "/projects/trendify3.png",
      "/projects/trendify2.png",
      "/projects/trendify1.png",
    ],
    blurImage: "/projects/blur/trendify.jpg",
    description: "📰 Trendify – Fast, reliable news at your fingertips! 🚀",
    gradient: ["#1E3C72", "#2A5298"],
    url: "https://github.com/Abdallah-Elsobky/Trendify",
    tech: ["kotlin", "android", "api", "sqlite", "github"],
  },
  {
    name: "Tic Tac Game",
    type: "Android App",
    image: "/projects/xo1.png",
    images: [
      "/projects/xo1.png",
      "/projects/xo2.png",
      "/projects/xo3.png",
      "/projects/xo4.png",
      "/projects/xo5.png",
    ],
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "Experience Tic Tac Toe with customizable modes, AI challenges 🎮",
    gradient: ["#FF6347", "#CC4F39"],
    url: "https://www.amazon.com/dp/B0DNCNV9SD/ref=apps_sf_sta",
    tech: ["java", "android", "sqlite", "github"],
  },
  {
    name: "Tasko",
    type: "Flutter App",
    image: "/projects/tasko3.jpg",
    images: [
      "/projects/tasko3.jpg",
      "/projects/tasko1.jpg",
      "/projects/tasko2.jpg",
    ],
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "📝 Tasko – Organize, prioritize, and track your tasks effortlessly! 🚀",
    gradient: ["#2F4F4F", "#1C2E2E"],
    url: "https://github.com/Abdallah-Elsobky/Tasko",
    tech: ["flutter", "android", "sqlite", "github"],
  },
  {
    name: "BMI Calculator",
    type: "Flutter App",
    image: "/projects/bmi.jpg",
    images: [
      "/projects/bmi.jpg",
    ],
    blurImage: "/projects/blur/bmi-blur.jpg",
    description: "Quick, accurate BMI results with a simple interface and custom themes.",
    gradient: ["#4A90E2", "#0033A0"],
    url: "https://github.com/Abdallah-Elsobky/BMI_APP",
    tech: ["flutter", "android", "github", "dart"],
  },
  {
    name: "Natiga",
    type: "Android App",
    image: "/projects/natiga.jpg",
    images: [
      "/projects/natiga.jpg",
    ],
    blurImage: "/projects/blur/natiga-blur.jpg",
    description: "Natiga lets secondary students easily check their exam results by ID or name. 🧑‍🎓",
    gradient: ["#0F2027", "#203A43"],
    url: "https://github.com/Abdallah-Elsobky/Natiga",
    tech: ["java", "android", "sqlite", "github"],
  },
  // {
  //   name: "Music Player",
  //   image: "/projects/music.jpg",
  //   blurImage: "/projects/blur/music-blur.jpg",
  //   description: "Music Player app offers easy playback with a sleek design and customizable features.🎵",
  //   gradient: ["#6D6D6D", "#1A1A1A"],
  //   url: "https://github.com/Abdallah-Elsobky/Music_player",
  //   tech: ["java", "android", "github", "sqlite"],
  // }
];

export const WORK = [
  // {
  //   id: 1,
  //   company: "Dukaan",
  //   title: "Mobile Developer",
  //   location: "Bangalore, Karnataka",
  //   range: "December - Current",
  //   responsibilities: [
  //     "Led creation of a captivating cross-platform e-commerce solution.",
  //     "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
  //     "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
  //   ],
  //   url: "https://mydukaan.io/",
  //   video: "/work/dukaan.mp4",
  // },
  // {
  //   id: 2,
  //   company: "Aviate",
  //   title: "Mobile Developer Intern",
  //   location: "Goa",
  //   range: "May - October 2022",
  //   responsibilities: [
  //     "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
  //     "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
  //     "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
  //   ],
  //   url: "https://www.aviate.jobs/",
  //   video: "/work/aviate.mp4",
  // },
  // {
  //   id: 3,
  //   company: "Spacenos",
  //   title: "Web Developer Intern",
  //   location: "Bangalore, Karnataka",
  //   range: "September - December 2021",
  //   responsibilities: [
  //     "Led the Full Stack revamp on the Admin Portal.",
  //     "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
  //     "Implemented CRUD features for all the services and providers.",
  //   ],
  //   url: "https://spacenos.com/",
  //   video: "/work/spacenos.mp4",
  // },
];

export const WORK_CONTENTS = {
  DEPI: [
    {
      title: "Digital Egypt Platform Initiative (DEPI)",
      image: "/work/depi.png", // 👈 Replace with your image file (e.g. "/work/your-depi-image.png")
      description:
        "As part of the Digital Egypt Platform Initiative, I participated in a comprehensive training program focusing on mobile development. This initiative aims to transform Egypt into a digital society by leveraging modern technology in various sectors.",
    },
    {
      title: "Mobile Development Training",
      description:
        "Throughout the DEPI training, I gained hands-on experience in mobile app development, working with industry-standard frameworks and tools. I contributed to the development of user-centric mobile applications, enhancing my skills in creating seamless digital experiences.",
    },
    {
      title: "Project Contributions",
      description:
        "During the training, I collaborated with a team of professionals to design and implement mobile applications that address real-world challenges. This experience allowed me to refine my technical skills and contribute to the initiative's goal of digital transformation.",
    },
    {
      title: "Skill Development",
      description:
        "The DEPI program provided me with the opportunity to work on multiple projects, allowing me to develop a deep understanding of mobile development practices. This experience has prepared me for future roles in the tech industry, where I can continue to contribute to digital innovation.",
    },
  ],
  Route: [
    {
      title: "Route Academy Experience",
      image: "/work/route.png", // 👈 Replace with your image file (e.g. "/work/your-route-image.png")
      description:
        "During my time at Route Academy, I underwent focused training in Android development, starting from the fundamentals of Java and Kotlin to advanced UI/UX design. The program laid a strong technical foundation and ignited my passion for building mobile applications.",
    },
    {
      title: "Technical Skill Building",
      description:
        "The Route Academy course provided deep insights into Android architecture, design patterns, and best practices. I enhanced my ability to create scalable, efficient apps by learning how to work with APIs, manage state, and implement intuitive user interfaces.",
    },
    {
      title: "Project-Based Learning",
      description:
        "I worked on several real-world applications during the training, including a To-Do List app, News app, and Quran app. These projects allowed me to apply my knowledge, improve my debugging skills, and gain hands-on experience in delivering functional mobile solutions.",
    },
    {
      title: "Career Readiness",
      description:
        "By the end of the Route Academy program, I was able to confidently build complete Android apps independently. This experience equipped me with the skills and mindset needed to take on internships, freelance work, or full-time roles in the mobile development field.",
    },
  ],
  ITI: [
    {
      title: "ITI Native Mobile Development Diploma",
      image: "/work/iti.png", // 👈 Replace with your image file (e.g. "/work/your-iti-image.png")
      description:
        "Graduated from the prestigious 9-Month Professional Diploma in Mobile Applications Development (Native) at the Information Technology Institute (ITI), Smart Village (MCIT) — specializing in enterprise-grade native Android, reactive UI, clean architectures, and modern mobile engineering in Agile teams.",
    },
    {
      title: "1st Place Winner – JETS MobileX Challenge 2026",
      description:
        "Awarded 1st Place across the Android track at ITI Smart Village for architecting and building 'Carto' — a cutting-edge native e-commerce platform using Jetpack Compose, Clean Architecture, MVI, Hilt, Shopify API via Apollo GraphQL, embedded AI shopping assistant, and Paymob payment integration.",
    },
    {
      title: "Scalable Architectures & Reactive Stack",
      description:
        "Architected and delivered multiple full-featured applications (including Tempo and Foodo) mastering MVI/MVVM, Clean Architecture, Kotlin Coroutines, Flow, Hilt, Room offline-first caching, Retrofit/Ktor networking, and background task scheduling with WorkManager.",
    },
    {
      title: "Algorithmic Excellence & Production Engineering",
      description:
        "Ranked in the Top 35 nationwide in the ITI Problem-Solving Assessment (and 2-time ECPC Finalist). Applied rigorous Data Structures, SOLID principles, automated testing (JUnit, Mockk), Firebase cloud services, GitFlow, and CI/CD pipelines to ensure enterprise software reliability.",
    },
  ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Mobile Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";