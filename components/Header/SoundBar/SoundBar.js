import { useState, useRef } from "react";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!soundBarEl.current) return;
    if (!isPlaying) {
      soundBarEl.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      soundBarEl.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      title={isPlaying ? "Pause background music" : "Play background music"}
      className={`link relative w-10 h-10 rounded-xl bg-[#111622] border flex items-center justify-center transition-all duration-300 shadow-sm ${
        isPlaying
          ? "border-purple/70 bg-[#161d2d] shadow-[0_0_15px_rgba(61,220,132,0.4)]"
          : "border-white/10 hover:border-purple/60 hover:bg-[#182030]"
      }`}
    >
      <div className="flex items-end justify-center gap-[2.5px] h-4 w-4">
        <span
          className={`w-[2.5px] rounded-full bg-gradient-to-t from-purple to-[#3DDC84] transition-all duration-300 ${
            isPlaying
              ? "h-4 animate-[sound-bar_0.8s_ease-in-out_infinite_alternate]"
              : "h-1.5 opacity-50 bg-gray-400"
          }`}
        />
        <span
          className={`w-[2.5px] rounded-full bg-gradient-to-t from-purple to-[#3DDC84] transition-all duration-300 ${
            isPlaying
              ? "h-3 animate-[sound-bar_1.1s_ease-in-out_0.2s_infinite_alternate]"
              : "h-3 opacity-60 bg-gray-400"
          }`}
        />
        <span
          className={`w-[2.5px] rounded-full bg-gradient-to-t from-purple to-[#3DDC84] transition-all duration-300 ${
            isPlaying
              ? "h-4.5 animate-[sound-bar_0.9s_ease-in-out_0.4s_infinite_alternate]"
              : "h-2 opacity-50 bg-gray-400"
          }`}
        />
        <span
          className={`w-[2.5px] rounded-full bg-gradient-to-t from-purple to-[#3DDC84] transition-all duration-300 ${
            isPlaying
              ? "h-2.5 animate-[sound-bar_1.2s_ease-in-out_0.1s_infinite_alternate]"
              : "h-1.5 opacity-50 bg-gray-400"
          }`}
        />
      </div>

      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="auto" />

      <style jsx>{`
        @keyframes sound-bar {
          0% {
            height: 4px;
          }
          100% {
            height: 16px;
          }
        }
      `}</style>
    </button>
  );
};

export default SoundBar;
