import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive tour guide & interactive messages by section & rotation
const SECTION_GUIDES = {
  home: [
    {
      src: "/kotlin_mascot/greeting.svg",
      tag: "✦ Tour Guide",
      title: "Hi, I'm Kodee! 👋",
      message: "Welcome to Abdallah's Android portfolio! Let me show you around 🚀",
      action: { label: "Explore Skills ⚡", target: "skills" },
    },
    {
      src: "/kotlin_mascot/jumping.svg",
      tag: "⚡ Pro Guide",
      title: "Android Excellence",
      message: "Specialized in Jetpack Compose, Kotlin Multiplatform & Clean Architecture ✨",
      action: { label: "See Projects 📱", target: "projects" },
    },
    {
      src: "/kotlin_mascot/sharing.svg",
      tag: "💡 Tip",
      title: "Interactive Companion",
      message: "I will guide you through sections as you scroll! Click me anytime to minimize or expand.",
    },
  ],
  skills: [
    {
      src: "/kotlin_mascot/jumping.svg",
      tag: "⚡ Tech Stack",
      title: "Supercharged Arsenal",
      message: "Kotlin, Jetpack Compose, Coroutines, Flow, Dagger-Hilt, Room & KMP!",
      action: { label: "View Projects 📱", target: "projects" },
    },
    {
      src: "/kotlin_mascot/regular.svg",
      tag: "🛡️ Architecture",
      title: "Clean & Bulletproof",
      message: "MVI & MVVM patterns crafted with SOLID principles and 100% testability.",
    },
  ],
  projects: [
    {
      src: "/kotlin_mascot/in-love.svg",
      tag: "📱 Showcase",
      title: "Handcrafted Apps",
      message: "Browse native Android apps built with passion, fluid UI, and production quality ❤️",
    },
    {
      src: "/kotlin_mascot/sitting.svg",
      tag: "🔍 Deep Dive",
      title: "Source Code & Demos",
      message: "Tap on any project card to inspect GitHub source repositories and live previews!",
      action: { label: "Work Experience 💼", target: "work" },
    },
  ],
  work: [
    {
      src: "/kotlin_mascot/regular.svg",
      tag: "💼 Experience",
      title: "Proven Track Record",
      message: "Delivering resilient, enterprise-grade mobile features and scaling user impact.",
    },
    {
      src: "/kotlin_mascot/sharing.svg",
      tag: "🤝 Collaboration",
      title: "Agile & Product Focused",
      message: "Thrives in cross-functional teams, CI/CD pipelines, and high-velocity sprints.",
      action: { label: "Let's Connect ✉️", target: "contact" },
    },
  ],
  contact: [
    {
      src: "/kotlin_mascot/waving.svg",
      tag: "✉️ Get In Touch",
      title: "Let's Build Together!",
      message: "Have an app idea, contract, or full-time opportunity? Drop a message below!",
      action: { label: "Say Hello 👋", target: "contact" },
    },
    {
      src: "/kotlin_mascot/in-love.svg",
      tag: "📬 Quick Response",
      title: "Always Reachable",
      message: "Abdallah replies promptly to emails and LinkedIn messages. Let's create magic!",
    },
  ],
};

const FUN_TIDBITS = [
  {
    src: "/kotlin_mascot/naughty.svg",
    tag: "💡 Kotlin Fact",
    title: "Zero NPEs! 🛡️",
    message: "Kotlin's null safety helps prevent billions of crashes worldwide!",
  },
  {
    src: "/kotlin_mascot/in-love.svg",
    tag: "❤️ Compose Fan",
    title: "Declarative Magic",
    message: "Jetpack Compose makes UI development 10x faster and infinitely smoother!",
  },
  {
    src: "/kotlin_mascot/jumping.svg",
    tag: "🚀 High Performance",
    title: "Coroutines & Flow",
    message: "Smooth 120Hz asynchronous rendering without ever blocking the main thread!",
  },
  {
    src: "/kotlin_mascot/sharing.svg",
    tag: "🌟 Open to Work",
    title: "Ready for Challenges",
    message: "Looking for a top-tier Android developer? You found the right profile!",
    action: { label: "Contact Abdallah ✉️", target: "contact" },
  },
];

const AUTO_ROTATE_INTERVAL = 7000; // 7 seconds per message

