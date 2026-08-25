import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MarqueeRow = ({ items, className, direction = "left" }) => {
  const rowContent = (
    <div className="flex items-center shrink-0">
      {items.map((item, idx) => (
        <span
          key={idx}
          className="inline-flex items-center uppercase font-bold tracking-widest text-2xl sm:text-4xl md:text-5xl text-white/25 hover:text-white/60 transition-colors duration-300 select-none whitespace-nowrap mx-3 sm:mx-6"
        >
          <span>{item}</span>
          <span
            className={`ml-6 sm:ml-10 text-xs sm:text-sm ${
              idx % 2 === 0
                ? "text-[#3DDC84] drop-shadow-[0_0_10px_#3DDC84]"
                : "text-[#7F52FF] drop-shadow-[0_0_10px_#7F52FF]"
            }`}
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`w-full overflow-hidden flex whitespace-nowrap ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className={`flex shrink-0 ${direction === "left" ? "ui-left" : "ui-right"} transform-gpu`}>
        {rowContent}
        {rowContent}
        {rowContent}
        {rowContent}
      </div>
    </div>
  );
};

const Collaboration = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  const topKeywords = [
    "Kotlin",
    "Jetpack Compose",
    "Clean Architecture",
    "MVI & MVVM",
    "Coroutines & Flow",
    "Hilt DI",
    "Material 3",
  ];

  const bottomKeywords = [
    "Native Android",
    "Room Database",
    "GraphQL & REST",
    "WorkManager",
    "Firebase",
    "CI/CD Pipelines",
    "Agile Delivery",
  ];

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, scale: 0.95, duration: 1.5 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });

    slidingTl
      .to(sectionRef.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -80 : -40,
      })
      .from(
        sectionRef.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -80 : -40 },
        "<"
      );

    const trigger1 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    const trigger2 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
      trigger1.kill();
      trigger2.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative select-none pt-24 sm:pt-32 pb-12 overflow-visible"
    >
      <div
        className={`${
          clientHeight > 650 ? "py-12" : "py-16"
        } flex flex-col items-center justify-center relative z-10 w-full`}
      >
        {/* Top Marquee Row */}
        <div className="w-full mb-8 sm:mb-12">
          <MarqueeRow items={topKeywords} direction="left" />
        </div>

        {/* Center Quote Section */}
        <div className="my-4 sm:my-8 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622]/90 border border-white/10 mb-4 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-light-2">
              Let&apos;s Build Together
            </span>
          </div>

          <h1
            ref={quoteRef}
            className="font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl"
          >
            Interested in{" "}
            <span
              className="text-strong font-bold"
              style={{
                background:
                  "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #7F52FF 51%, #3DDC84 102%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Collaboration
            </span>
            ?
          </h1>
        </div>

        {/* Bottom Marquee Row */}
        <div className="w-full mt-8 sm:mt-12">
          <MarqueeRow items={bottomKeywords} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
