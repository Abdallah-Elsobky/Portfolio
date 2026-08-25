/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const SkillBadge = ({ skill }) => {
  return (
    <div
      className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-purple/60 hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(139,49,255,0.3)] link select-none"
    >
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center">
        <Image
          src={`/skills/${skill.icon}.svg`}
          alt={skill.name}
          width={30}
          height={30}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
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
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 },
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
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block pointer-events-none opacity-40"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal font-semibold text-xs sm:text-sm">
                SKILLS & ARCHITECTURE
              </p>
              <h1 className="text-5xl sm:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
                My Skills
              </h1>
              <h2 className="text-[1.35rem] sm:text-[1.65rem] font-normal md:max-w-2xl w-full mt-3 text-gray-light-2 leading-relaxed staggered-reveal">
                Building scalable, high-performance native Android & multiplatform applications using modern reactive architectures and clean code principles.
              </h2>
            </div>
            {/* Mascot Accent Badge */}
            <div className="hidden lg:flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/[0.03] border border-purple/30 backdrop-blur-sm self-start staggered-reveal link group hover:border-purple/70 transition-all duration-300 shadow-[0_4px_20px_rgba(127,82,255,0.15)]">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/kotlin_mascot/jumping.svg"
                  alt="Kodee Kotlin Mascot"
                  width={48}
                  height={48}
                  className="object-contain group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(127,82,255,0.5)]"
                />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                  Kotlin Native Specialist
                </span>
                <span className="text-gray-light-3 mt-0.5 text-[11px]">
                  Powered by Jetpack Compose & MVI
                </span>
              </div>
            </div>
          </div>

          {/* Languages & Core Platforms */}
          <div className="mt-12 staggered-reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-light" />
              <h3 className="uppercase tracking-widest text-gray-light-1 font-semibold text-sm">
                Languages & Core Platforms
              </h3>
            </div>
            <div className="flex items-center flex-wrap gap-3 sm:gap-4">
              {SKILLS.languagesAndCore.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Modern UI & Frameworks */}
          <div className="mt-10 staggered-reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-purple" />
              <h3 className="uppercase tracking-widest text-gray-light-1 font-semibold text-sm">
                UI & Declarative Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {SKILLS.uiAndFrameworks.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Libraries & Architecture */}
          <div className="mt-10 staggered-reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-green" />
              <h3 className="uppercase tracking-widest text-gray-light-1 font-semibold text-sm">
                Jetpack Architecture & Libraries
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Databases & Cloud + Testing & DevOps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {/* Databases & Cloud */}
            <div className="staggered-reveal">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-light" />
                <h3 className="uppercase tracking-widest text-gray-light-1 font-semibold text-sm">
                  Databases & Cloud
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {SKILLS.databases.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Testing, Build & DevOps */}
            <div className="staggered-reveal">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-purple" />
                <h3 className="uppercase tracking-widest text-gray-light-1 font-semibold text-sm">
                  Testing, Build & DevOps
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
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
