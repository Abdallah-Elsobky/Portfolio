import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import { cn } from "utils/cn";

const mouseClickSound = new Howl({
  src: ["/sounds/mouse-click.mp3"],
});

const Tab = ({ index, tab, activeIndex, handleOnClick }) => {
  const isActive = activeIndex === index;

  return (
    <button
      onClick={() => handleOnClick(index)}
      className="relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer transition-all duration-200 select-none focus:outline-none"
    >
      {isActive && (
        <motion.div
          layoutId="activeTabPill"
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className="absolute inset-0 bg-[#161d2d] border border-purple/60 shadow-[0_0_20px_rgba(61,220,132,0.4)] rounded-full"
        />
      )}

      <span
        className={cn(
          "relative text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 link flex items-center gap-2 z-10",
          isActive ? "text-white" : "text-gray-light-2 hover:text-white"
        )}
      >
        {isActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
        )}
        {tab.title}
      </span>
    </button>
  );
};

const Tabs = ({ tabItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    try {
      mouseClickSound.play();
    } catch (e) {
      // ignore audio error if user hasn't interacted
    }
  };

  const activeTab = tabItems[activeIndex] || tabItems[0];

  return (
    <div className="w-full">
      {/* Centered Glassmorphic Tab Bar */}
      <div className="pt-8 flex justify-center items-center w-full">
        <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#0c1017]/90 border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-x-auto max-w-full no-scrollbar">
          {tabItems.map((tab, index) => (
            <Tab
              key={tab.value}
              index={index}
              tab={tab}
              activeIndex={activeIndex}
              handleOnClick={handleOnClick}
            />
          ))}
        </div>
      </div>

      {/* Lag-Free Smooth Animated Experience Content */}
      <div className="relative w-full mt-10 md:mt-12 min-h-[25rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
            className="w-full"
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
