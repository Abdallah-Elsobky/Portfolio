/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive Showcase Apps Data with verified screenshot assets
const SHOWCASE_APPS = [
  {
    id: "carto",
    name: "Carto",
    badge: "1st Winner",
    category: "Shopify & AI Assistant",
    tag: "Compose • MVI",
    gradient: "from-[#00BA5A] to-[#04331d]",
    accentColor: "#00BA5A",
    url: "https://github.com/Big-OO/carto",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    screens: [
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
  },
  {
    id: "awan",
    name: "Awan",
    badge: "AI Routine",
    category: "Adaptive Routines & Tasks",
    tag: "100% Compose",
    gradient: "from-[#6366F1] to-[#1e1b4b]",
    accentColor: "#6366F1",
    url: "https://github.com/Awan-app/Awan-Android",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    screens: [
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
  },
  {
    id: "trendo",
    name: "Trendo",
    badge: "CMP App",
    category: "Multiplatform News",
    tag: "CMP • Flow",
    gradient: "from-[#2563eb] to-[#0f172a]",
    accentColor: "#3b82f6",
    url: "https://github.com/Abdallah-Elsobky/Trendo",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    screens: [
      "/projects/trendo1.jpg",
      "/projects/trendo2.jpg",
      "/projects/trendo3.jpg",
    ],
  },
  {
    id: "tempo",
    name: "Tempo",
    badge: "Live Radar",
    category: "Real-time Weather & Maps",
    tag: "Compose • Maps",
    gradient: "from-[#0ea5e9] to-[#082f49]",
    accentColor: "#0ea5e9",
    url: "https://github.com/Abdallah-Elsobky/Tempo",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
      </svg>
    ),
    screens: [
      "/projects/tempo3.jpg",
      "/projects/tempo2.jpg",
      "/projects/tempo5.jpg",
      "/projects/tempo4.jpg",
      "/projects/tempo1.jpg",
    ],
  },
  {
    id: "foodo",
    name: "Foodo",
    badge: "Recipes",
    category: "Meal Planner & Nutrition",
    tag: "Android • SQLite",
    gradient: "from-[#ea580c] to-[#431407]",
    accentColor: "#ea580c",
    url: "https://github.com/Abdallah-Elsobky/Foodo",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    ),
    screens: [
      "/projects/fodo1.png",
      "/projects/fodo2.png",
      "/projects/fodo3.png",
      "/projects/fodo4.png",
      "/projects/fodo5.png",
    ],
  },
  {
    id: "islami",
    name: "Islami",
    badge: "Quran",
    category: "Holy Quran & Azkar",
    tag: "Clean Arch",
    gradient: "from-[#10b981] to-[#064e3b]",
    accentColor: "#10b981",
    url: "https://github.com/Abdallah-Elsobky/Islami",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
      </svg>
    ),
    screens: [
      "/projects/quran1.png",
      "/projects/quran2.png",
      "/projects/quran3.png",
    ],
  },
  {
    id: "trendify",
    name: "Trendify",
    badge: "News",
    category: "Fast Curated News",
    tag: "Kotlin • Flow",
    gradient: "from-[#8b5cf6] to-[#2e1065]",
    accentColor: "#8b5cf6",
    url: "https://github.com/Abdallah-Elsobky/Trendify",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    screens: [
      "/projects/trendify3.png",
      "/projects/trendify2.png",
      "/projects/trendify1.png",
    ],
  },
  {
    id: "tictac",
    name: "Tic Tac",
    badge: "AI Game",
    category: "Interactive Smart XO",
    tag: "Java • Android",
    gradient: "from-[#f43f5e] to-[#4c0519]",
    accentColor: "#f43f5e",
    url: "https://www.amazon.com/dp/B0DNCNV9SD/ref=apps_sf_sta",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
    screens: [
      "/projects/xo1.png",
      "/projects/xo2.png",
      "/projects/xo3.png",
      "/projects/xo4.png",
      "/projects/xo5.png",
    ],
  },
];

