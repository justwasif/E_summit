import React from "react";
import testimonialsFaqBg from "../../assets/bg/testimonials_faq.png";

import c1 from "../../assets/testimonials/c6.png";
import c2 from "../../assets/testimonials/c6.png";
import c3 from "../../assets/testimonials/c6.png";
import c4 from "../../assets/testimonials/c6.png";
import c5 from "../../assets/testimonials/c6.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aman Gupta",
      role: "CO-FOUNDER",
      company: "BOAT",
      image: c1,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
    {
      name: "Aman Gupta",
      role: "CO-FOUNDER",
      company: "BOAT",
      image: c2,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
    {
      name: "Aman Gupta",
      role: "CO-FOUNDER",
      company: "BOAT",
      image: c3,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
    {
      name: "Aman Gupta",
      role: "CO-FOUNDER",
      company: "BOAT",
      image: c4,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
    {
      name: "Aman Gupta",
      role: "CO-FOUNDER",
      company: "BOAT",
      image: c5,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
  ];

  // duplicate list for seamless infinite slider
  const sliderList = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 pb-0 overflow-visible"
      style={{
        backgroundImage: `url(${testimonialsFaqBg})`,
        backgroundPosition: "center top",
        backgroundSize: "100% 200%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0a1628",
      }}
    >
      {/* Decorative stars */}
      <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
      <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <button
            className="
              border-2 border-blue-400 text-blue-400
              px-4 py-2 rounded-full text-sm font-semibold
              mb-10
              hover:bg-blue-400 hover:text-white
              transition-colors duration-300
            "
          >
            ✱ TESTIMONIALS
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What People say about Us
          </h2>
        </div>

        {/* HORIZONTAL SLIDER */}
        <div className="relative overflow-visible py-10">
          <div className="flex gap-10 animate-testimonials-slide overflow-visible">
            {sliderList.map((testimonial, index) => (
              <div
                key={index}
                className="
                  relative
                  min-w-[320px] max-w-sm
                  rounded-3xl
                  p-10
                  bg-[#061228]/90
                  backdrop-blur-xl
                  border border-[#1e2d4a]
                  shadow-[0_0_40px_rgba(0,150,255,0.25)]
                  transition-transform transition-shadow duration-300
                  hover:scale-125 hover:-translate-y-6
                  hover:shadow-[0_0_80px_rgba(0,150,255,0.6)]
                  hover:z-50
                  active:scale-125 active:-translate-y-6
                  cursor-pointer
                  will-change-transform
                "
              >
                <div className="flex flex-col items-start text-left mb-8 space-y-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-2 shadow-[0_0_12px_rgba(0,150,255,0.35)]"
                  />
                  <h3 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 tracking-wider uppercase">
                    {testimonial.role}{" "}
                    <span className="font-bold text-white">
                      {testimonial.company}
                    </span>
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SLIDE ANIMATION */}
      <style>{`
        @keyframes testimonials-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-testimonials-slide {
          animation: testimonials-slide 22s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
