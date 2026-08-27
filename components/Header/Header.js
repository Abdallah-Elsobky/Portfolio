import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Howl } from "howler";
import Menu from "./Menu/Menu";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Hide header on scroll down, show on scroll up (like Facebook / iOS native bars)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near the very top of the page
      if (currentScrollY < 60) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Keep visible while menu overlay is open
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }

      // Small jitter buffer
      if (Math.abs(currentScrollY - lastScrollY.current) < 8) {
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP -> Reveal
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        multiPop.play();
      }
      return nextState;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full fixed top-0 py-4 sm:py-5 z-50 select-none bg-[#0a0d14]/80 backdrop-blur-md border-b border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full shadow-none"
        }`}
      >
        <div className="flex justify-between items-center section-container">
          <a href="#home" className="link flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-1.5 group-hover:border-purple/60 group-hover:shadow-[0_0_15px_rgba(61,220,132,0.4)] transition-all duration-300">
              <Image
                src="/logo.svg"
                alt="Logo - Abdallah Elsobky"
                width={22}
                height={22}
                className="group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="hidden sm:inline font-mono font-semibold text-xs text-gray-light-2 tracking-wider group-hover:text-white transition-colors uppercase">
              Abdallah<span className="text-purple">.dev</span>
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick CV Download Link */}
            <a
              href="/Abdallah_Elsobky.pdf"
              download="Abdallah_Elsobky_Android_Developer.pdf"
              target="_blank"
              rel="noreferrer"
              className="link flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#111622] hover:bg-[#161d2d] border border-[#3DDC84]/40 hover:border-[#3DDC84] text-white text-xs font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(61,220,132,0.3)] transition-all duration-300 group"
              title="Download Resume / CV"
            >
              <svg className="w-3.5 h-3.5 text-[#3DDC84] transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="font-mono text-[11px]">CV</span>
            </a>

            {/* Modern Hamburger / Close Button */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="link relative w-10 h-10 rounded-xl bg-[#111622] border border-white/10 hover:border-purple/60 flex items-center justify-center text-white transition-all duration-300 shadow-sm z-50"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 transform origin-left ${
                    isMenuOpen ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 ${
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 transform origin-left ${
                    isMenuOpen ? "-rotate-45 translate-x-0.5 translate-y-0.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Header;
