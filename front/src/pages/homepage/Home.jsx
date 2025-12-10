import React from "react";
import backgroundImage from '../../assets/bg/homeBgMain.png';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden py-24 sm:py-32 md:py-40 lg:py-48">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        {/* Top tagline */}
        <p className="text-xs sm:text-sm md:text-base tracking-widest mb-6 sm:mb-8 uppercase text-gray-300">
          Breaking Systems. Rewriting Innovation
        </p>
        
        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-widest mb-3 sm:mb-4">
          TRANSCENDING
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wider mb-3 sm:mb-4">
          THE
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-widest mb-8 sm:mb-10 md:mb-12">
          PARADIGM
        </h1>
        
        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          India's flagship entrepreneurship summit uniting creators and founders to challenge limits and build the future.
        </p>
        
        {/* Date */}
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 tracking-wide">
          6<sup>th</sup> - 8<sup>th</sup> February 2026
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 border rounded-xl bg-blue-950/70 border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider uppercase text-sm">
            Tickets
          </button>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-[linear-gradient(90deg,#00C0FF_0%,#5558FF_100%)] text-xs sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 hover:brightness-110 transition">
            Register
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          {/* Row 1 - Largest */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mb-2 px-4 sm:px-8 md:px-16 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">15K+</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 text-center sm:text-left">Participants Every Year</p>
              </div>
              <div className="flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-6">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 text-center sm:text-left">Participants Every Year</p>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">15K+</p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400"></div>
          </div>

          {/* Row 2 */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 px-8 sm:px-16 md:px-32 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">15K+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center sm:text-left">Participants Every</p>
              </div>
              <div className="flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-6">
                <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center sm:text-left">Participants Every</p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">15K+</p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>

          {/* Row 3 */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 px-16 sm:px-32 md:px-48 gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">15K+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 text-center sm:text-left">Participants</p>
              </div>
              <div className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 text-center sm:text-left">Participants</p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">15K+</p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>

          {/* Row 4 - Smallest */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2 sm:gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">15K+</p>
                <p className="text-[10px] sm:text-xs text-gray-300 text-center sm:text-left">Participants</p>
              </div>
              <div className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:gap-3">
                <p className="text-[10px] sm:text-xs text-gray-300 text-center sm:text-left">Participants</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">15K+</p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}