import React from "react";

const AmbientBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden bg-[#04060A]">
      {/* Top Left Android Green Ambient Glow */}
      <div
        className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full bg-[#3DDC84]/12 blur-[140px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      {/* Skills / About Android Green Ambient Glow */}
      <div
        className="absolute top-[18%] -right-40 w-[550px] h-[550px] rounded-full bg-[#3DDC84]/10 blur-[150px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      {/* Projects Emerald Ambient Glow */}
      <div
        className="absolute top-[45%] left-10 w-[500px] h-[500px] rounded-full bg-[#00BA5A]/10 blur-[160px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      {/* Work / Experience Android Green Ambient Glow */}
      <div
        className="absolute top-[70%] -right-20 w-[550px] h-[550px] rounded-full bg-[#3DDC84]/10 blur-[150px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      {/* Contact & Footer Emerald Ambient Glow */}
      <div
        className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00E676]/10 blur-[160px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default AmbientBackground;
