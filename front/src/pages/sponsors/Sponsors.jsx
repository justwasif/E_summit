// src/components/Sponsors.jsx
import React from "react";

// IMPORT INDIVIDUAL LOGOS
import flexLogo from "../../assets/logos/sponsors/sl1.png";
import deloitteLogo from "../../assets/logos/sponsors/sl2.png";
import walmartLogo from "../../assets/logos/sponsors/sl3.png";
import googleLogo from "../../assets/logos/sponsors/sl4.png";

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
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {sponsorLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index}`}
            className="h-6 md:h-8 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}

      </div>
    </div>
  );
}
