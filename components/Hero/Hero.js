import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";

const TypewriterText = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = strings[currentStringIndex % strings.length];

    let timer;

    if (!isDeleting) {
      // Typing phase: add one letter at a time
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 50); // Steady typing speed (50ms per character)
      } else {
        // Full string typed: pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200); // 2.2s reading pause
      }
    } else {
      // Deleting phase: remove one letter at a time
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 25); // Fast smooth backspacing (25ms per character)
      } else {
        // Fully erased: switch to next string immediately
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return (
    <span className="inline-flex items-center">
      <span>{currentText}</span>
      <span className="w-[2px] h-[1.25em] bg-purple inline-block ml-1 animate-[cursor-blink_0.9s_infinite] shadow-[0_0_8px_#7F52FF]" />
    </span>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(sectionRef.current, { opacity: 1, duration: 1 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex items-center py-12 md:py-20 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-[92vh] relative"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          @keyframes cursor-blink {
            0%,
            45% {
              opacity: 1;
            }
            50%,
            100% {
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Smoothly feathered ambient background glow accents - zero hard cutoffs */}
      <div
        className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#3DDC84]/12 ${styles.glowBlob}`}
        style={{
          maskImage: "radial-gradient(circle at center, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 25%, transparent 75%)",
        }}
      />
      <div
        className={`absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[#00BA5A]/10 ${styles.glowBlob}`}
        style={{
          maskImage: "radial-gradient(circle at center, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 25%, transparent 75%)",
        }}
      />
      <div
        className={`absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#3DDC84]/10 ${styles.glowBlob}`}
        style={{
          maskImage: "radial-gradient(circle at center, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 75%)",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10 pt-20 md:pt-8">
        {/* Left Column: Thesis & Android Developer Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center select-none">
          {/* Live Availability Pill */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111622]/90 border border-white/10 w-fit mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md staggered-reveal">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E676]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-gray-light-2">
              Available for Mobile Engineering Roles
            </span>
          </div>

          <h5
            className={`${styles.intro} font-mono font-medium text-indigo-light text-sm sm:text-base staggered-reveal mb-1`}
          >
            Hi, my name is
          </h5>

          <h1
            className={`${styles.heroName} text-white text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3`}
          >
            <span className={`relative ${styles.emphasize} staggered-reveal`}>
              Abdallah
            </span>
            <span className="staggered-reveal text-gradient"> Elsobky</span>
          </h1>

          {/* Dynamic Smooth Custom React Typewriter Line */}
          <div className="min-h-[64px] sm:min-h-[52px] md:min-h-[48px] mb-4 flex items-center staggered-reveal w-full">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-light-2 font-mono font-medium leading-relaxed break-words w-full">
              <TypewriterText strings={TYPED_STRINGS} />
            </p>
          </div>

          {/* Key Highlights / Badges */}
          <div className="flex flex-wrap gap-2.5 my-4 staggered-reveal">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple/10 border border-purple/30 text-purple text-xs font-medium shadow-sm hover:border-purple/60 transition-colors">
              <span>🏆</span>
              <span>1st Place Winner @ JETS MobileX 2026</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#3DDC84]/10 border border-[#3DDC84]/30 text-[#3DDC84] text-xs font-medium shadow-sm hover:border-[#3DDC84]/60 transition-colors">
              <span>📱</span>
              <span>11+ Apps Shipped (Compose & CMP)</span>
            </div>
          </div>

          {/* Modern Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mb-6 staggered-reveal">
            <a
              href={`#${MENULINKS[2].ref}`}
              className="group link px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00BA5A] via-[#3DDC84] to-[#00BA5A] bg-[length:200%_auto] text-black font-bold text-sm shadow-[0_10px_30px_rgba(61,220,132,0.45)] hover:shadow-[0_15px_40px_rgba(61,220,132,0.65)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 transition-all duration-300"
            >
              <span>Explore Projects</span>
              <span className="text-base transition-transform group-hover:translate-x-1">➔</span>
            </a>

            <a
              href={`#${MENULINKS[4].ref}`}
              className="group link px-7 py-3.5 rounded-2xl bg-[#111622]/90 hover:bg-[#161d2d] text-white border border-white/10 hover:border-purple/60 font-semibold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_30px_rgba(61,220,132,0.2)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md flex items-center gap-2.5 transition-all duration-300"
            >
              <span>Let&apos;s Talk</span>
              <span className="transition-transform group-hover:scale-110">💬</span>
            </a>
          </div>

          {/* Social Profiles Dock */}
          <div className="staggered-reveal">
            <Profiles />
          </div>
        </div>

        {/* Right Column: Interactive Android Studio Architecture & Code Console */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end staggered-reveal">
          <div
            className={`w-full max-w-[480px] rounded-[1.75rem] bg-[#0c1017]/95 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 hover:border-purple/50 hover:shadow-[0_25px_60px_-10px_rgba(61,220,132,0.35)] ${styles.ideContainer}`}
          >
            {/* IDE Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* Active Tab */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#182030] border border-white/[0.08] text-xs font-mono text-gray-light-2">
                <span className="text-[#3DDC84] font-bold">kt</span>
                <span>MainActivity.kt</span>
              </div>

              {/* Build Status Indicator */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full border border-[#00E676]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                <span>BUILD: SUCCESS</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-gray-light-2 overflow-x-auto select-text">
              <div className="flex gap-3">
                <div className="text-gray-600 select-none text-right font-mono pr-2 border-r border-white/5 flex flex-col">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                  <span>06</span>
                  <span>07</span>
                  <span>08</span>
                  <span>09</span>
                  <span>10</span>
                  <span>11</span>
                </div>

                <div className="flex-1">
                  <div>
                    <span className="text-[#FF7B72]">@Composable</span>
                  </div>
                  <div>
                    <span className="text-[#79C0FF]">fun </span>
                    <span className="text-[#D2A8FF]">ModernAndroidApp</span>
                    <span className="text-gray-light-3">() &#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#79C0FF]">val </span>
                    <span className="text-white">architect </span>
                    <span className="text-[#FF7B72]">= </span>
                    <span className="text-[#FFA657]">AwanEngine</span>
                    <span className="text-gray-light-3">(</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-300">ui </span>
                    <span className="text-[#FF7B72]">= </span>
                    <span className="text-[#7EE787]">JetpackCompose</span>
                    <span className="text-gray-light-3">(</span>
                    <span className="text-[#A5D6FF]">&quot;Material3&quot;</span>
                    <span className="text-gray-light-3">),</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-300">arch </span>
                    <span className="text-[#FF7B72]">= </span>
                    <span className="text-[#FFA657]">CleanArchitecture</span>
                    <span className="text-gray-light-3">.</span>
                    <span className="text-[#7EE787]">MVI</span>
                    <span className="text-gray-light-3">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-300">concurrency </span>
                    <span className="text-[#FF7B72]">= </span>
                    <span className="text-[#7EE787]">Coroutines </span>
                    <span className="text-[#FF7B72]">+ </span>
                    <span className="text-[#7EE787]">Flow</span>
                    <span className="text-gray-light-3">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-300">di </span>
                    <span className="text-[#FF7B72]">= </span>
                    <span className="text-[#7EE787]">Hilt</span>
                    <span className="text-gray-light-3">, </span>
                    <span className="text-indigo-300">storage </span>
                    <span className="text-[#FF7B72]">= </span>
                    <span className="text-[#7EE787]">Room</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-light-3">)</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">architect</span>
                    <span className="text-gray-light-3">.</span>
                    <span className="text-[#D2A8FF]">launchProduction</span>
                    <span className="text-gray-light-3">()</span>
                  </div>
                  <div>
                    <span className="text-gray-light-3">&#125;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Stack Badges */}
            <div className="px-4 py-3 bg-[#0e131d] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-light-3">
              <div className="flex items-center gap-1.5 text-gray-light-2">
                <span className="text-[#3DDC84]">●</span>
                <span>Compose 1.7</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-light-2">
                <span className="text-[#3DDC84]">●</span>
                <span>Kotlin 2.0</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-light-2">
                <span className="text-[#00E676]">●</span>
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-light-2">
                <span className="text-[#00E676]">●</span>
                <span>Hilt & Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
