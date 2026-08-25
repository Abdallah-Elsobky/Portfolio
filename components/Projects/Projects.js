import { useState, useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

const INITIAL_VISIBLE_COUNT = 6;

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const projectsTriggerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_VISIBLE_COUNT);

  const remainingCount = PROJECTS.length - INITIAL_VISIBLE_COUNT;

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;
    let revealScrollTrigger;
    let revealTimeline;

    const ctx = gsap.context(() => {
      // 1. Smooth Reveal Animation for Section Entrance
      revealTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });
      revealTimeline.from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          force3D: true,
        }
      );

      revealScrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 0.6,
        animation: revealTimeline,
      });

      // 2. Smooth Horizontal Scroll Pinning
      if (isDesktop) {
        const innerContainer =
          sectionRef.current.querySelector(".inner-container");
        const projectWrapper =
          sectionRef.current.querySelector(".project-wrapper");

        // Sum the exact rendered width of all child cards + margins
        const cards = Array.from(projectWrapper.children);
        let cardsTotalWidth = 0;
        cards.forEach((card) => {
          const style = window.getComputedStyle(card);
          const marginRight = parseFloat(style.marginRight) || 0;
          const marginLeft = parseFloat(style.marginLeft) || 0;
          cardsTotalWidth += card.offsetWidth + marginRight + marginLeft;
        });

        const sidePadding = Math.max(
          0,
          document.body.clientWidth - innerContainer.clientWidth
        );
        // Balanced breathing margin so the last card has comfortable right padding
        const endMargin = 0;
        const elementWidth = sidePadding + cardsTotalWidth + endMargin;

        sectionRef.current.style.width = `${elementWidth}px`;
        const width = window.innerWidth - elementWidth;
        const duration = `${(elementWidth / window.innerHeight) * 100}%`;

        projectsTimeline = gsap.timeline({
          defaults: { ease: "none", force3D: true },
        });
        projectsTimeline
          .to(sectionRef.current, { x: width, ease: "none", force3D: true })
          .to(
            sectionTitleRef.current,
            { x: -width, ease: "none", force3D: true },
            "<"
          );

        projectsScrollTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: duration,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          animation: projectsTimeline,
          pinSpacing: "margin",
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        });

        projectsTriggerRef.current = projectsScrollTrigger;
      } else {
        const projectWrapper =
          sectionRef.current.querySelector(".project-wrapper");
        projectWrapper.style.width = "100%";
        projectWrapper.style.overflowX = "auto";
      }
    }, sectionRef);

    // Refresh ScrollTrigger after DOM renders cards
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [isDesktop, showAll]);

  const handleToggleShowAll = (expand) => {
    if (!expand) {
      // When collapsing via "Show Less", adjust scroll position back to the end of the 6-project set
      if (projectsTriggerRef.current) {
        const triggerStart = projectsTriggerRef.current.start;
        // Estimated span of 6 cards + side padding
        const targetScrollY = triggerStart + 6 * 440;
        window.scrollTo({
          top: targetScrollY,
          behavior: "instant",
        });
      }
    }
    setShowAll(expand);
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${isDesktop && "min-h-screen"
        } w-full relative select-none section-container transform-gpu`}
    >
      <div className="flex flex-col justify-center h-full py-8">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal font-semibold text-xs sm:text-sm">
            PROJECTS
          </p>
          <h1 className="text-5xl sm:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            My Projects
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-normal mt-2 text-gray-light-2 staggered-reveal whitespace-nowrap w-fit">
            Crafted with modern Android architecture and clean code.
          </h2>
        </div>

        {/* Horizontal Projects List */}
        <div
          className={`${clientHeight > 650 ? "mt-12" : "mt-8"
            } flex flex-nowrap items-center project-wrapper no-scrollbar w-max staggered-reveal py-4`}
        >
          {visibleProjects.map((project) => (
            <ProjectTile
              classes="mr-8 xs:mr-10 sm:mr-14"
              project={project}
              key={project.name}
              isDesktop={isDesktop}
            />
          ))}

          {/* "See More Projects" Action Card */}
          {!showAll && remainingCount > 0 && (
            <div
              onClick={() => handleToggleShowAll(true)}
              className="flex-shrink-0 cursor-pointer group"
              style={{
                maxWidth: isDesktop
                  ? "calc(100vw - 2rem)"
                  : "calc(100vw - 4rem)",
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleToggleShowAll(true);
              }}
            >
              <div className="h-[31rem] sm:h-[33rem] w-[18.5rem] sm:w-[21.5rem] md:w-[23rem] bg-[#0c1017] rounded-[2rem] overflow-hidden relative p-6 sm:p-8 flex flex-col items-center justify-between text-center border border-purple/40 hover:border-purple bg-gradient-to-b from-[#0e1d14]/70 via-[#0A0D14] to-[#05070A] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_-10px_rgba(61,220,132,0.45)] transition-all duration-300 group-hover:scale-[1.02]">
                {/* Ambient Top Glow strictly contained inside card */}
                <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-[50px] bg-[#3DDC84]/25 pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="flex items-center justify-center z-20 w-full">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#112419] border border-[#3DDC84]/50 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-white">
                      +{remainingCount} More Projects
                    </span>
                  </div>
                </div>

                {/* Center Icon & Illustration */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#3DDC84]/15 border border-[#3DDC84]/40 flex items-center justify-center mb-5 shadow-[0_10px_30px_rgba(61,220,132,0.3)] group-hover:scale-110 group-hover:bg-[#3DDC84]/25 transition-all duration-300">
                    <span className="text-4xl sm:text-5xl">📱</span>
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl text-white mb-2 tracking-tight">
                    Explore More
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-light-2 max-w-[200px] leading-relaxed">
                    Discover Trendify, Tic Tac Toe, Tasko, BMI & Natiga
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="relative z-20 w-full">
                  <button className="link w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00BA5A] via-[#3DDC84] to-[#00BA5A] bg-[length:200%_auto] text-black font-bold text-xs sm:text-sm shadow-[0_8px_25px_rgba(61,220,132,0.4)] group-hover:shadow-[0_12px_32px_rgba(61,220,132,0.6)] flex items-center justify-center gap-2 transition-all">
                    <span>See More Projects</span>
                    <span className="text-sm transition-transform group-hover:translate-x-1">
                      ➔
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* "Show Less" Collapse Card when ShowAll is active */}
          {showAll && remainingCount > 0 && (
            <div
              onClick={() => handleToggleShowAll(false)}
              className="flex-shrink-0 cursor-pointer group"
              style={{
                maxWidth: isDesktop
                  ? "calc(100vw - 2rem)"
                  : "calc(100vw - 4rem)",
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleToggleShowAll(false);
              }}
            >
              <div className="h-[31rem] sm:h-[33rem] w-[14rem] sm:w-[16rem] bg-[#0c1017] rounded-[2rem] overflow-hidden relative p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:border-purple/50 bg-gradient-to-b from-[#121620] to-[#080B10] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_40px_rgba(61,220,132,0.3)] transition-all duration-300 group-hover:scale-[1.02]">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                  ⇤
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-white mb-1">
                  Show Less
                </h3>
                <p className="text-xs text-gray-light-3 mb-4">
                  Collapse back to top 6
                </p>
                <span className="text-[11px] font-mono text-indigo-light">
                  Click to collapse
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
