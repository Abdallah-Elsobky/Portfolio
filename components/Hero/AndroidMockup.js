/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const RAW_SHOWCASE_APPS = [
  {
    id: "carto",
    name: "Carto",
    badge: "1st Place Winner",
    subtitle: "Native Shopify & AI Assistant",
    tag: "Compose • MVI",
    iconBg: "from-[#00BA5A] to-[#0b291b]",
    iconSvg: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    allScreens: [
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
    badge: "Adaptive Routines",
    subtitle: "AI Scheduling & Gamification",
    tag: "100% Compose",
    iconBg: "from-[#6366F1] to-[#1e1b4b]",
    iconSvg: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
    allScreens: [
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
    id: "islami",
    name: "Islami",
    badge: "Quran & Azkar",
    subtitle: "Holy Quran & Prayer Times",
    tag: "Clean Architecture",
    iconBg: "from-[#10b981] to-[#064e3b]",
    iconSvg: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    ),
    allScreens: [
      "/projects/quran1.png",
      "/projects/quran2.png",
      "/projects/quran3.png",
    ],
  },
  {
    id: "tempo",
    name: "Tempo",
    badge: "Live Forecasts",
    subtitle: "Radar Maps & Alerts",
    tag: "Compose • Flow",
    iconBg: "from-[#0ea5e9] to-[#082f49]",
    iconSvg: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
      </svg>
    ),
    allScreens: [
      "/projects/tempo3.jpg",
      "/projects/tempo2.jpg",
      "/projects/tempo5.jpg",
      "/projects/tempo4.jpg",
      "/projects/tempo1.jpg",
    ],
  },
];

// Kotlin Code specifically showcasing projects & Android Studio launch
const CODE_LINES = [
  { line: "01", text: "@Composable", color: "text-[#FF7B72]" },
  { line: "02", text: "fun LaunchPortfolioApps() {", color: "text-[#79C0FF]" },
  { line: "03", text: "  val apps = listOf(", color: "text-white" },
  { line: "04", text: '    Carto(award = "1st Place Winner", arch = "MVI"),', color: "text-[#7EE787]" },
  { line: "05", text: '    Awan(features = "AI Routines & Compose"),', color: "text-[#FFA657]" },
  { line: "06", text: '    Islami(features = "Holy Quran & Azkar"),', color: "text-[#7EE787]" },
  { line: "07", text: '    Tempo(tech = "Radar Maps & Flow")', color: "text-[#79C0FF]" },
  { line: "08", text: "  )", color: "text-gray-400" },
  { line: "09", text: "  AndroidStudio.runApp(apps.first())", color: "text-[#D2A8FF]" },
  { line: "10", text: "}", color: "text-white" },
];

const shuffleAllScreens = (screens) => {
  return [...screens].sort(() => 0.5 - Math.random());
};

