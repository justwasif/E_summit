import React from "react";
import backgroundImage from '../../assets/bg/homeBgMain.png'
import sl1 from "../../assets/logos/sponsors/sl1.png"

import FAQ from '../../components/faq/FAQ';
import Testimonials from '../../components/testimonials/Testimonials';

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
          India's flagship entrepreneurship summit uniting creators and founders to challenge limits and build the future.
        </p>
        
        {/* Date */}
        <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
          6<sup>th</sup> - 8<sup>th</sup> February 2026
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-4 py-1.5 rounded-full border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider uppercase">
            Tickets
          </button>
          <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 hover:brightness-110 transition">
            Register
          </button>
        </div>
        
    
        <div className="relative mt-20 max-w-6xl mx-auto">
        
          <div className="flex justify-between items-start mb-10">
            <div className="text-left">
              <div className="flex items-center gap-4 mb-1">
                <p className="text-5xl md:text-6xl font-bold">15K+</p>
                <p className="text-base text-gray-400">Participants Every Year</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-4 mb-1">
                <p className="text-base text-gray-400">Participants Every Year</p>
                <p className="text-5xl md:text-6xl font-bold">15K+</p>
              </div>
              <div className="h-px w-full bg-gradient-to-l from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
          </div>
          

          <div className="flex justify-between items-start mb-10">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-1">
                <p className="text-4xl md:text-5xl font-bold">15K+</p>
                <p className="text-sm text-gray-400">Participants Every</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-3 mb-1">
                <p className="text-sm text-gray-400">Participants Every</p>
                <p className="text-4xl md:text-5xl font-bold">15K+</p>
              </div>
              <div className="h-px w-full bg-gradient-to-l from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
          </div>
          
    
          <div className="flex justify-between items-start mb-10">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-1">
                <p className="text-3xl md:text-4xl font-bold">15K+</p>
                <p className="text-xs text-gray-400">Participants</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-3 mb-1">
                <p className="text-xs text-gray-400">Participants</p>
                <p className="text-3xl md:text-4xl font-bold">15K+</p>
              </div>
              <div className="h-px w-full bg-gradient-to-l from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
          </div>
        
          <div className="flex justify-between items-start">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-2xl md:text-3xl font-bold">15K+</p>
                <p className="text-xs text-gray-400">Participants</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs text-gray-400">Participants</p>
                <p className="text-2xl md:text-3xl font-bold">15K+</p>
              </div>
              <div className="h-px w-full bg-gradient-to-l from-cyan-400 via-cyan-300 to-transparent"></div>
            </div>
          </div>
        </div>

    
        
      </section>

      <Testimonials />
      <FAQ />

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