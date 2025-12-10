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
      className="relative w-full py-24 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-4">
          <span className="px-4 py-1 border border-blue-400 rounded-full text-xs tracking-wide">
            # SPEAKERS
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our Recent <span className="text-blue-400">Past Guests</span>
        </h2>

        {/* SLIDER WRAPPER */}
        <div className="relative overflow-visible">
          {/* SLIDER */}
          <div className="flex gap-6 animate-slide overflow-visible">
            {sliderList.map((speaker, index) => (
              <div
                key={index}
                className={`
                  relative
                  rounded-3xl p-1 bg-white/5 min-w-[300px]
                  transition-transform transition-shadow duration-300
                  hover:scale-125 hover:-translate-y-6
                  hover:shadow-[0_0_80px_rgba(0,140,255,0.8)]
                  hover:z-50
                  active:scale-125 active:-translate-y-6
                  cursor-pointer
                  will-change-transform
                `}
              >
                <div className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur">
                  <img
                    src={speaker.speakerImg}
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
      </div>

      {/* SLIDE ANIMATION */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
