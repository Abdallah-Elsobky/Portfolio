import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profiles from "../../Profiles/Profiles";
import { MENULINKS } from "../../../constants";

const Menu = ({ isMenuOpen, closeMenu }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-[#05070D]/95 backdrop-blur-3xl flex flex-col justify-between items-center pt-32 sm:pt-36 pb-12 px-6 select-none overflow-y-auto"
        >
          {/* Ambient background glow blooms */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#3DDC84]/10 blur-[120px] pointer-events-none" />

          {/* Top Pill Accent */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622]/90 border border-white/10 shadow-sm backdrop-blur-md relative z-10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-light-2">
              Navigation
            </span>
          </div>

          {/* Center Navigation Links (Clean, No Numbers) */}
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            className="flex flex-col items-center gap-6 sm:gap-8 my-auto relative z-10 py-6"
          >
            {MENULINKS.map((link) => (
              <motion.li
                key={link.name}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 30 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative"
              >
                <a
                  href={`#${link.ref}`}
                  onClick={closeMenu}
                  className="link block text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-light-1 group-hover:text-white transition-all duration-300 transform group-hover:scale-105"
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-purple group-hover:to-[#3DDC84] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {link.name}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Bottom Profiles & Signature */}
          <div className="flex flex-col items-center gap-4 relative z-10 pt-6 border-t border-white/[0.06] w-full max-w-md">
            <Profiles />
            <span className="text-xs font-mono text-gray-light-3">
              Abdallah Elsobky • Android Developer
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
