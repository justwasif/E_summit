// src/components/header/Header.jsx
import React from "react";
import { Link,NavLink } from "react-router-dom";
import summitLogo from '../../assets/logos/summitLogo.svg';

const navItems = ["Events", "Speakers", "Workshops", "Partners", "Sponsors"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30">
      {/* very subtle top gradient over the hero */}
      <div className="bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
        
             <div className="flex h-16 items-center">
                <img src={summitLogo} alt="E-Summit Logo" className="h-9 w-9 object-contain"/>
            <div className="flex items-center gap-3">
          

              
              <span className="text-white font-semibold tracking-wide text-lg">
                E-SUMMIT
              </span>
            </div>

            {/* CENTER: nav items */}
            <nav className="flex-1 flex justify-center">
              <ul className="flex gap-8 text-[15px] uppercase tracking-[0.25em] text-slate-200">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      className="relative pb-1 group hover:text-white transition-colors"
                    >
                      <span>{item}</span>
                      {/* blue underline on hover (like screenshot) */}
                      <span className="absolute left-0 right-0 -bottom-0.5 mx-auto h-0.5 w-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-200 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: Tickets / Register */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-1.5  border-sky-300/70 bg-black/30 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100 hover:bg-sky-300/10 transition">
                Tickets
              </button>
              <button className="px-4 py-1.5  bg-gradient-to-r from-sky-400 to-blue-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 hover:brightness-110 transition">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
