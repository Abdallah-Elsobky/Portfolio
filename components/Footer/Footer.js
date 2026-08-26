/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-reveal";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import { MENULINKS } from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full relative select-none bg-transparent overflow-hidden pb-12">
      {/* Seamless, continuous Emerald Green & Violet ambient glow bloom (Zero separator lines) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[380px] bg-gradient-to-b from-[#3DDC84]/15 via-[#00E676]/8 to-transparent blur-[130px] pointer-events-none rounded-full"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-purple/15 blur-[110px] pointer-events-none rounded-full"
        style={{
          maskImage: "radial-gradient(circle at center, black 25%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 25%, transparent 70%)",
        }}
      />

      <Fade bottom distance={"2rem"}>
        <div className="section-container flex flex-col items-center justify-center pt-8 pb-12 relative z-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622]/90 border border-[#3DDC84]/30 mb-5 shadow-[0_0_15px_rgba(61,220,132,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#3DDC84]">
              Stay Connected
            </span>
          </div>

          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white mb-2 tracking-tight">
            Let&apos;s build the next generation of mobile apps.
          </h2>
          <p className="text-sm text-gray-light-3 text-center mb-8 max-w-md">
            Open for Android Developer roles, innovative projects, and high-impact mobile solutions.
          </p>

          <div className="text-center mb-8">
            <Profiles />
          </div>

          <div className="text-center mb-12">
            <Button
              href={`#${MENULINKS[4].ref}`}
              classes="link"
              type="secondary"
            >
              Get In Touch
            </Button>
          </div>

          {/* Copyright & Tech Signature */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-light-3">
            <span>© {new Date().getFullYear()} Abdallah Elsobky. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span className="text-[#3DDC84]">●</span>
              <span>Android Developer • Kotlin & Compose Specialist</span>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
