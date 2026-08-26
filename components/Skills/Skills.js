/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const CATEGORIES = SKILLS.categories || [];

const SkillChip = ({ skill }) => {
  return (
    <div className="group relative inline-flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-[#3DDC84]/10 border border-white/[0.08] hover:border-[#3DDC84]/40 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(61,220,132,0.18)] link select-none flex-shrink-0">
      <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
        <Image
          src={`/skills/${skill.icon}.svg`}
          alt={skill.name}
          width={20}
          height={20}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
        />
      </div>
      <span className="text-xs sm:text-[13px] font-medium text-gray-light-2 group-hover:text-white transition-colors leading-tight">
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const visibleCategories = useMemo(() => {
    if (selectedFilter === "all") return CATEGORIES;
    return CATEGORIES.filter((cat) => cat.id === selectedFilter);
  }, [selectedFilter]);

  const totalSkillsCount = useMemo(() => {
    return CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, y: 20, duration: 0.45, stagger: 0.08 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-28 md:mt-32"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-28 w-80 h-80 rounded-full bg-[#3DDC84]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-28 w-80 h-80 rounded-full bg-[#00BA5A]/10 blur-[100px] pointer-events-none" />

      <div className="section-container py-12 md:py-16 flex flex-col justify-center relative z-10">
        <div className="flex flex-col skills-wrapper">
          {/* Section Header & Kodee Companion Pill */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 staggered-reveal">
                <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
                <p className="uppercase tracking-widest text-[#3DDC84] font-mono font-semibold text-xs sm:text-sm">
                  TECH STACK & ARCHITECTURE
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
                My Skills
              </h1>
              <h2 className="text-[1.05rem] sm:text-[1.2rem] font-normal md:max-w-2xl w-full mt-2.5 text-gray-light-2 leading-relaxed staggered-reveal">
                Production-grade native Android, Jetpack Compose, CMP, reactive architectures, and scalable mobile engineering.
              </h2>
            </div>

            {/* Kodee Android Companion Badge */}
            <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0c141d]/90 border border-[#3DDC84]/35 backdrop-blur-md self-start md:self-auto staggered-reveal link group hover:border-[#3DDC84] transition-all duration-300 shadow-[0_4px_20px_rgba(61,220,132,0.2)]">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/kotlin_mascot/jumping.svg"
                  alt="Kodee Android Mascot"
                  width={36}
                  height={36}
                  className="object-contain group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(61,220,132,0.5)]"
                />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping" />
                  Kotlin Native & CMP
                </span>
                <span className="text-[#3DDC84] font-mono text-[10px]">
                  100% Compose & Clean Arch
                </span>
              </div>
            </div>
          </div>

          {/* Clean Interactive Category Pills Filter */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 mt-8 no-scrollbar flex-nowrap md:flex-wrap staggered-reveal">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`link px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                selectedFilter === "all"
                  ? "bg-[#3DDC84] text-black font-semibold shadow-[0_2px_12px_rgba(61,220,132,0.35)]"
                  : "bg-white/[0.04] text-gray-light-2 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
              }`}
            >
              <span>All Stack</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedFilter === "all" ? "bg-black/20 text-black" : "bg-white/10 text-gray-light-3"
                }`}
              >
                {totalSkillsCount}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`link px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#3DDC84] text-black font-semibold shadow-[0_2px_12px_rgba(61,220,132,0.35)]"
                      : "bg-white/[0.04] text-gray-light-2 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                  }`}
                >
                  <span>{cat.title.split(" ")[0]}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-black/20 text-black" : "bg-white/10 text-gray-light-3"
                    }`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sorted Professional Bento Grid Layout with Flex Wrap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
            <AnimatePresence mode="popLayout">
              {visibleCategories.map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#0c121a]/85 border border-white/[0.08] hover:border-[#3DDC84]/40 transition-all duration-300 shadow-sm relative overflow-hidden group"
                >
                  {/* Subtle top border glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#3DDC84]/0 group-hover:via-[#3DDC84]/40 to-transparent transition-all duration-500" />

                  {/* Top section: Category Header & Description */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84] flex-shrink-0" />
                        <h3 className="font-semibold text-white text-xs sm:text-[13.5px] uppercase tracking-wider">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#3DDC84] bg-[#3DDC84]/10 px-2 py-0.5 rounded-full border border-[#3DDC84]/20 font-medium flex-shrink-0">
                        {category.skills.length}
                      </span>
                    </div>

                    {category.description && (
                      <p className="text-[11px] text-gray-light-3 mb-3.5 leading-normal">
                        {category.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom section: Flex-wrap Skills Badges (No Text Overlap) */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                    {category.skills.map((skill) => (
                      <SkillChip key={skill.name} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
