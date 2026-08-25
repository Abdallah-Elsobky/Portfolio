import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive tour guide & interactive messages by section
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
      message: "Specialized in Jetpack Compose, Clean Architecture & Reactive UI ✨",
      action: { label: "See Projects 📱", target: "projects" },
    },
  ],
  skills: [
    {
      src: "/kotlin_mascot/jumping.svg",
      tag: "⚡ Tech Stack",
      title: "Supercharged Arsenal",
      message: "Advanced Kotlin, Jetpack Compose, Coroutines, Flow, Hilt, Room DB & GraphQL!",
      action: { label: "View Projects 📱", target: "projects" },
    },
    {
      src: "/kotlin_mascot/regular.svg",
      tag: "🛡️ Architecture",
      title: "Clean & Bulletproof",
      message: "MVI & MVVM patterns crafted with SOLID principles and modularization.",
    },
  ],
  projects: [
    {
      src: "/kotlin_mascot/in-love.svg",
      tag: "🏆 1st Place Winner",
      title: "JETS MobileX 2026",
      message: "Check out Carto (1st Place winner) & other native Android production apps!",
      action: { label: "Work Experience 💼", target: "work" },
    },
    {
      src: "/kotlin_mascot/sitting.svg",
      tag: "🔍 Deep Dive",
      title: "Source Code & Demos",
      message: "Tap on any project card to inspect GitHub source repositories and live previews!",
    },
  ],
  work: [
    {
      src: "/kotlin_mascot/regular.svg",
      tag: "💼 ITI & DEPI",
      title: "Proven Track Record",
      message: "ITI 9-Month Professional Mobile Diploma & DEPI Mobile Development Trainee.",
    },
    {
      src: "/kotlin_mascot/sharing.svg",
      tag: "🤝 Collaboration",
      title: "Agile & Team Ready",
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
      message: "Abdallah replies promptly to emails and LinkedIn messages. Let's connect!",
    },
  ],
};

const DISPLAY_DURATION = 5500; // 5.5 seconds open before auto-closing

