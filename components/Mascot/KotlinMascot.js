import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Contextual guide dialogs per portfolio section
const SECTION_GUIDES = {
  home: [
    {
      title: "Hi, I'm Kodee! 👋",
      message: "Welcome to Abdallah's Android portfolio! Let me show you around 🚀",
      tag: "✦ Tour Guide",
      action: { label: "Explore Skills ⚡", target: "skills" },
      src: "/kotlin_mascot/greeting.svg",
    },
    {
      title: "Clean Kotlin Stack 🛠️",
      message: "Built with 100% Jetpack Compose, Coroutines, Flow, & MVI Architecture.",
      tag: "✦ Architecture",
      action: { label: "View Experience 💼", target: "work" },
      src: "/kotlin_mascot/sharing.svg",
    },
  ],
  skills: [
    {
      title: "Production Tech Stack 💻",
      message: "Compose, Kotlin 2.0, CMP, Hilt, Room, Retrofit & Ktor. Built for scale!",
      tag: "✦ Skills",
      action: { label: "See Projects 📱", target: "projects" },
      src: "/kotlin_mascot/jumping.svg",
    },
    {
      title: "Top 35 ITI Problem Solver 🏆",
      message: "Strong foundation in Data Structures, Algorithms, OOP & Clean Code.",
      tag: "✦ Problem Solving",
      src: "/kotlin_mascot/sitting.svg",
    },
  ],
  projects: [
    {
      title: "Featured Mobile Apps 📱",
      message: "Check out Carto (1st Place JETS Winner), Awan, Trendo & Tempo!",
      tag: "✦ Projects",
      src: "/kotlin_mascot/waving.svg",
    },
    {
      title: "Interactive Demo 🔍",
      message: "Swipe or scroll sideways to explore all Android & CMP creations.",
      tag: "✦ Tip",
      src: "/kotlin_mascot/naughty.svg",
    },
  ],
  work: [
    {
      title: "Enterprise Experience 💼",
      message: "Specialized mobile diplomas from DEPI, ITI, and Route Academy.",
      tag: "✦ Career",
      action: { label: "Let's Collaborate 🤝", target: "contact" },
      src: "/kotlin_mascot/regular.svg",
    },
  ],
  contact: [
    {
      title: "Let's Build Something Great! 🚀",
      message: "Looking for an Android Engineer? Send a message or connect on LinkedIn!",
      tag: "✦ Hire Me",
      src: "/kotlin_mascot/in-love.svg",
    },
  ],
};

const DISPLAY_DURATION = 6500; // 6.5s auto-close

const KotlinMascot = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [currentPool, setCurrentPool] = useState(SECTION_GUIDES.home);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Closed by default on Home!
  const [userDismissed, setUserDismissed] = useState(false);
  const [isMascotHovered, setIsMascotHovered] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);

  const autoCloseTimerRef = useRef(null);

  const activeMessage = currentPool[messageIndex] || currentPool[0] || SECTION_GUIDES.home[0];

  // Helper to clear running timer
  const clearAutoCloseTimer = useCallback(() => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  }, []);

  // Helper to start auto-close countdown
  const startAutoCloseTimer = useCallback(
    (duration = DISPLAY_DURATION) => {
      clearAutoCloseTimer();
      autoCloseTimerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, duration);
    },
    [clearAutoCloseTimer]
  );

  // Cycle to next tip in section pool
  const nextMessage = (e) => {
    if (e) e.stopPropagation();
    setMessageIndex((prev) => (prev + 1) % currentPool.length);
    setBubbleKey((prev) => prev + 1);
    startAutoCloseTimer(DISPLAY_DURATION);
  };

  // Section observer via scroll position: Opens Kodee only when scrolling AWAY from home
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.45;
      const sectionIds = ["contact", "work", "projects", "skills", "home"];

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

              // Auto-open only when scrolling away from home to another section!
              if (!userDismissed && sectionId !== "home") {
                setIsOpen(true);
                startAutoCloseTimer(DISPLAY_DURATION);
              } else if (sectionId === "home") {
                // If scrolling back to home, keep it closed
                clearAutoCloseTimer();
                setIsOpen(false);
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
      clearAutoCloseTimer();
    };
  }, [currentSection, userDismissed, startAutoCloseTimer, clearAutoCloseTimer]);

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
            className="pointer-events-auto mb-3.5 max-w-[270px] sm:max-w-[310px] p-4 rounded-2xl bg-[#0b1210]/95 border border-[#3DDC84]/35 backdrop-blur-xl shadow-[0_12px_40px_rgba(61,220,132,0.25)] text-white text-xs relative overflow-hidden"
          >
            {/* Ambient background glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3DDC84]/12 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Status Tag + Next Tip + Close Button */}
            <div className="flex items-center justify-between gap-2 mb-1.5 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#3DDC84]">
                  {activeMessage.tag || "✦ Guide"}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Next tip mini-button */}
                {currentPool.length > 1 && (
                  <button
                    onClick={nextMessage}
                    title="Next tip"
                    className="px-1.5 py-0.5 rounded-md bg-white/5 hover:bg-[#3DDC84]/20 text-[10px] text-gray-light-3 hover:text-white transition-all flex items-center gap-0.5 cursor-pointer"
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
                  className="link inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#3DDC84]/20 hover:bg-[#3DDC84]/35 border border-[#3DDC84]/40 text-white text-[11px] font-medium transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
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
                className="h-full bg-gradient-to-r from-[#3DDC84] to-[#00E676]"
              />
            </div>

            {/* Speech bubble pointer arrow */}
            <div className="absolute -bottom-2 right-9 w-4 h-4 bg-[#0b1210] border-b border-r border-[#3DDC84]/35 transform rotate-45 pointer-events-none" />
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
              ? "p-2.5 sm:p-3 bg-[#0d1612]/95 border border-[#3DDC84]/50 shadow-[0_8px_32px_rgba(61,220,132,0.35)] backdrop-blur-xl"
              : "p-2 sm:p-2.5 bg-[#0e1613]/90 border border-[#3DDC84]/40 hover:border-[#3DDC84] shadow-[0_4px_20px_rgba(61,220,132,0.25)] backdrop-blur-xl"
          }`}
          title={isOpen ? "Click to close Kodee" : "Click to open Kodee Guide ✦"}
          aria-label={isOpen ? "Close Kodee guide" : "Open Kodee guide"}
        >
          {/* Subtle pulsating glow aura */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#3DDC84]/25 via-[#00E676]/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Floating Avatar & Badge (Open) VS Minimized Sleek Pill (Closed) */}
          {isOpen ? (
            <div className="relative flex flex-col items-center">
              {/* Mascot Badge: Kodee */}
              <div className="absolute -top-3.5 px-2 py-0.2 rounded-full bg-[#112419] border border-[#3DDC84]/50 text-[9.5px] font-bold text-white shadow-md flex items-center gap-1 z-20 group-hover:border-[#3DDC84] transition-colors">
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
                  className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(61,220,132,0.4)] group-hover:scale-105 transition-transform duration-200"
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
                  className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(61,220,132,0.45)]"
                />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11px] font-bold text-white flex items-center gap-1">
                  <span>Kodee</span>
                  <span className="text-[#3DDC84] text-[10px]">✦</span>
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
