/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BOOT_STAGES = [
  { threshold: 22, label: "Initializing Android Runtime (ART)..." },
  { threshold: 48, label: "Compiling Jetpack Compose UI Engine..." },
  { threshold: 72, label: "Injecting Hilt & Clean Architecture..." },
  { threshold: 92, label: "Mounting Native Modules & Coroutines..." },
  { threshold: 100, label: "Ready • Welcome to Portfolio" },
];

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Determine current boot stage message
  const currentStage =
    BOOT_STAGES.find((stage) => progress <= stage.threshold) ||
    BOOT_STAGES[BOOT_STAGES.length - 1];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 z-[99999] bg-[#04070c] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Pure Android Green Ambient Glow Blobs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3DDC84]/12 blur-[160px] pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      {/* Cyber Subtle Grid Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
        {/* Animated Central Emblem with Soft Android Green Radar Aura */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 flex items-center justify-center">
          {/* Concentric Soft Radar Pulse 1 */}
          <motion.div
            animate={{ scale: [0.95, 1.25, 0.95], opacity: [0.3, 0.05, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[2.2rem] border border-[#3DDC84] pointer-events-none"
          />

          {/* Concentric Soft Radar Pulse 2 */}
          <motion.div
            animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.4, 0.15, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            className="absolute inset-1 rounded-[2rem] border border-[#3DDC84]/60 pointer-events-none"
          />

          {/* Mascot Container Card with Floating Motion */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[1.85rem] bg-[#0b121c]/95 border border-[#3DDC84]/35 flex items-center justify-center p-3.5 shadow-[0_12px_35px_rgba(61,220,132,0.3)] backdrop-blur-2xl"
          >
            <Image
              src="/kotlin_mascot/waving.svg"
              alt="Kodee Android Mascot"
              width={64}
              height={64}
              className="object-contain drop-shadow-[0_0_14px_rgba(61,220,132,0.8)]"
              priority
            />

            {/* Live Android Green Status Dot */}
            <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#0b121c] border border-white/20 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Developer Brand Identity in Pure Android Green */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2"
        >
          Abdallah <span className="text-[#3DDC84] drop-shadow-[0_0_12px_rgba(61,220,132,0.6)]">Elsobky</span>
        </motion.h1>

        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 backdrop-blur-md"
        >
          <span className="text-[#3DDC84] text-xs">●</span>
          <span className="text-[11.5px] sm:text-xs font-mono font-medium text-gray-light-2 tracking-wide">
            Native Android & Jetpack Compose Engineer
          </span>
        </motion.div>

        {/* Modern Android Green Progress Bar Container */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] relative mb-3">
          <div className="w-full h-2 bg-[#0c131e] rounded-full overflow-hidden p-[2px] backdrop-blur-sm border border-white/10 shadow-inner">
            <motion.div
              className="h-full rounded-full bg-[#3DDC84] shadow-[0_0_14px_#3DDC84]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>

        {/* Dynamic Boot Stage Text & Percentage Counter */}
        <div className="flex items-center justify-between w-full max-w-[280px] sm:max-w-[320px] text-[11px] font-mono text-gray-light-3">
          <span className="flex items-center gap-1.5 truncate max-w-[220px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-ping" />
            <span className="truncate text-gray-300 font-medium">{currentStage.label}</span>
          </span>
          <span className="text-[#3DDC84] font-bold ml-2 font-mono">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