// 1. Interactive Android Studio Terminal with Live Typing + Cursor Movement & Run Click Simulation
const CodeTerminal = ({ onComplete }) => {
  const [displayedLineCount, setDisplayedLineCount] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  // 'TYPING' | 'MOVE_CURSOR' | 'CLICKING' | 'LAUNCHING'
  const [stage, setStage] = useState("TYPING");

  // Typewriter line by line
  useEffect(() => {
    if (stage !== "TYPING") return;

    if (displayedLineCount < CODE_LINES.length) {
      const currentLineText = CODE_LINES[displayedLineCount].text;

      if (currentCharIndex < currentLineText.length) {
        const charTimer = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1);
        }, 16);
        return () => clearTimeout(charTimer);
      } else {
        const lineTimer = setTimeout(() => {
          setDisplayedLineCount((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 50);
        return () => clearTimeout(lineTimer);
      }
    } else {
      // Finished typing: start moving cursor towards the top Run button!
      const cursorTimer = setTimeout(() => {
        setStage("MOVE_CURSOR");
      }, 400);
      return () => clearTimeout(cursorTimer);
    }
  }, [stage, displayedLineCount, currentCharIndex]);

  // Handle cursor arrival and click on top Run button
  useEffect(() => {
    if (stage === "MOVE_CURSOR") {
      // Cursor moves across the terminal to the Run button in 1.1s
      const clickTimer = setTimeout(() => {
        setStage("CLICKING");

        // After click ripple and button press, launch the emulator!
        setTimeout(() => {
          setStage("LAUNCHING");
          setTimeout(() => {
            onComplete && onComplete();
          }, 600);
        }, 500);
      }, 1200);

      return () => clearTimeout(clickTimer);
    }
  }, [stage, onComplete]);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] rounded-2xl bg-[#0c1017]/95 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden font-mono select-none">
      {/* IDE Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#111622] border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {/* Active Tab */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#182030] border border-white/[0.08] text-[11px] text-gray-light-2">
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
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-1.5 px-2.5 py-0.8 rounded-md text-[10px] font-bold border transition-colors shadow-sm ${
              stage === "CLICKING" || stage === "LAUNCHING"
                ? "bg-[#3DDC84] text-black border-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.8)]"
                : "bg-[#3DDC84]/15 text-[#3DDC84] border-[#3DDC84]/40"
            }`}
          >
            <span>▶</span>
            <span>Run &apos;app&apos;</span>
          </motion.div>

          {/* Click Ripple on Run Button */}
          {stage === "CLICKING" && (
            <motion.div
              initial={{ scale: 0.3, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-md bg-[#3DDC84] pointer-events-none"
            />
          )}
        </div>
      </div>

      {/* Terminal Code Body */}
      <div className="relative p-4 text-[10.5px] sm:text-[11.5px] leading-relaxed text-gray-light-2 min-h-[225px]">
        <div className="flex gap-2.5">
          {/* Line Numbers */}
          <div className="text-gray-600 select-none text-right font-mono pr-2 border-r border-white/5 flex flex-col">
            {CODE_LINES.map((l, i) => (
              <span key={l.line} className={i <= displayedLineCount ? "text-gray-500" : "text-gray-700"}>
                {l.line}
              </span>
            ))}
          </div>

          {/* Typed Code with live characters */}
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
                ? { left: "84%", top: "-18px", opacity: 1, scale: 1 }
                : { left: "84%", top: "-18px", opacity: 1, scale: stage === "CLICKING" ? 0.82 : 1 }
            }
            transition={{
              duration: stage === "MOVE_CURSOR" ? 1.1 : 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute z-50 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
          >
            {/* Realistic OS Mouse Arrow Cursor */}
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3l7 18 3-7 7-3L3 3z" stroke="#000" strokeWidth="1.5" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Terminal Footer with Build & Launch Status */}
      <div className="px-3.5 py-2 bg-[#0e131d] border-t border-white/[0.08] flex items-center justify-between text-[10.5px]">
        {stage === "LAUNCHING" ? (
          <div className="flex items-center gap-1.5 text-[#3DDC84] animate-pulse">
            <span>🚀</span>
            <span>BUILD: SUCCESS • Launching Emulator...</span>
          </div>
        ) : stage === "CLICKING" || stage === "MOVE_CURSOR" ? (
          <div className="flex items-center gap-1.5 text-[#3DDC84]">
            <span>⚡</span>
            <span>Running MainActivity.kt...</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-gray-light-4">
            <span>✍️</span>
            <span>Writing project architecture...</span>
          </div>
        )}
        <span className="text-[9px] text-gray-500 font-mono">Kotlin 2.0</span>
      </div>
    </div>
  );
};

// 2. Android Launcher Home Screen Component
const AndroidHomeScreen = ({ apps, targetAppId, isTapping, onAppClick }) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#0b121e] via-[#080d16] to-[#04070c] p-3 flex flex-col justify-between select-none overflow-hidden">
      {/* Abstract Material You Wallpaper Accents */}
      <div className="absolute top-10 -left-10 w-44 h-44 rounded-full bg-[#3DDC84]/15 blur-[40px] pointer-events-none" />
      <div className="absolute bottom-16 -right-10 w-44 h-44 rounded-full bg-[#6366F1]/15 blur-[40px] pointer-events-none" />

      {/* Top Android At a Glance Widget */}
      <div className="relative z-10 pt-3 flex flex-col items-center text-center">
        <span className="text-[16px] font-mono font-bold text-white tracking-tight">
          9:41
        </span>
        <span className="text-[8.5px] font-mono text-[#3DDC84] font-medium mt-0.5">
          Wednesday, Aug 26
        </span>

        {/* Minimal Google Search Pill */}
        <div className="mt-2.5 w-full py-1 px-2.5 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-md flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-1.5">
            <span className="text-[9.5px] font-bold text-[#3DDC84]">G</span>
            <span className="text-[8.5px] text-gray-light-4">Search apps...</span>
          </div>
          <span className="text-[8.5px] opacity-70">🎙️</span>
        </div>
      </div>

      {/* Launcher App Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-y-3.5 gap-x-3 my-auto px-2">
        {apps.map((app) => {
          const isTarget = app.id === targetAppId;
          const showTapEffect = isTarget && isTapping;

          return (
            <div
              key={app.id}
              onClick={() => onAppClick && onAppClick(app.id)}
              className="flex flex-col items-center gap-1 cursor-pointer group"
            >
              <div className="relative">
                {/* App Icon Box */}
                <motion.div
                  animate={
                    showTapEffect
                      ? {
                          scale: [1, 0.85, 1.15, 1],
                          boxShadow: [
                            "0 0 0 rgba(61,220,132,0)",
                            "0 0 18px rgba(61,220,132,0.9)",
                            "0 0 0 rgba(61,220,132,0)",
                          ],
                        }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`w-9 h-9 rounded-2xl bg-gradient-to-br ${app.iconBg} border border-white/20 p-1.5 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105`}
                >
                  {app.iconSvg}
                </motion.div>

                {/* Animated Finger Tap Touch Ripple */}
                {showTapEffect && (
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0.9 }}
                    animate={{ scale: 2.3, opacity: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-white/50 pointer-events-none"
                  />
                )}
              </div>

              <span className="text-[9px] font-medium text-gray-light-2 group-hover:text-white tracking-tight truncate max-w-[65px] text-center">
                {app.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Dock */}
      <div className="relative z-10 pt-2 pb-0.5 border-t border-white/[0.06]">
        <div className="flex items-center justify-around px-2 py-1 rounded-2xl bg-white/[0.04] backdrop-blur-md">
          <span className="text-xs">📞</span>
          <span className="text-xs">💬</span>
          <span className="text-xs">🌐</span>
          <span className="text-xs">⚙️</span>
        </div>
      </div>
    </div>
  );
};

const AndroidMockup = () => {
  // Master Phase: 'TERMINAL' on initial load -> 'EMULATOR' after typing & cursor run click
  const [phase, setPhase] = useState("TERMINAL");

  const showcaseApps = useMemo(() => {
    return RAW_SHOWCASE_APPS.map((app) => ({
      ...app,
      screens: shuffleAllScreens(app.allScreens),
    }));
  }, []);

  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [targetAppIndex, setTargetAppIndex] = useState(0);
  const [screenIndex, setScreenIndex] = useState(0);
  // View states in EMULATOR: 'HOME' | 'APP' | 'EXITING' | 'LAUNCHING'
  const [viewState, setViewState] = useState("HOME");
  const [isTapping, setIsTapping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentApp = showcaseApps[activeAppIndex];
  const screens = currentApp.screens;

  // 1. Screen Slideshow in APP:
  // Shows EVERY screen of the current app for 2.0s before exiting to home and navigating to the next app
  useEffect(() => {
    if (phase !== "EMULATOR" || isHovered || viewState !== "APP") return;

    const timer = setTimeout(() => {
      if (screenIndex < screens.length - 1) {
        setScreenIndex((prev) => prev + 1);
      } else {
        const nextIndex = (activeAppIndex + 1) % showcaseApps.length;
        setTargetAppIndex(nextIndex);
        setViewState("EXITING");
      }
    }, 2000); // 2.0s per screen

    return () => clearTimeout(timer);
  }, [phase, viewState, screenIndex, screens.length, activeAppIndex, showcaseApps.length, isHovered]);

  // 2. OS Navigation Lifecycle in EMULATOR:
  useEffect(() => {
    if (phase !== "EMULATOR" || isHovered) return;

    let timeoutId;

    if (viewState === "EXITING") {
      timeoutId = setTimeout(() => {
        setIsTapping(false);
        setViewState("HOME");
      }, 450);
    } else if (viewState === "HOME") {
      const isInitialStartup = activeAppIndex === 0 && targetAppIndex === 0;
      const homeDuration = isInitialStartup ? 2000 : 3000;
      const tapDelay = isInitialStartup ? 1100 : 2100;

      const tapTimer = setTimeout(() => {
        setIsTapping(true);
      }, tapDelay);

      timeoutId = setTimeout(() => {
        setViewState("LAUNCHING");
      }, homeDuration);

      return () => {
        clearTimeout(tapTimer);
        clearTimeout(timeoutId);
      };
    } else if (viewState === "LAUNCHING") {
      timeoutId = setTimeout(() => {
        setActiveAppIndex(targetAppIndex);
        setScreenIndex(0);
        setIsTapping(false);
        setViewState("APP");
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [phase, viewState, activeAppIndex, targetAppIndex, isHovered]);

  // Manual interactive app switch handler
  const handleManualSwitch = (index) => {
    if (index === activeAppIndex && viewState === "APP") return;
    setTargetAppIndex(index);
    setViewState("HOME");
    setIsTapping(false);

    setTimeout(() => {
      setIsTapping(true);
      setTimeout(() => {
        setViewState("LAUNCHING");
        setTimeout(() => {
          setActiveAppIndex(index);
          setScreenIndex(0);
          setIsTapping(false);
          setViewState("APP");
        }, 500);
      }, 700);
    }, 400);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[420px]">
      <AnimatePresence mode="wait">
        {phase === "TERMINAL" ? (
          /* PHASE 1: Interactive Coding Terminal (Types Projects Code -> Moves Cursor -> Clicks Run 'app' -> Boots Emulator) */
          <motion.div
            key="code-terminal"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.88,
              y: -20,
              transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
            }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex justify-center"
          >
            <CodeTerminal onComplete={() => setPhase("EMULATOR")} />
          </motion.div>
        ) : (
          /* PHASE 2: Flagship Android Emulator Device Showcase */
          <motion.div
            key="android-emulator"
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[185px] sm:max-w-[205px] lg:max-w-[220px] flex flex-col items-center select-none mx-auto"
          >
            {/* Compact Interactive App Tabs Selector */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#0e141f]/90 border border-white/[0.08] backdrop-blur-md mb-2 shadow-md z-30 flex-wrap justify-center">
              {showcaseApps.map((app, idx) => {
                const isActive = idx === (viewState === "APP" ? activeAppIndex : targetAppIndex);
                return (
                  <button
                    key={app.id}
                    onClick={() => handleManualSwitch(idx)}
                    className={`link px-1.5 py-0.5 rounded-md text-[9px] font-mono font-semibold transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? "bg-[#3DDC84] text-black shadow-[0_2px_8px_rgba(61,220,132,0.4)]"
                        : "text-gray-light-3 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                    )}
                    <span>{app.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Flagship Android Device Frame with Exact 9:20 Ratio */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[9/20] rounded-[1.65rem] p-[2.5px] bg-gradient-to-b from-white/30 via-white/10 to-white/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.95)] border border-white/20"
            >
              {/* Device Screen Bezel */}
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-black flex flex-col justify-between">
                {/* Animated Viewport: App Screen OR Home Launcher */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {viewState === "APP" ? (
                      /* 1. Active App Screen with Smooth Smart-Enter Fade-In Crossfade */
                      <motion.div
                        key={`app-screen-${currentApp.id}-${screenIndex}`}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{
                          opacity: 0,
                          scale: 0.98,
                          transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                        }}
                        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={screens[screenIndex] || screens[0]}
                          alt={`${currentApp.name} live screen`}
                          fill
                          sizes="(max-width: 768px) 200px, 260px"
                          className="object-cover object-top"
                          priority
                        />

                        {/* Subtle Glare Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
                      </motion.div>
                    ) : (
                      /* 2. Android Home Screen: Starts on Home, Waits, Taps Icon, then Launches */
                      <motion.div
                        key="home-launcher"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{
                          opacity: 0,
                          scale: 1.15,
                          transition: { duration: 0.4, ease: [0.2, 0, 0, 1] },
                        }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <AndroidHomeScreen
                          apps={showcaseApps}
                          targetAppId={showcaseApps[targetAppIndex].id}
                          isTapping={isTapping}
                          onAppClick={(id) => {
                            const idx = showcaseApps.findIndex((a) => a.id === id);
                            if (idx !== -1) handleManualSwitch(idx);
                          }}
                        />

                        {/* Subtle Glare Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AndroidMockup;
