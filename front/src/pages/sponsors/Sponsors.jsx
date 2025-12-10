import React from "react";
import flexLogo from "../../assets/logos/sponsors/sl1.svg";
import deloitteLogo from "../../assets/logos/sponsors/sl2.svg";
import walmartLogo from "../../assets/logos/sponsors/sl3.svg";
import googleLogo from "../../assets/logos/sponsors/sl4.svg";

export default function Sponsors() {
  const sponsorLogos = [
    flexLogo,
    deloitteLogo,
    walmartLogo,
    googleLogo,
    flexLogo,
    walmartLogo,
  ];

  return (
    <div className="w-full bg-gradient-to-r from-sky-400 to-indigo-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between sm:justify-around gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
        {sponsorLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index}`}
            className="h-5 sm:h-6 md:h-8 object-contain opacity-90 hover:opacity-100 transition flex-shrink-0"
          />
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}