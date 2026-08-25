import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth non-linear progress acceleration
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-[#04060A] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient background glow blooms */}
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[140px] pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#3DDC84]/12 blur-[140px] pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
        {/* Animated Central Emblem with Rotating Glow Ring */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-8 flex items-center justify-center">
          {/* Outer Rotating Gradient Orbit */}
          <div
            className="absolute inset-0 rounded-3xl border-2 border-transparent border-t-purple border-r-[#3DDC84] animate-[spin_3s_linear_infinite] opacity-80"
          />

          {/* Inner Glowing Badge Container */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0c1017] border border-white/15 flex items-center justify-center p-3 shadow-[0_10px_30px_rgba(61,220,132,0.35)] backdrop-blur-xl group">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain drop-shadow-[0_0_12px_rgba(61,220,132,0.6)] animate-pulse"
              priority
            />
          </div>
        </div>

        {/* Brand Name & Developer Identity */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
          Abdallah<span className="text-purple">.dev</span>
        </h1>
        <p className="text-xs sm:text-sm font-mono text-gray-light-2 mb-8 tracking-wide">
          Native Android Developer
        </p>

        {/* Modern Sleek Progress Bar Container */}
        <div className="w-56 sm:w-64 relative mb-3">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 backdrop-blur-sm border border-white/[0.08]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple via-indigo-500 to-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>

        {/* Live Loading Percentage Counter */}
        <div className="flex items-center justify-between w-56 sm:w-64 text-[11px] font-mono text-gray-light-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping" />
            Initializing Experience
          </span>
          <span className="text-white font-semibold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
