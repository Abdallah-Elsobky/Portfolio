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
  "A pragmatic Mobile Developer",
  "I build things for the Mobile",
  "I create aesthetic and modern apps",
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
  languagesAndTools: [
    "android",
    "kotlin",
    "api",
    "java",
    "dart",
    "flutter",
    "figma",
    "python",
    "c++",
    "codeforces",
  ],
  librariesAndFrameworks: [
    "soon",
    // "react",
    // "redux",
    // "nextjs",
    // "tailwindcss",
    // "styledcomponents",
    // "antdesign",
    // "chakra-ui",
  ],
  databases: ["mysql", "sqlite","firebase"],
  other: ["git", "github"],
};

export const PROJECTS = [
  // {
  //   name: "Coming soon",
  //   image: "/projects/coming.png",
  //   blurImage: "/projects/blur/music-blur.jpg",
  //   description: "Under development. 👨🏻‍💻",
  //   gradient: ["#FF4B5C", "#FF4B5C"],
  //   url: "https://github.com/Abdallah-Elsobky",
  //   tech: ["question", "question", "question", "question"],
  // },
  {
    name: "Weather 🌦️",
    image: "/projects/weather.png",
    blurImage: "/projects/blur/weather.jpg",
    description: "Real- time weather and 5 - day forecast based on your GPS location, with refresh and offline support.",
    gradient: ["#4B0082", "#2E004D"],

    url: "https://github.com/Abdallah-Elsobky/instabug_task",
    tech: ["kotlin", "android", "api", "location", "github"],
  },
  {
    name: "Trendify",
    image: "/projects/trendify.png",
    blurImage: "/projects/blur/trendify.jpg",
    description: "📰 Trendify – Fast, reliable news at your fingertips! 🚀",
    gradient: ["#1E3C72", "#2A5298"]
,

    url: "https://github.com/Abdallah-Elsobky/Trendify",
    tech: ["kotlin", "android", "api", "sqlite", "github"],
  },
  {
    name: "Tasko",
    image: "/projects/tasko.jpg",
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "📝 Tasko – Organize, prioritize, and track your tasks effortlessly! 🚀",
    gradient: ["#2F4F4F", "#1C2E2E"],

    url: "https://github.com/Abdallah-Elsobky/Tasko",
    tech: ["flutter", "android", "sqlite", "github"],
  },
  {
    name: "Tic Tac Game",
    image: "/projects/tictacc.jpg",
    blurImage: "/projects/blur/tictac-blur.jpg",
    description: "Experience Tic Tac Toe with customizable modes, AI challenges 🎮",
    gradient: ["#FF6347", "#CC4F39"],
    
    url: "https://www.amazon.com/dp/B0DNCNV9SD/ref=apps_sf_sta",
    tech: ["java", "android", "sqlite", "github"],
  },
  {
    name: "BMI Calculator",
    image: "/projects/bmi.jpg",
    blurImage: "/projects/blur/bmi-blur.jpg",
    description: "Quick, accurate BMI results with a simple interface and custom themes.",
    gradient: ["#4A90E2", "#0033A0"],
    url: "https://github.com/Abdallah-Elsobky/BMI_APP",
    tech: ["flutter", "android", "github", "dart"],
  },
  {
    name: "Natiga",
    image: "/projects/natiga.jpg",
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
      description:
        "As part of the Digital Egypt Platform Initiative, I participated in a comprehensive training program focusing on mobile development. This initiative aims to transform Egypt into a digital society by leveraging modern technology in various sectors.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Mobile Developer Trainee
        </div>
      ),
    },
    {
      title: "Mobile Development Training",
      description:
        "Throughout the DEPI training, I gained hands-on experience in mobile app development, working with industry-standard frameworks and tools. I contributed to the development of user-centric mobile applications, enhancing my skills in creating seamless digital experiences.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Enhancing Digital Solutions
        </div>
      ),
    },
    {
      title: "Project Contributions",
      description:
        "During the training, I collaborated with a team of professionals to design and implement mobile applications that address real-world challenges. This experience allowed me to refine my technical skills and contribute to the initiative's goal of digital transformation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Collaborative Development
        </div>
      ),
    },
    {
      title: "Skill Development",
      description:
        "The DEPI program provided me with the opportunity to work on multiple projects, allowing me to develop a deep understanding of mobile development practices. This experience has prepared me for future roles in the tech industry, where I can continue to contribute to digital innovation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Preparing for the Future
        </div>
      ),
    },
  ],
  Route: [
    {
      title: "Route Academy Experience",
      description:
        "During my time at Route Academy, I underwent focused training in Android development, starting from the fundamentals of Java and Kotlin to advanced UI/UX design. The program laid a strong technical foundation and ignited my passion for building mobile applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Android Development Trainee
        </div>
      ),
    },
    {
      title: "Technical Skill Building",
      description:
        "The Route Academy course provided deep insights into Android architecture, design patterns, and best practices. I enhanced my ability to create scalable, efficient apps by learning how to work with APIs, manage state, and implement intuitive user interfaces.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Strengthening Development Skills
        </div>
      ),
    },
    {
      title: "Project-Based Learning",
      description:
        "I worked on several real-world applications during the training, including a To-Do List app, News app, and Quran app. These projects allowed me to apply my knowledge, improve my debugging skills, and gain hands-on experience in delivering functional mobile solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Practical Android Projects
        </div>
      ),
    },
    {
      title: "Career Readiness",
      description:
        "By the end of the Route Academy program, I was able to confidently build complete Android apps independently. This experience equipped me with the skills and mindset needed to take on internships, freelance work, or full-time roles in the mobile development field.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Ready for Real-World Challenges
        </div>
      ),
    },
  ],
  

  Coming_Soon: [
    {
      title: "Upcoming Internship",
      description:
        "I'm preparing to embark on an internship at ITI to gain valuable experience and sharpen my skills for success in the freelance market.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Navigating the Path to Freelance Success
        </div>
      ),
    },
    {
      title: "Skill Enhancement",
      description:
        "I am preparing to undertake an internship at ITI, where I aim to enhance my mobile development skills and gain hands-on experience. This internship will also help me build a strong foundation for entering the freelance market, focusing on innovative solutions and real-world application development.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          ITI Mobile Developer Intern
        </div>
      ),
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