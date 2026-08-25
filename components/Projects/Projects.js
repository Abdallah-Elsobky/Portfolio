import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;
    let revealScrollTrigger;
    let revealTimeline;

    const ctx = gsap.context(() => {
      // 1. Reveal Animation for Title & Subtitle
      revealTimeline = gsap.timeline({ defaults: { ease: "none" } });
      revealTimeline.from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

      revealScrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0,
        animation: revealTimeline,
      });

      // 2. Smooth Horizontal Scroll Pinning
      if (isDesktop) {
        const innerContainer =
          sectionRef.current.querySelector(".inner-container");
        const projectWrapper =
          sectionRef.current.querySelector(".project-wrapper");

        const sidePadding =
          document.body.clientWidth - innerContainer.clientWidth;
        const elementWidth = sidePadding + projectWrapper.clientWidth;

        sectionRef.current.style.width = `${elementWidth}px`;
        const width = window.innerWidth - elementWidth;
        const duration = `${(elementWidth / window.innerHeight) * 100}%`;

        projectsTimeline = gsap.timeline({ defaults: { ease: "none" } });
        projectsTimeline
          .to(sectionRef.current, { x: width })
          .to(sectionTitleRef.current, { x: -width }, "<");

        projectsScrollTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: duration,
          scrub: 0,
          pin: true,
          anticipatePin: 1,
          animation: projectsTimeline,
          pinSpacing: "margin",
        });
      } else {
        const projectWrapper =
          sectionRef.current.querySelector(".project-wrapper");
        projectWrapper.style.width = "calc(100vw - 1rem)";
        projectWrapper.style.overflowX = "scroll";
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${
        isDesktop && "min-h-screen"
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
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-8"
          } flex items-center project-wrapper no-scrollbar w-fit staggered-reveal py-4`}
        >
          {PROJECTS.map((project, index) => (
            <ProjectTile
              classes={
                index === PROJECTS.length - 1 ? "" : "mr-8 xs:mr-10 sm:mr-14"
              }
              project={project}
              key={project.name}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
