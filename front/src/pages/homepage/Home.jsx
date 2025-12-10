import React from "react";
import backgroundImage from "../../assets/bg/homeBgMain.png";

function Stat({ value = "15K+", label, align = "left", valueClass = "" }) {
  const isLeft = align === "left";

  return (
      <div
          className={`flex items-center gap-3 ${
              isLeft ? "" : "flex-row-reverse"
          }`}
      >
        <div
            className={`h-[1px] w-20 md:w-28 bg-gradient-to-${
                isLeft ? "r" : "l"
            } from-cyan-400 via-cyan-300 to-transparent`}
        />
        <div className={isLeft ? "text-left" : "text-right"}>
          <p
              className={`font-bold text-white ${
                  valueClass || "text-3xl md:text-4xl"
              }`}
          >
            {value}
          </p>
          <p className="text-[9px] md:text-[10px] text-slate-300 tracking-wider uppercase whitespace-nowrap">
            {label}
          </p>
        </div>
      </div>
  );
}

export default function Home() {
  return (
      <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {/* Top tagline */}
          <p className="text-sm md:text-base tracking-widest mb-8 uppercase text-gray-300">
            Breaking Systems. Rewriting Innovation
          </p>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mb-4">
            TRANSCENDING
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wider mb-4">
            THE
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mb-12">
            PARADIGM
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            India&apos;s flagship entrepreneurship summit uniting creators and
            founders to challenge limits and build the future.
          </p>

          {/* Date */}
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
            6<sup>th</sup> - 8<sup>th</sup> February 2026
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-4 py-1.5 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider uppercase">
              Tickets
            </button>
            <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 hover:brightness-110 transition">
              Register
            </button>
          </div>

          {/* Stats section */}
          <div className="relative mt-20 max-w-6xl mx-auto space-y-10">
            <div className="flex justify-between items-start">
              <Stat
                  value="15K+"
                  label="Participants Every Year"
                  align="left"
                  valueClass="text-5xl md:text-6xl"
              />
              <Stat
                  value="15K+"
                  label="Participants Every Year"
                  align="right"
                  valueClass="text-5xl md:text-6xl"
              />
            </div>

            <div className="flex justify-between items-start">
              <Stat
                  value="500+"
                  label="Startups"
                  align="left"
                  valueClass="text-4xl md:text-5xl"
              />
              <Stat
                  value="200+"
                  label="Speakers & Mentors"
                  align="right"
                  valueClass="text-4xl md:text-5xl"
              />
            </div>

            <div className="flex justify-between items-start">
              <Stat
                  value="50+"
                  label="Events & Competitions"
                  align="left"
                  valueClass="text-3xl md:text-4xl"
              />
              <Stat
                  value="10+"
                  label="Flagship Tracks"
                  align="right"
                  valueClass="text-3xl md:text-4xl"
              />
            </div>

            <div className="flex justify-between items-start">
              <Stat
                  value="∞"
                  label="Ideas Unleashed"
                  align="left"
                  valueClass="text-2xl md:text-3xl"
              />
              <Stat
                  value="1"
                  label="Flagship Summit"
                  align="right"
                  valueClass="text-2xl md:text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
