import React from "react";
import bgImage from "../../assets/bg/homeBgEvents.png";

export default function SponsorsPage() {
  const sponsors = [
    "wasif.",
    "wasif.",
    "wasif.",
    "Ibrahim.",
    "Ibrahim.",
    "Ibrahim.",
    "Ibrahim.",
    "Ibrahim.",
    "IBHARIM.",
    "WASIF.",
    "WASIF.",
    "WASIF.",
  ];

  return (
    <section
      className="relative w-full min-h-screen text-white py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

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

        {/* RIGHT SIDE — Sponsor blocks */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {sponsors.map((name, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-300 to-blue-600 text-black font-bold text-lg shadow-lg opacity-90 hover:opacity-100 transition-transform hover:scale-105 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
