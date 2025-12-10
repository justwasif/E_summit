import React from "react";
import bgImage from "../../assets/bg/speakers_sponsors_2.png";

const SPONSOR_BLOCKS = [
  { name: "wasif.", size: "sm", tone: "light" },
  { name: "wasif.", size: "md", tone: "medium" },
  { name: "wasif.", size: "lg", tone: "dark" },
  { name: "Ibrahim.", size: "md", tone: "light" },
  { name: "Ibrahim.", size: "sm", tone: "medium" },
  { name: "Ibrahim.", size: "lg", tone: "dark" },
  { name: "Ibrahim.", size: "md", tone: "light" },
  { name: "Ibrahim.", size: "sm", tone: "dark" },
  { name: "IBHARIM.", size: "xl", tone: "medium" },
  { name: "WASIF.", size: "sm", tone: "light" },
  { name: "WASIF.", size: "md", tone: "medium" },
  { name: "WASIF.", size: "lg", tone: "dark" },
];

// maps for different sizes + styles (like your Deloitte wall)
const sizeClasses = {
  sm: "w-24 h-9 text-xs px-3",
  md: "w-32 h-10 text-sm px-4",
  lg: "w-40 h-12 text-base px-5",
  xl: "w-52 h-14 text-lg px-6",
};

const toneClasses = {
  light: "from-blue-300 to-blue-500",
  medium: "from-blue-400 to-blue-600",
  dark: "from-blue-500 to-blue-700",
};

function SponsorCard({ name, size = "md", tone = "medium" }) {
  return (
    <div
      className={[
        "flex items-center justify-center",
        "rounded-xl bg-gradient-to-r",
        "text-white font-bold tracking-wide",
        "shadow-lg opacity-90 hover:opacity-100",
        "transition-transform hover:scale-105 cursor-pointer",
        sizeClasses[size],
        toneClasses[tone],
      ].join(" ")}
    >
      {name}
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <section
      className="relative w-full min-h-screen text-white py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          {/* Tag */}
          <span className="inline-block px-4 py-1 mb-5 border border-blue-400 rounded-full text-xs tracking-[0.2em] uppercase">
            # Sponsors
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            We build <span className="text-blue-400">Trust</span> not by
            <br />
            words but by <span className="text-blue-400">Action</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            kuch bhi likh diyo kya hai. <br />
            <br />
            jo ameer party ne sponsor kiya ho
          </p>
        </div>

        {/* RIGHT SIDE — Sponsor wall */}
        <div className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {SPONSOR_BLOCKS.map((block, index) => (
            <SponsorCard
              key={index}
              name={block.name}
              size={block.size}
              tone={block.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
