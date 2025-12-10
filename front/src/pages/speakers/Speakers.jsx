import React from "react";
import bgImage from "../../assets/bg/homeBgEvents.png"
import speakerImg from "../../assets/logos/speakers/c2.png";

export default function Speakers() {
  const speakers = [
    { name: "Aman Gupta", role: "Co-Founder • boAt",speakerImg },
    { name: "Aman Gupta", role: "Co-Founder • boAt",speakerImg },
    { name: "Aman Gupta", role: "Co-Founder • boAt" ,speakerImg},
    { name: "Aman Gupta", role: "Co-Founder • boAt" ,speakerImg},
    { name: "Aman Gupta", role: "Co-Founder • boAt" ,speakerImg},
  ];

  return (
    <section
      className="relative w-full py-24 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-4">
          <span className="px-4 py-1 border border-blue-400 rounded-full text-xs tracking-wide">
            # SPEAKERS
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our Recent <span className="text-blue-400">Past Guests</span>
        </h2>

        <div className="flex gap-6 overflow-x-auto md:justify-center py-4 hide-scrollbar">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`rounded-3xl p-1 transition-all duration-300 
                ${index === 2 ? "scale-110 bg-gradient-to-b from-blue-300 to-blue-600" : "bg-white/5"}
              `}
            >
              <div className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-72 h-80 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{speaker.name}</h3>
                  <p className="text-xs text-blue-300 tracking-wide uppercase">
                    {speaker.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
