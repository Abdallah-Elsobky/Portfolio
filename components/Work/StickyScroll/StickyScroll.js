import React, { useState, useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import DotPattern from "../DotPattern/DotPattern";
import { cn } from "utils/cn";

const StickyScroll = ({ contentItems, image }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const cardLength = contentItems.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = contentItems.map(
      (_, index) => index / cardLength - 0.1
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0b0f19"];
  const linearGradients = [
    "linear-gradient(to bottom right, #7F52FF, #3DDC84)",
    "linear-gradient(to bottom right, #3DDC84, #7038ff)",
    "linear-gradient(to bottom right, #7038ff, #c9c9c9)",
  ];

  const singleImage = image || contentItems[0]?.image || contentItems[0]?.img;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Decorative Dot Matrix Pattern */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] rounded-[2.25rem] py-3 px-2 md:px-0 z-20 pointer-events-none opacity-40"
        )}
      />

      {/* Top and bottom smooth fade masks */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0b0f19] to-transparent z-10 rounded-t-[2.25rem] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0b0f19] to-transparent z-10 rounded-b-[2.25rem] pointer-events-none" />

      {/* Ambient glow accent inside container */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 rounded-full bg-purple/10 blur-[90px] pointer-events-none z-0" />

      <motion.div
        ref={containerRef}
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[25rem] sm:h-[26rem] flex justify-between items-start gap-8 sm:gap-12 p-6 sm:p-10 rounded-[2.25rem] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-y-auto no-scrollbar backdrop-blur-2xl relative z-10"
      >
        {/* Left Side: Scrollable Timeline Milestones */}
        <div className="flex items-start flex-1 max-w-2xl">
          {/* Vertical progress rail */}
          <div className="hidden sm:flex flex-col items-center mr-6 self-stretch pt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00E676] shadow-[0_0_10px_#00E676]" />
            <div className="w-0.5 flex-1 bg-white/10 my-2" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          <div className="flex-1">
            {contentItems.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div key={item.title + index} className="my-6 first:mt-2 last:mb-20">
                  {/* Step pill */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={cn(
                        "text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-all duration-300",
                        isActive
                          ? "bg-[#3DDC84]/20 border-[#3DDC84]/50 text-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.35)]"
                          : "bg-white/5 border-white/10 text-gray-500"
                      )}
                    >
                      Milestone 0{index + 1}
                    </span>
                  </div>

                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0.25,
                      scale: isActive ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300",
                      isActive ? "text-white" : "text-gray-400"
                    )}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base text-gray-light-2 mt-3 leading-relaxed max-w-xl"
                  >
                    {item.description}
                  </motion.p>
                </div>
              );
            })}
            <div className="h-28" />
          </div>
        </div>

        {/* Right Side: Clean Rounded Image that fills the container */}
        <div className="hidden lg:block h-60 w-80 rounded-2xl sticky top-2 overflow-hidden shrink-0 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] bg-white relative group">
          {singleImage ? (
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white">
              <img
                src={singleImage}
                alt="Work Preview"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 pointer-events-none" />
            </div>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white px-4 text-center rounded-2xl font-medium shadow-inner"
              style={{
                backgroundImage:
                  linearGradients[activeCard % linearGradients.length],
              }}
            >
              {contentItems[activeCard]?.content ?? null}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default StickyScroll;
