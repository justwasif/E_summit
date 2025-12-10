import { useState } from "react";
import summitLogo from '../../assets/logos/summitLogo.svg';

const navItems = [
  { name: "Events", id: "events" },
  { name: "Speakers", id: "speakers" },
  { name: "Workshops", id: "workshops" },
  { name: "Partners", id: "partners" },
  { name: "Sponsors", id: "sponsors-bar" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <div className="bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src={summitLogo} alt="E-Summit Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain"/>
              <span className="text-white font-semibold tracking-wide text-base sm:text-lg">
                E-SUMMIT
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-6 xl:gap-8 text-sm uppercase tracking-[0.2em] text-slate-200">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="relative pb-1 group hover:text-white transition-colors"
                    >
                      <span>{item.name}</span>
                      <span className="absolute left-0 right-0 -bottom-0.5 mx-auto h-0.5 w-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-200 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-1.5 border border-sky-300/70 bg-black/30 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100 hover:bg-sky-300/10 transition">
                Tickets
              </button>
              <button className="px-4 py-1.5 bg-gradient-to-r from-sky-400 to-blue-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 hover:brightness-110 transition">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-sm uppercase tracking-wider text-slate-200 hover:text-white hover:bg-white/10 transition"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <button className="w-full px-4 py-2 border border-sky-300/70 bg-black/30 text-xs font-semibold uppercase tracking-wider text-slate-100">
                  Tickets
                </button>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-600 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}