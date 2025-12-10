import React from "react";
import bgImage from "../../assets/bg/speakers_sponsors_2.png";
import sponsor from "../../assets/logos/sponsors/sl2.svg";

export default function SponsorsPage() {
  const sponsorPills = [
    // Row 1
    { img: sponsor, className: "top-[8%]   left-[10%]  w-[15%] py-3" },
    { img: sponsor, className: "top-[4%]   left-[27%]  w-[40%] py-3" },
    { img: sponsor, className: "top-[6%]   left-[69%]  w-[25%] py-3" },

    // Row 2
    { img: sponsor, className: "top-[35%]  left-[8%]   w-[15%] py-3" },
    { img: sponsor, className: "top-[35%]  left-[25%]  w-[15%] py-3" },
    { img: sponsor, className: "top-[27%]  left-[42%]  w-[50%] py-3" },

    // Row 3
    { img: sponsor, className: "top-[53%]  left-[12%]  w-[40%] py-3" },
    { img: sponsor, className: "top-[55%]  left-[54%]  w-[15%] py-3" },
    { img: sponsor, className: "top-[53%]  left-[71%]  w-[28%] py-3" },

    // Row 4
    { img: sponsor, className: "top-[76%]  left-[8%]   w-[27%] py-3" },
    { img: sponsor, className: "top-[76%]  left-[37%]  w-[27%] py-3" },
    { img: sponsor, className: "top-[76%]  left-[66%]  w-[27%] py-3" },

    // Row 5
    { img: sponsor, className: "top-[95%]  left-[12%]  w-[40%] py-3" },
    { img: sponsor, className: "top-[97%]  left-[54%]  w-[15%] py-3" },
    { img: sponsor, className: "top-[95%]  left-[71%]  w-[28%] py-3" },
  ];

  return (
      <section
          className="relative w-full min-h-screen text-white py-24"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
        {/* dark overlay if needed later */}
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
          <span className="inline-block px-4 py-1 mb-5 border border-blue-400 rounded-full text-xs tracking-[0.2em] uppercase">
            # Sponsors
          </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              We build <span className="text-blue-400">Trust</span> not by
              <br />
              words but by <span className="text-blue-400">Action</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Manga (Japanese: 漫画; IPA: [maŋga] ⓘ[a]) are comics or graphic novels originating from Japan.[1] Most manga conform to a style developed in Japan in the late 19th century,[2] and the form has a long history in earlier Japanese art.[3] The term manga is used in Japan to refer to both comics and cartooning. Outside of Japan, the word is typically used to refer to comics originally published in Japan.

              In Japan, people of all ages and walks of life read manga. The medium includes works in a broad range of genres: action, adventure, business and commerce, comedy, detective, drama, historical, horror, mystery, romance, science fiction and fantasy, erotica (hentai and ecchi), sports and games, and suspense, among others.[4][5] Many manga are translated into other languages.[6][7]
            </p>
          </div>

          {/* RIGHT SIDE — floating sponsor blocks */}
          <div className="relative w-full max-w-xl h-[260px] md:h-[320px] lg:h-[340px]">
            {sponsorPills.map((pill, idx) => (
                <div
                    key={idx}
                    className={`
                absolute 
                bg-[linear-gradient(90deg,#00C0FF_0%,#5558FF_100%)]
                shadow-lg opacity-90 
                hover:opacity-100 transition-transform hover:scale-105 
                cursor-pointer flex items-center justify-center
                overflow-hidden rounded-lg
                ${pill.className}
              `}
                >
                  <img
                      src={pill.img}
                      alt="Sponsor Logo"
                      className="w-full h-full object-contain p-1"
                  />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
