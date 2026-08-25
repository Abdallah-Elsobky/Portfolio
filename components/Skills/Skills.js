/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const SkillBadge = ({ skill }) => {
  return (
    <div
      className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0d121c]/90 border border-white/[0.08] hover:border-purple/60 hover:bg-[#141b2a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(61,220,132,0.35)] link select-none"
    >
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center">
        <Image
          src={`/skills/${skill.icon}.svg`}
          alt={skill.name}
          width={30}
          height={30}
          className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        />
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-light-2 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 },
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
      className="w-full relative select-none mt-32 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-purple/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#3DDC84]/10 blur-[90px] pointer-events-none" />

      <div className="section-container py-16 flex flex-col justify-center relative z-10">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block pointer-events-none opacity-30"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal font-semibold text-xs sm:text-sm">
                TECH STACK & ARCHITECTURE
              </p>
              <h1 className="text-5xl sm:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
                My Skills
              </h1>
              <h2 className="text-[1.25rem] sm:text-[1.5rem] font-normal md:max-w-2xl w-full mt-3 text-gray-light-2 leading-relaxed staggered-reveal">
                Architecting reactive, offline-first mobile applications with Kotlin, Compose, MVI, and enterprise-grade modular design.
              </h2>
            </div>

            {/* Kodee Kotlin Mascot Accent Pill */}
            <div className="hidden lg:flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0e131d]/90 border border-purple/30 backdrop-blur-md self-start staggered-reveal link group hover:border-purple/70 transition-all duration-300 shadow-[0_4px_25px_rgba(61,220,132,0.25)]">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/kotlin_mascot/jumping.svg"
                  alt="Kodee Kotlin Mascot"
                  width={44}
                  height={44}
                  className="object-contain group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(61,220,132,0.5)]"
                />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                  Kotlin Native Specialist
                </span>
                <span className="text-gray-light-3 mt-0.5 text-[11px]">
                  Powered by Compose & Clean Arch
                </span>
              </div>
            </div>
          </div>

          {/* Languages & Core Platforms */}
          <div className="mt-12 staggered-reveal">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84]" />
              <h3 className="uppercase tracking-wider text-gray-light-1 font-semibold text-xs sm:text-sm">
                Languages & Core Platforms
              </h3>
            </div>
            <div className="flex items-center flex-wrap gap-3 sm:gap-3.5">
              {SKILLS.languagesAndCore.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Modern UI & Frameworks */}
          <div className="mt-10 staggered-reveal">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84]" />
              <h3 className="uppercase tracking-wider text-gray-light-1 font-semibold text-xs sm:text-sm">
                UI & Declarative Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-3.5">
              {SKILLS.uiAndFrameworks.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Libraries & Architecture */}
          <div className="mt-10 staggered-reveal">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84]" />
              <h3 className="uppercase tracking-wider text-gray-light-1 font-semibold text-xs sm:text-sm">
                Jetpack Architecture & Core Libraries
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-3.5">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Databases & Cloud + Testing & DevOps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {/* Databases & Cloud */}
            <div className="staggered-reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                <h3 className="uppercase tracking-wider text-gray-light-1 font-semibold text-xs sm:text-sm">
                  Databases & Cloud
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-3.5">
                {SKILLS.databases.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Testing, Build & DevOps */}
            <div className="staggered-reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84]" />
                <h3 className="uppercase tracking-wider text-gray-light-1 font-semibold text-xs sm:text-sm">
                  Testing, Build & DevOps
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-3.5">
                {SKILLS.testingAndTools.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
