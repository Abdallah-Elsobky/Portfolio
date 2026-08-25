import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import { cn } from "utils/cn";

const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering }) => {
  const isActive = activeTab.value === tab.value;

  return (
    <button
      onMouseDown={() => handleOnClick(index)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-none transition-all duration-300 select-none"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {isActive && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
          className="absolute inset-0 bg-[#161d2d] border border-purple/60 shadow-[0_0_20px_rgba(127,82,255,0.4)] rounded-full"
        />
      )}

      <span
        className={cn(
          "relative text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 link flex items-center gap-2",
          isActive
            ? "text-white"
            : "text-gray-light-2 hover:text-white"
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

const TabsContent = ({ tabs, isHovering }) => {
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, index) => {
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - index * 0.08,
              top: isHovering ? index * -40 : 0,
              zIndex: -index,
              opacity: index < 3 ? 1 - index * 0.1 : 0,
            }}
            animate={{
              y: tab.value === tabs[0].value ? [0, 20, 0] : 0,
            }}
            className="w-full h-full absolute top-0 left-0 mt-16 md:mt-20"
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};

const mouseClickSound = new Howl({
  src: ["/sounds/mouse-click.mp3"],
});

const Tabs = ({ tabItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(tabItems);
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const handleOnClick = (index) => {
    const updatedTabs = [...tabItems];
    const selectedTab = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selectedTab[0]);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);
    mouseClickSound.play();
  };

  return (
    <div className="staggered-reveal w-full">
      {/* Floating Centered Modern Glassmorphic Pill Container */}
      <div className="pt-8 flex justify-center items-center w-full">
        <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#0c1017]/90 border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-x-auto max-w-full no-scrollbar">
          {tabItems.map((tab, index) => (
            <Tab
              key={tab.title}
              index={index}
              tab={tab}
              activeTab={activeTab}
              handleOnClick={handleOnClick}
              setIsHovering={setIsHovering}
            />
          ))}
        </div>
      </div>

      <TabsContent
        key={activeTab.value}
        tabs={tabs}
        activeTab={activeTab}
        isHovering={isHovering}
      />
    </div>
  );
};

export default Tabs;
