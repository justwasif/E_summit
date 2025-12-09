import React from "react";
import bgImage from "../../assets/bg/homeBgMain.png";
import sl1 from "../../assets/logos/sponsors/sl1.png"



export default function Home() {
  const stats = [
    "Participants Every Year",
    "Participants Every Year",
    "Participants",
    "Participants",
    "Participants",
    "Participants",
  ];

  return (
    <div className="w-full bg-black text-white">
      {/* HERO POSTER - FULL SCREEN */}
      <section className="relative w-full h-screen">
        {/* Background image that fills entire screen */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
            // Replace with: backgroundImage: `url(${bgImage})`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-24 flex flex-col items-center text-center gap-16">
        {/* TOP TEXT BLOCK */}
        <div className="space-y-6">
          {/* small tagline */}
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-slate-200">
            Breaking Systems. Rewriting Innovation
          </p>

          {/* big title */}
          <div className="space-y-2 leading-tight">
            <p className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.4em] uppercase">
              Transcending
            </p>
            <p className="text-sm md:text-base tracking-[0.4em] uppercase text-sky-200">
              the
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.4em] uppercase">
              Paradigm
            </p>
          </div>

          {/* subtitle */}
          <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-200/90">
            India&apos;s flagship entrepreneurship summit uniting creators and
            founders to challenge limits and build the future.
          </p>

          {/* dates */}
          <p className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase">
            6<span className="align-super text-[0.6em]">th</span> – 8
            <span className="align-super text-[0.6em]">th</span> February 2026
          </p>

            <div className="flex items-center justify-center gap-4 pt-6">
              <button className="px-8 py-2.5 rounded-full border border-slate-300/50 bg-transparent backdrop-blur-sm text-[10px] font-semibold uppercase tracking-[0.25em] text-white hover:bg-white/10 transition">
                TICKETS
              </button>
              <button className="px-8 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-blue-500/50 hover:brightness-110 transition">
                REGISTER
              </button>
            </div>
          </div>

          {/* STATS SECTION - positioned in lower half */}
          <div className="w-full max-w-6xl space-y-12 px-8 pb-32">
            {/* Row 1 */}
            <div className="flex justify-between items-center">
              <Stat label={stats[0]} align="left" />
              <Stat label={stats[1]} align="right" />
            </div>
            
            {/* Row 2 */}
            <div className="flex justify-between items-center px-12">
              <Stat label={stats[2]} align="left" />
              <Stat label={stats[3]} align="right" />
            </div>
            
            {/* Row 3 */}
            <div className="flex justify-between items-center px-24">
              <Stat label={stats[4]} align="left" />
              <Stat label={stats[5]} align="right" />
            </div>
          </div>
        </div>

    
        
      </section>


     
    </div>
  );
}

function Stat({ label, align = "left" }) {
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
      <div className={`${isLeft ? "text-left" : "text-right"}`}>
        <p className="text-xl md:text-2xl font-bold text-white">15K+</p>
        <p className="text-[9px] md:text-[10px] text-slate-300 tracking-wider uppercase whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
}

function LogoText({ name }) {
  return (
    <div className="text-slate-700 font-semibold text-base md:text-lg">
      {name}
    </div>
  );
}