import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Howl } from "howler";
import SoundBar from "./SoundBar/SoundBar";
import Menu from "./Menu/Menu";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="w-full fixed top-0 py-4 sm:py-5 z-50 select-none bg-[#0a0d14]/80 backdrop-blur-md border-b border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="flex justify-between items-center section-container">
          <a href="#home" className="link flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-1.5 group-hover:border-purple/60 group-hover:shadow-[0_0_15px_rgba(127,82,255,0.4)] transition-all duration-300">
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

          <div className="flex items-center gap-5 sm:gap-6">
            <SoundBar />

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
