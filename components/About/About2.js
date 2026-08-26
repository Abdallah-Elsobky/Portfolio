import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About2 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(quoteRef.current.querySelector(".about-3"), {
          backgroundPositionX: "100%",
          duration: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center bottom",
        end: "center center",
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
          clientHeight > 650 ? "py-52" : "py-44"
        } section-container flex flex-col items-center justify-center`}
      >
        {/* Eyebrow Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-white/10 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-gray-light-2">
            Engineering Values
          </span>
        </div>

        <h1
          ref={quoteRef}
          className="font-medium text-[2.2rem] md:text-5xl lg:text-[3.5rem] text-center max-w-4xl tracking-tight leading-snug text-gray-light-1"
        >
          I focus on building{" "}
          <span
            className="about-3 font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #3DDC84 51%, #3DDC84 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            fast & reliable
          </span>{" "}
          Android apps with clean code, solid architecture, and smooth interactions.
        </h1>
      </div>
    </section>
  );
};

export default About2;