const CODE_LINES = [
  { line: "01", text: "@Composable", color: "text-[#FF7B72]" },
  { line: "02", text: "fun LaunchPortfolioApps() {", color: "text-[#79C0FF]" },
  { line: "03", text: "  val apps = listOf(", color: "text-white" },
  { line: "04", text: '    Carto(award = "1st Place Winner", arch = "MVI"),', color: "text-[#7EE787]" },
  { line: "05", text: '    Awan(features = "AI Routines & Compose"),', color: "text-[#FFA657]" },
  { line: "06", text: '    Trendo(tech = "CMP • Multiplatform"),', color: "text-[#79C0FF]" },
  { line: "07", text: '    Tempo(tech = "Radar Maps & Flow")', color: "text-[#D2A8FF]" },
  { line: "08", text: "  )", color: "text-gray-400" },
  { line: "09", text: "  AndroidStudio.runApp(apps.first())", color: "text-[#D2A8FF]" },
  { line: "10", text: "}", color: "text-white" },
];

// 1. Android Studio Code Terminal with Live Typing, Mouse Cursor & Run Click (Exactly 3.0s total flow)
const CodeTerminal = ({ onComplete }) => {
  const [displayedLineCount, setDisplayedLineCount] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  // 'TYPING' | 'MOVE_CURSOR' | 'CLICKING' | 'LAUNCHING'
  const [stage, setStage] = useState("TYPING");

  // Fast typewriter for 10 code lines (~1.3s total typing)
  useEffect(() => {
    if (stage !== "TYPING") return;

    if (displayedLineCount < CODE_LINES.length) {
      const currentLineText = CODE_LINES[displayedLineCount].text;

      if (currentCharIndex < currentLineText.length) {
        const charTimer = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 2); // 2 chars at a time for brisk realistic speed
        }, 12);
        return () => clearTimeout(charTimer);
      } else {
        const lineTimer = setTimeout(() => {
          setDisplayedLineCount((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 30);
        return () => clearTimeout(lineTimer);
      }
    } else {
      // Finished typing: start moving cursor towards the top Run button!
      const cursorTimer = setTimeout(() => {
        setStage("MOVE_CURSOR");
      }, 100);
      return () => clearTimeout(cursorTimer);
    }
  }, [stage, displayedLineCount, currentCharIndex]);

  // Cursor moves to Run button -> clicks -> triggers launcher (exact 3.0s total)
  useEffect(() => {
    if (stage === "MOVE_CURSOR") {
      const clickTimer = setTimeout(() => {
        setStage("CLICKING");

        setTimeout(() => {
          setStage("LAUNCHING");
          setTimeout(() => {
            onComplete && onComplete();
          }, 350);
        }, 350);
      }, 700);

      return () => clearTimeout(clickTimer);
    }
  }, [stage, onComplete]);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-[#090d14] border border-zinc-800 shadow-[0_30px_70px_rgba(0,0,0,0.98)] overflow-hidden font-mono select-none">
      {/* IDE Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0d121c] border-b border-zinc-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#151c2b] border border-zinc-800 text-[11px] text-gray-300">
          <span className="text-[#3DDC84] font-bold">kt</span>
          <span>MainActivity.kt</span>
        </div>

        {/* Android Studio Green "Run 'app'" Button */}
        <div className="relative">
          <motion.div
            animate={
              stage === "CLICKING"
                ? { scale: [1, 0.88, 1.05], backgroundColor: "#3DDC84" }
                : stage === "LAUNCHING"
                ? { backgroundColor: "#3DDC84", scale: 1.05 }
                : { scale: 1 }
            }
            transition={{ duration: 0.2 }}
            className={`flex items-center gap-1.5 px-2.5 py-0.8 rounded text-[10px] font-bold border transition-colors shadow-sm ${
              stage === "CLICKING" || stage === "LAUNCHING"
                ? "bg-[#3DDC84] text-black border-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.8)]"
                : "bg-[#3DDC84]/15 text-[#3DDC84] border-[#3DDC84]/40"
            }`}
          >
            <span>▶</span>
            <span>Run &apos;app&apos;</span>
          </motion.div>

          {stage === "CLICKING" && (
            <motion.div
              initial={{ scale: 0.3, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 rounded bg-[#3DDC84] pointer-events-none"
            />
          )}
        </div>
      </div>

      {/* Code Body */}
      <div className="relative p-4 text-[10.5px] sm:text-[11.5px] leading-relaxed text-gray-300 min-h-[210px]">
        <div className="flex gap-2.5">
          <div className="text-zinc-600 select-none text-right font-mono pr-2 border-r border-zinc-800/80 flex flex-col">
            {CODE_LINES.map((l, i) => (
              <span key={l.line} className={i <= displayedLineCount ? "text-zinc-500" : "text-zinc-700"}>
                {l.line}
              </span>
            ))}
          </div>

          <div className="flex-1 overflow-x-hidden">
            {CODE_LINES.slice(0, displayedLineCount).map((l) => (
              <div key={l.line} className={`${l.color} whitespace-pre`}>
                {l.text}
              </div>
            ))}

            {displayedLineCount < CODE_LINES.length && (
              <div className={`${CODE_LINES[displayedLineCount].color} whitespace-pre flex items-center`}>
                <span>{CODE_LINES[displayedLineCount].text.slice(0, currentCharIndex)}</span>
                <span className="w-1.5 h-[1.1em] bg-[#3DDC84] inline-block ml-0.5 animate-pulse shadow-[0_0_6px_#3DDC84]" />
              </div>
            )}
          </div>
        </div>

        {/* Animated Mouse Cursor Moving from Code to the Top Run Button */}
        {stage !== "TYPING" && (
          <motion.div
            initial={{ left: "65%", top: "75%", opacity: 0, scale: 0.8 }}
            animate={
              stage === "MOVE_CURSOR"
                ? { left: "84%", top: "-16px", opacity: 1, scale: 1 }
                : { left: "84%", top: "-16px", opacity: 1, scale: stage === "CLICKING" ? 0.82 : 1 }
            }
            transition={{
              duration: stage === "MOVE_CURSOR" ? 0.65 : 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute z-50 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3l7 18 3-7 7-3L3 3z" stroke="#000" strokeWidth="1.5" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2 bg-[#0a0e16] border-t border-zinc-800 flex items-center justify-between text-[10.5px]">
        {stage === "LAUNCHING" ? (
          <div className="flex items-center gap-1.5 text-[#3DDC84] animate-pulse font-medium">
            <span>🚀</span>
            <span>BUILD: SUCCESS • Launching Android Device...</span>
          </div>
        ) : stage === "CLICKING" || stage === "MOVE_CURSOR" ? (
          <div className="flex items-center gap-1.5 text-[#3DDC84]">
            <span>⚡</span>
            <span>Running MainActivity.kt...</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>✍️</span>
            <span>Writing project architecture...</span>
          </div>
        )}
        <span className="text-[9px] text-zinc-500 font-mono">Kotlin 2.0</span>
      </div>
    </div>
  );
};

// 2. Android Gesture Navigation Pill at Bottom (Tap or swipe to return Home)
const AndroidGestureBar = ({ onHomeClick, activeApp }) => {
  return (
    <div
      onClick={onHomeClick}
      className="absolute bottom-0 inset-x-0 z-30 pt-3 pb-1.5 flex items-center justify-center cursor-pointer group select-none bg-gradient-to-t from-black/95 via-black/50 to-transparent"
      title="Tap or Swipe to go Home"
    >
      <div
        className={`h-1 rounded-full transition-all duration-300 group-hover:h-1.5 ${
          activeApp
            ? "w-20 bg-white/85 group-hover:bg-[#3DDC84] group-hover:shadow-[0_0_8px_#3DDC84]"
            : "w-16 bg-white/50 group-hover:bg-white/80"
        }`}
      />
    </div>
  );
};

// 3. Android Home Screen: Top Search Bar + Middle Itadori Artwork + Apps Placed at the Bottom (No Dock)
const AndroidHomeScreen = ({ apps, onOpenApp, isTransitioning }) => {
  const [pressedAppId, setPressedAppId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    if (!searchQuery.trim()) return apps;
    const q = searchQuery.toLowerCase().trim();
    return apps.filter(
      (app) =>
        app.name.toLowerCase().includes(q) ||
        app.category.toLowerCase().includes(q) ||
        app.tag.toLowerCase().includes(q)
    );
  }, [apps, searchQuery]);

  const handleAppClick = (app) => {
    if (isTransitioning) return;
    setPressedAppId(app.id);
    setTimeout(() => {
      onOpenApp(app);
      setPressedAppId(null);
      setSearchQuery("");
    }, 150);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && filteredApps.length > 0) {
      handleAppClick(filteredApps[0]);
    }
  };

  return (
    <div className="relative w-full h-full px-2.5 pt-3 pb-7 flex flex-col justify-between select-none overflow-hidden">
      {/* Custom Itadori Wallpaper Background with Deep Dark Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="/projects/itadori.jpg"
          alt="Emulator Wallpaper"
          fill
          sizes="(max-width: 768px) 220px, 260px"
          className="object-cover object-center"
          priority
        />
        {/* Deep pure black gradient/shadow overlay for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 backdrop-blur-[0.3px]" />
      </div>

      {/* Top: Interactive App Search Bar */}
      <div className="relative z-10 w-full">
        <div className="w-full py-1.5 px-2.5 rounded-full bg-black/80 hover:bg-black/90 border border-zinc-700/70 backdrop-blur-md flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.8)] transition-colors">
          <svg className="w-3 h-3 text-[#3DDC84] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search apps..."
            className="w-full bg-transparent text-white text-[8.5px] placeholder-zinc-400 font-medium focus:outline-none"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-zinc-400 hover:text-white text-[9px] p-0.5"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Middle: Open space showcasing the Itadori wallpaper face & artwork */}
      <div className="flex-1 min-h-[40px] pointer-events-none" />

      {/* Bottom: Apps Grid neatly moved to the bottom of the screen */}
      <div className="relative z-10 grid grid-cols-4 gap-y-2.5 gap-x-1.5 mb-1 px-0.5">
        {filteredApps.map((app) => {
          const isPressed = pressedAppId === app.id;

          return (
            <motion.button
              key={app.id}
              onClick={() => handleAppClick(app)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              disabled={isTransitioning}
              className="flex flex-col items-center gap-0.5 group cursor-pointer focus:outline-none relative"
            >
              <div className="relative">
                <div
                  className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl bg-gradient-to-br ${app.gradient} border border-white/20 p-1.5 flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.9)] group-hover:shadow-[0_4px_18px_rgba(61,220,132,0.5)] group-hover:border-white/50 transition-all duration-200 relative overflow-hidden`}
                >
                  <div className="relative z-10">{app.icon}</div>
                </div>

                {isPressed && (
                  <motion.div
                    initial={{ scale: 0.3, opacity: 1 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 rounded-full bg-white/60 pointer-events-none"
                  />
                )}
              </div>

              <span className="text-[7.5px] font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-tight truncate max-w-[44px] text-center">
                {app.name}
              </span>
            </motion.button>
          );
        })}

        {filteredApps.length === 0 && (
          <div className="col-span-4 py-4 text-center text-zinc-400 text-[8px]">
            No matching apps found
          </div>
        )}
      </div>
    </div>
  );
};

// 4. In-App Pure Image Display (Edge-to-Edge Real App Display)
const InAppImageView = ({ app, screenIndex, onNextScreen, onPrevScreen }) => {
  const screens = app.screens || [];
  const currentScreen = screens[screenIndex] || screens[0];

  const handleScreenClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      onNextScreen();
    } else {
      onPrevScreen();
    }
  };

  return (
    <div
      onClick={handleScreenClick}
      className="relative w-full h-full bg-black select-none overflow-hidden cursor-pointer"
      title="Tap right to advance, tap left for previous screen"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`${app.id}-screen-${screenIndex}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentScreen}
            alt={`${app.name} screen`}
            fill
            sizes="(max-width: 768px) 200px, 260px"
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// 5. Master Flagship Android Device Component
const AndroidMockup = () => {
  // Starts in TERMINAL on first mount for exactly 3 seconds, then launches into EMULATOR
  const [mode, setMode] = useState("TERMINAL");
  const [activeAppId, setActiveAppId] = useState(null); // null = Home Screen, string = Open App
  const [screenIndex, setScreenIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeApp = useMemo(() => {
    return SHOWCASE_APPS.find((app) => app.id === activeAppId) || null;
  }, [activeAppId]);

  // Open App Handler
  const handleOpenApp = useCallback(
    (app) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveAppId(app.id);
      setScreenIndex(0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    },
    [isTransitioning]
  );

  // Close App Handler (Return to Home Screen)
  const handleCloseApp = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveAppId(null);
    setScreenIndex(0);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  // Screen Navigation Handlers
  const handleNextScreen = useCallback(() => {
    if (!activeApp) return;
    setScreenIndex((prev) => (prev + 1) % activeApp.screens.length);
  }, [activeApp]);

  const handlePrevScreen = useCallback(() => {
    if (!activeApp) return;
    setScreenIndex((prev) => (prev - 1 + activeApp.screens.length) % activeApp.screens.length);
  }, [activeApp]);

  // Auto-slide screenshots when inside an open app
  useEffect(() => {
    if (!activeApp || isTransitioning) return;

    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % activeApp.screens.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [activeApp, isTransitioning]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[420px]">
      <AnimatePresence mode="wait">
        {mode === "TERMINAL" ? (
          /* Initial 3-Second Code Terminal (Types code -> Moves Cursor -> Clicks Run -> Boots Device) */
          <motion.div
            key="code-terminal"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.88,
              y: -20,
              transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex justify-center"
          >
            <CodeTerminal onComplete={() => setMode("EMULATOR")} />
          </motion.div>
        ) : (
          /* Flagship Android Device in Pure Dark Styling */
          <motion.div
            key="android-emulator"
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-[185px] sm:max-w-[205px] lg:max-w-[220px] flex flex-col items-center select-none mx-auto"
          >
            {/* Top Interactive Switcher Pills */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#0a0e16]/95 border border-zinc-800/80 backdrop-blur-md mb-2 shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-30 flex-wrap justify-center">
              {/* Home Pill */}
              <button
                onClick={handleCloseApp}
                disabled={isTransitioning}
                className={`px-1.5 py-0.5 rounded-md text-[9px] font-mono font-semibold transition-all cursor-pointer ${
                  !activeApp
                    ? "bg-[#3DDC84] text-black shadow-[0_2px_8px_rgba(61,220,132,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Go to Home Screen"
              >
                {!activeApp && (
                  <span className="w-1 h-1 rounded-full bg-black inline-block mr-1 align-middle animate-pulse" />
                )}
                <span>Home</span>
              </button>

              {/* Showcase Apps Quick Switcher Pills */}
              {SHOWCASE_APPS.slice(0, 4).map((app) => {
                const isActive = activeAppId === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => handleOpenApp(app)}
                    disabled={isTransitioning}
                    className={`px-1.5 py-0.5 rounded-md text-[9px] font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      isActive
                        ? "bg-[#3DDC84] text-black shadow-[0_2px_8px_rgba(61,220,132,0.4)]"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                    title={`Open ${app.name}`}
                  >
                    {isActive && <span className="w-1 h-1 rounded-full bg-black animate-pulse" />}
                    <span>{app.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dark Flagship Android Device Frame with Pure Dark Shadow */}
            <div className="relative w-full aspect-[9/20] rounded-[1.65rem] p-[2.5px] bg-gradient-to-b from-zinc-700/60 via-zinc-900 to-black shadow-[0_25px_60px_-10px_rgba(0,0,0,0.98)] border border-zinc-800">
              {/* Screen Bezel */}
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-black flex flex-col justify-between">
                {/* Interactive Screen Viewport */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    {activeApp ? (
                      /* PURE APP VIEW: Displays 100% Full-Bleed App Screenshot */
                      <motion.div
                        key={`app-view-${activeApp.id}`}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <InAppImageView
                          app={activeApp}
                          screenIndex={screenIndex}
                          onNextScreen={handleNextScreen}
                          onPrevScreen={handlePrevScreen}
                        />
                      </motion.div>
                    ) : (
                      /* HOME LAUNCHER: Custom Itadori Wallpaper with Apps at Bottom */
                      <motion.div
                        key="home-launcher-view"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.08 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <AndroidHomeScreen
                          apps={SHOWCASE_APPS}
                          onOpenApp={handleOpenApp}
                          isTransitioning={isTransitioning}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Android Gesture Bar (Pure Dark Overlay) */}
                <AndroidGestureBar onHomeClick={handleCloseApp} activeApp={activeApp} />
              </div>
            </div>

            {/* Micro Interaction Hint */}
            <div className="mt-1.5 flex items-center gap-1 text-[8.5px] text-zinc-400 select-none">
              <span>{activeApp ? "👆 Tap screen to cycle • Bottom bar for home" : "👆 Tap any app to open"}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AndroidMockup;
