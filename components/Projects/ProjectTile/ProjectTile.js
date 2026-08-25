import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectTile.module.scss";

// Android Emulator Screen Component (1080 × 2400 aspect ratio)
// - Full-bleed display: image fills 100% of the screen area
// - Real-device header: Clock 9:41 on left, Battery on right (Wi-Fi & SIM removed)
// - iPhone Dynamic Island: Sleek solid black pill
// - Smooth Animated Transition: Silky cross-fade when images cycle
const AndroidEmulatorScreen = ({
  src,
  blurDataURL,
  alt,
  isCenter = false,
  customKey,
}) => {
  return (
    <div
      className={`relative w-full aspect-[9/20] rounded-[1.5rem] sm:rounded-[1.7rem] p-[3px] bg-gradient-to-b from-white/30 via-white/10 to-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-300 ${
        isCenter
          ? "ring-1 ring-white/30 shadow-[0_25px_55px_-10px_rgba(0,0,0,0.95)]"
          : "opacity-85 brightness-90"
      }`}
    >
      {/* Screen Frame Bezel */}
      <div className="relative w-full h-full rounded-[1.3rem] sm:rounded-[1.5rem] overflow-hidden bg-black select-none">
        {/* Mockup Image Container: Fills 100% with smooth fade transition */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={customKey || src}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={src}
                alt={alt || "App Screen"}
                fill
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                className="object-cover object-top"
                sizes="(max-width: 768px) 160px, 220px"
                priority={isCenter}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Screen Glare Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const {
    name,
    image,
    images = [],
    blurImage,
    description,
    gradient,
    url,
    tech,
  } = project;

  const imagesList =
    images && images.length > 0
      ? images
      : [image, image, image].filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const additionalClasses = classes || "";

  // Hover-triggered cycling: Cycles images only while user hovers over the card
  useEffect(() => {
    const hasMultipleUnique = new Set(imagesList).size > 1;
    if (!isHovered || !hasMultipleUnique) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesList.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [isHovered, imagesList]);

  // Indices for the 3 visible phones: Left, Center, Right
  const total = imagesList.length;
  const leftIndex = (currentIndex - 1 + total) % total;
  const centerIndex = currentIndex;
  const rightIndex = (currentIndex + 1) % total;

  return (
    <a
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group block flex-shrink-0 overflow-hidden rounded-[2rem] transition-all duration-300 ${additionalClasses}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
      }}
    >
      <div
        className={`h-[31rem] sm:h-[33rem] w-[21.5rem] sm:w-[25.5rem] md:w-[28rem] bg-[#0c1017] ${styles.projectTile} rounded-[2rem] relative p-5 sm:p-6 flex flex-col justify-between max-w-full border border-white/[0.08] hover:border-purple/60 hover:shadow-[0_25px_60px_-10px_rgba(127,82,255,0.35)] transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)]`}
        style={{
          background: `linear-gradient(150deg, ${gradient[0]}33 0%, #0A0D14 55%, #05070A 100%)`,
        }}
      >
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[60px] opacity-25 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
          style={{ background: gradient[0] }}
        />

        {/* Ambient Grid Pattern */}
        <img
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 object-cover opacity-10 pointer-events-none"
        />

        {/* Top Header: Project Type Badge (Controlled by project.type) */}
        <div className="flex items-center justify-center z-20 w-full mb-1">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141923] border border-white/10 shadow-sm">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: gradient[0] || "#3DDC84" }}
            />
            <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-light-2">
              {project.type || "Android App"}
            </span>
          </div>
        </div>

        {/* Center: Trio Android Phone Emulators (Comfortable spacing below badge) */}
        <div className="relative w-full flex-1 flex items-center justify-center my-1 z-10 select-none">
          <div className="relative w-full h-[15.5rem] sm:h-[17rem] flex items-center justify-center">
            {/* 1. LEFT PHONE */}
            <div className="absolute w-[7.4rem] sm:w-[8.6rem] -translate-x-[4rem] sm:-translate-x-[4.8rem] scale-[0.84] z-10 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.9)] rounded-[1.5rem] sm:rounded-[1.7rem]">
              <AndroidEmulatorScreen
                src={imagesList[leftIndex]}
                alt={`${name} screen left`}
                isCenter={false}
                customKey={`left-${leftIndex}`}
              />
            </div>

            {/* 2. RIGHT PHONE */}
            <div className="absolute w-[7.4rem] sm:w-[8.6rem] translate-x-[4rem] sm:translate-x-[4.8rem] scale-[0.84] z-10 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.9)] rounded-[1.5rem] sm:rounded-[1.7rem]">
              <AndroidEmulatorScreen
                src={imagesList[rightIndex]}
                alt={`${name} screen right`}
                isCenter={false}
                customKey={`right-${rightIndex}`}
              />
            </div>

            {/* 3. CENTER PHONE */}
            <div className="relative w-[8.6rem] sm:w-[10rem] z-20 transition-all duration-300 group-hover:scale-[1.03] shadow-[0_25px_45px_rgba(0,0,0,0.95)] rounded-[1.5rem] sm:rounded-[1.7rem]">
              <AndroidEmulatorScreen
                src={imagesList[centerIndex]}
                blurDataURL={blurImage}
                alt={`${name} screen center`}
                isCenter={true}
                customKey={`center-${centerIndex}`}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Small Title with Refined Shadow & Tech Stack */}
        <div className="relative z-20 flex flex-col gap-2 p-3.5 sm:p-4 rounded-2xl bg-[#0d121c]/95 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.85)] group-hover:border-purple/30 group-hover:shadow-[0_15px_35px_rgba(127,82,255,0.2)] transition-all duration-300">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-base sm:text-lg text-white tracking-tight group-hover:text-purple-300 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              {name}
            </h3>

            {/* Tech stack badge icons */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {tech.slice(0, 4).map((el) => (
                <div
                  key={el}
                  className="w-6 h-6 rounded-lg bg-white/[0.06] border border-white/10 p-1 flex items-center justify-center hover:scale-110 hover:border-purple/50 transition-transform"
                  title={el}
                >
                  <img
                    src={`/projects/tech/${el}.svg`}
                    alt={el}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              {tech.length > 4 && (
                <span className="text-[10px] text-gray-light-3 font-medium px-1">
                  +{tech.length - 4}
                </span>
              )}
            </div>
          </div>

          <p className="text-xs text-gray-light-2 line-clamp-1 font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
