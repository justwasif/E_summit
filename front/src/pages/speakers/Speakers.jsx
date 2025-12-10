import React from "react";
import bgImage from "../../assets/bg/speakers_sponsors_1.png";
import speakerImg from "../../assets/logos/speakers/c2.png";

export default function Speakers() {
  const speakers = [
    { name: "Aman Gupta", role: "Co-Founder • boAt", speakerImg },
    { name: "Aman Gupta", role: "Co-Founder • boAt", speakerImg },
    { name: "Aman Gupta", role: "Co-Founder • boAt", speakerImg },
    { name: "Aman Gupta", role: "Co-Founder • boAt", speakerImg },
    { name: "Aman Gupta", role: "Co-Founder • boAt", speakerImg },
  ];

  const sliderList = [...speakers, ...speakers];

  return (
    <section
      className="relative w-full py-16 sm:py-20 md:py-24 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3 sm:mb-4">
          <span className="px-3 sm:px-4 py-1 border border-blue-400 rounded-full text-[10px] sm:text-xs tracking-wide">
            # SPEAKERS
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12">
          Our Recent <span className="text-blue-400">Past Guests</span>
        </h2>

        {/* SLIDER */}
        <div className="relative overflow-visible py-6 sm:py-8 md:py-10">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 animate-slide overflow-visible">
            {sliderList.map((speaker, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-3xl p-1 bg-white/5 
                  min-w-[240px] sm:min-w-[280px] md:min-w-[300px]
                  transition-all duration-300
                  hover:scale-110 sm:hover:scale-125 
                  hover:-translate-y-4 sm:hover:-translate-y-6
                  hover:shadow-[0_0_60px_rgba(0,140,255,0.6)] sm:hover:shadow-[0_0_80px_rgba(0,140,255,0.8)]
                  hover:z-50
                  cursor-pointer
                  will-change-transform
                "
              >
                <div className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur">
                  <img
                    src={speaker.speakerImg}
                    alt={speaker.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                  />
                  <div className="p-3 sm:p-4 text-center">
                    <h3 className="font-semibold text-base sm:text-lg">{speaker.name}</h3>
                    <p className="text-[10px] sm:text-xs text-blue-300 tracking-wide uppercase">
                      {speaker.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 18s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-slide {
            animation: slide 14s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}