const KotlinMascot = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false); // If true, never auto-open on scroll
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentPool, setCurrentPool] = useState(SECTION_GUIDES.home);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [isMascotHovered, setIsMascotHovered] = useState(false);

  const autoCloseTimerRef = useRef(null);
  const isInitialMount = useRef(true);

  // Helper to start the auto-close countdown
  const startAutoCloseTimer = useCallback((duration = DISPLAY_DURATION) => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
    }
    autoCloseTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, duration);
  }, []);

  // Helper to clear the auto-close countdown
  const clearAutoCloseTimer = useCallback(() => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  }, []);

  // Current active message from pool
  const activeMessage =
    currentPool[messageIndex % currentPool.length] || SECTION_GUIDES.home[0];

  // Advance to next message in current section
  const nextMessage = (e) => {
    if (e) e.stopPropagation();
    setMessageIndex((prev) => (prev + 1) % currentPool.length);
    setBubbleKey((prev) => prev + 1);
    startAutoCloseTimer(DISPLAY_DURATION);
  };

  // Initial visit greeting: Open on load for 5.5s then auto-close
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!userDismissed) {
        setIsOpen(true);
        startAutoCloseTimer(DISPLAY_DURATION);
      }
    }, 1200);

    return () => {
      clearTimeout(initialTimer);
      clearAutoCloseTimer();
    };
  }, [userDismissed, startAutoCloseTimer, clearAutoCloseTimer]);

  // Detect active section on scroll: Open, display message, and auto-close (unless user manually dismissed)
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
              const guides = SECTION_GUIDES[sectionId] || SECTION_GUIDES.home;
              setCurrentPool(guides);
              setMessageIndex(0);
              setBubbleKey((prev) => prev + 1);

              // If the user hasn't permanently dismissed it, open for this section and auto-close
              if (!userDismissed) {
                setIsOpen(true);
                startAutoCloseTimer(DISPLAY_DURATION);
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, userDismissed, startAutoCloseTimer]);

  // User manually closes the speech bubble
  const handleManualClose = (e) => {
    if (e) e.stopPropagation();
    clearAutoCloseTimer();
    setIsOpen(false);
    setUserDismissed(true); // Flag that user closed it, so scroll will not re-open automatically
  };

  // Toggle mascot when avatar button is clicked
  const handleToggleMascot = () => {
    if (isOpen) {
      // User clicked while open -> close and mark as dismissed
      handleManualClose();
    } else {
      // User clicked while closed -> open, reset dismissed state (user wants to interact)
      setUserDismissed(false);
      setIsOpen(true);
      setBubbleKey((prev) => prev + 1);
      startAutoCloseTimer(6500);
    }
  };

  // Smooth scroll helper for interactive action buttons
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
        {isOpen && (
          <motion.div
            key={`bubble-${bubbleKey}-${currentSection}-${messageIndex}`}
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onMouseEnter={clearAutoCloseTimer} // Pause auto-close while user is reading/hovering
            onMouseLeave={() => startAutoCloseTimer(3000)} // Resume auto-close when user moves cursor away
            className="pointer-events-auto mb-3.5 max-w-[270px] sm:max-w-[310px] p-4 rounded-2xl bg-[#120e1c]/95 border border-purple/35 backdrop-blur-xl shadow-[0_12px_40px_rgba(139,49,255,0.3)] text-white text-xs relative overflow-hidden"
          >
            {/* Ambient background glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Status Tag + Next Tip + Close Button */}
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

              <div className="flex items-center gap-1.5">
                {/* Next tip mini-button */}
                {currentPool.length > 1 && (
                  <button
                    onClick={nextMessage}
                    title="Next tip"
                    className="px-1.5 py-0.5 rounded-md bg-white/5 hover:bg-purple/30 text-[10px] text-gray-light-3 hover:text-white transition-all flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>Next</span>
                    <span className="text-[9px]">➔</span>
                  </button>
                )}

                {/* Explicit Close Button ('✕') */}
                <button
                  onClick={handleManualClose}
                  title="Close guide"
                  aria-label="Close guide"
                  className="w-5 h-5 rounded-full bg-white/10 hover:bg-red-500/80 hover:text-white text-gray-light-3 flex items-center justify-center text-[11px] transition-all cursor-pointer"
                >
                  ✕
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
                  className="link inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple/25 hover:bg-purple/40 border border-purple/40 text-white text-[11px] font-medium transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{activeMessage.action.label}</span>
                </button>
              </div>
            )}

            {/* Auto-cycle / Auto-close progress bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
              <motion.div
                key={`progress-${bubbleKey}-${messageIndex}-${isOpen}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: DISPLAY_DURATION / 1000, ease: "linear" }}
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
          animate={{ y: [0, -4, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className={`link group relative cursor-pointer flex items-center justify-center rounded-2xl transition-all duration-300 ${
            isOpen
              ? "p-2.5 sm:p-3 bg-[#130f1c]/90 border border-purple/50 shadow-[0_8px_32px_rgba(139,49,255,0.4)] backdrop-blur-xl"
              : "p-2 sm:p-2.5 bg-[#14101e]/85 border border-purple/40 hover:border-purple shadow-[0_4px_20px_rgba(139,49,255,0.3)] backdrop-blur-xl"
          }`}
          title={isOpen ? "Click to close Kodee" : "Click to open Kodee Guide ✦"}
          aria-label={isOpen ? "Close Kodee guide" : "Open Kodee guide"}
        >
          {/* Subtle pulsating glow aura */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple/30 via-indigo-light/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Floating Avatar & Badge (Open) VS Minimized Sleek Pill (Closed) */}
          {isOpen ? (
            <div className="relative flex flex-col items-center">
              {/* Mascot Badge: Kodee */}
              <div className="absolute -top-3.5 px-2 py-0.2 rounded-full bg-[#1e1533] border border-purple/50 text-[9.5px] font-bold text-white shadow-md flex items-center gap-1 z-20 group-hover:border-purple transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                <span>Kodee</span>
              </div>

              {/* Avatar SVG Image */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative mt-1 flex items-center justify-center">
                <Image
                  src={activeMessage.src || "/kotlin_mascot/greeting.svg"}
                  alt="Kodee Kotlin Guide"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(139,49,255,0.45)] group-hover:scale-105 transition-transform duration-200"
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
                    className="absolute -top-8 right-0 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/90 border border-white/15 text-[9px] font-mono text-gray-light-2 pointer-events-none z-30 shadow-lg"
                  >
                    Click to close
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Minimized Sleek Pill State */
            <div className="flex items-center gap-2 px-1 py-0.5">
              <div className="w-7 h-7 relative flex-shrink-0">
                <Image
                  src={activeMessage.src || "/kotlin_mascot/greeting.svg"}
                  alt="Kodee Guide"
                  width={28}
                  height={28}
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

              {/* Tooltip hint on hover */}
              <AnimatePresence>
                {isMascotHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 5 }}
                    className="absolute -top-7 right-0 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/90 border border-white/15 text-[9px] font-mono text-gray-light-2 pointer-events-none z-30 shadow-lg"
                  >
                    Click for guide ✦
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