const KotlinMascot = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentPool, setCurrentPool] = useState(SECTION_GUIDES.home);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [isMascotHovered, setIsMascotHovered] = useState(false);

  // Determine current active message
  const activeMessage = currentPool[messageIndex % currentPool.length] || SECTION_GUIDES.home[0];

  // Advance to next message with smooth transition
  const nextMessage = useCallback(() => {
    setMessageIndex((prev) => (prev + 1) % currentPool.length);
    setBubbleKey((prev) => prev + 1);
  }, [currentPool.length]);

  // Auto-cycle message timer
  useEffect(() => {
    if (isMinimized) return;

    const timer = setInterval(() => {
      nextMessage();
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isMinimized, nextMessage, messageIndex]);

  // Detect active section on scroll & update message pool
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const sectionIds = ["home", "skills", "projects", "work", "contact"];

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            if (currentSection !== sectionId) {
              setCurrentSection(sectionId);
              const guides = SECTION_GUIDES[sectionId] || FUN_TIDBITS;
              setCurrentPool(guides);
              setMessageIndex(0);
              setBubbleKey((prev) => prev + 1);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  // Toggle minimize/maximize on mascot click
  const handleToggleMascot = () => {
    setIsMinimized((prev) => !prev);
    if (isMinimized) {
      setBubbleKey((prev) => prev + 1);
    }
  };

  // Smooth scroll helper for interactive guide buttons
  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Kodee Kotlin companion guide"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end select-none pointer-events-none"
    >
      {/* Speech Bubble / Guide Card */}
      <AnimatePresence mode="wait">
        {!isMinimized && (
          <motion.div
            key={`bubble-${bubbleKey}-${messageIndex}`}
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="pointer-events-auto mb-3.5 max-w-[270px] sm:max-w-[310px] p-4 rounded-2xl bg-[#120e1c]/95 border border-purple/35 backdrop-blur-xl shadow-[0_12px_40px_rgba(139,49,255,0.28)] text-white text-xs relative overflow-hidden"
          >
            {/* Ambient background glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Tag + Auto-cycle count & next button */}
            <div className="flex items-center justify-between gap-2 mb-1.5 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-light">
                  {activeMessage.tag || "✦ Guide"}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Next tip mini-button */}
                <button
                  onClick={nextMessage}
                  title="Next guide tip"
                  className="px-1.5 py-0.5 rounded-md bg-white/5 hover:bg-purple/30 text-[10px] text-gray-light-3 hover:text-white transition-all flex items-center gap-1"
                >
                  <span>Next</span>
                  <span className="text-[9px]">➔</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <div className="font-semibold text-[13px] text-white tracking-tight mb-1 relative z-10">
              {activeMessage.title}
            </div>

            {/* Message Body */}
            <p className="text-gray-light-2 leading-relaxed font-normal text-[11.5px] mb-2.5 relative z-10">
              {activeMessage.message}
            </p>

            {/* Optional Interactive Action Pill */}
            {activeMessage.action && (
              <div className="relative z-10 pt-1">
                <button
                  onClick={() => scrollToSection(activeMessage.action.target)}
                  className="link inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple/20 hover:bg-purple/40 border border-purple/40 text-white text-[11px] font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{activeMessage.action.label}</span>
                </button>
              </div>
            )}

            {/* Auto-cycle progress bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
              <motion.div
                key={`progress-${bubbleKey}-${messageIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_ROTATE_INTERVAL / 1000, ease: "linear" }}
                className="h-full bg-gradient-to-r from-purple to-indigo-light"
              />
            </div>

            {/* Speech bubble pointer arrow */}
            <div className="absolute -bottom-2 right-9 w-4 h-4 bg-[#120e1c] border-b border-r border-purple/35 transform rotate-45 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Avatar Trigger */}
      <div className="pointer-events-auto relative">
        <motion.button
          onClick={handleToggleMascot}
          onMouseEnter={() => setIsMascotHovered(true)}
          onMouseLeave={() => setIsMascotHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={
            isMinimized
              ? { y: [0, -3, 0] }
              : { y: [0, -6, 0] }
          }
          transition={{
            repeat: Infinity,
            duration: isMinimized ? 2.5 : 3.5,
            ease: "easeInOut",
          }}
          className={`link group relative cursor-pointer flex items-center justify-center rounded-2xl transition-all duration-300 ${
            isMinimized
              ? "p-2 bg-[#14101e]/90 border border-purple/50 hover:border-purple shadow-[0_4px_20px_rgba(139,49,255,0.35)] backdrop-blur-xl"
              : "p-2.5 sm:p-3 bg-[#130f1c]/90 border border-purple/40 hover:border-purple shadow-[0_8px_32px_rgba(139,49,255,0.35)] backdrop-blur-xl"
          }`}
          title={isMinimized ? "Click to open Kodee Guide ✦" : "Click to minimize Kodee ✦"}
          aria-label={isMinimized ? "Expand Kodee guide" : "Minimize Kodee guide"}
        >
          {/* Subtle pulsating glow aura */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple/30 via-indigo-light/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Expanded State Avatar & Badge */}
          {!isMinimized ? (
            <div className="relative flex flex-col items-center">
              {/* Mascot Badge: Kodee */}
              <div className="absolute -top-4 px-2 py-0.5 rounded-full bg-[#1e1533] border border-purple/50 text-[10px] font-bold text-white shadow-md flex items-center gap-1 z-20 group-hover:border-purple transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                <span>Kodee</span>
              </div>

              {/* Avatar SVG Image with transition */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative mt-1 flex items-center justify-center">
                <Image
                  src={activeMessage.src || "/kotlin_mascot/greeting.svg"}
                  alt="Kodee Kotlin Guide"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(139,49,255,0.45)] group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>

              {/* Tooltip hint on hover */}
              <AnimatePresence>
                {isMascotHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 5 }}
                    className="absolute -bottom-6 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/80 border border-white/10 text-[9px] font-mono text-gray-light-2 pointer-events-none z-30"
                  >
                    Click to minimize
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Minimized Sleek Pill State */
            <div className="flex items-center gap-2 px-1">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src={activeMessage.src || "/kotlin_mascot/greeting.svg"}
                  alt="Kodee Guide"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(139,49,255,0.5)]"
                />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11px] font-bold text-white flex items-center gap-1">
                  <span>Kodee</span>
                  <span className="text-indigo-light text-[10px]">✦</span>
                </span>
                <span className="text-[9px] text-gray-light-3">Guide</span>
              </div>

              {/* Tooltip hint on hover for minimized */}
              <AnimatePresence>
                {isMascotHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 5 }}
                    className="absolute -top-7 right-0 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/80 border border-white/10 text-[9px] font-mono text-gray-light-2 pointer-events-none z-30"
                  >
                    Click to open guide
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.button>
      </div>
    </aside>
  );
};

export default KotlinMascot;
