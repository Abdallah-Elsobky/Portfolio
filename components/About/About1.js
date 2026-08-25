import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-72 pb-64"
        } section-container`}
      >
        <div className="flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-white/10 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7F52FF] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-light-2">
              Engineering Philosophy
            </span>
          </div>

          <h1
            ref={quoteRef}
            className="font-medium text-[2.4rem] md:text-5xl lg:text-[3.75rem] text-center max-w-5xl leading-snug tracking-tight"
          >
            <span className="about-1 leading-tight">
              I&apos;m a dedicated Android Engineer focused on architecting{" "}
              <span className="text-white font-semibold">
                scalable, offline-first, and reactive mobile apps.
              </span>{" "}
            </span>
            <span className="about-2 leading-tight">
              Crafting seamless, 60 FPS user experiences using{" "}
              <span className="text-white font-semibold">
                Jetpack Compose, Clean Architecture, and MVI best practices.
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About1;
