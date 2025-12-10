import React from "react";
import testimonialsFaqBg from "../../assets/bg/testimonials_faq.png";
import c1 from "../../assets/testimonials/c6.png";

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
      image: c1,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
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
      image: c1,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
    {
      name: "Aman Gupta",
      role: "CO-FOUNDER",
      company: "BOAT",
      image: c1,
      text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less.",
    },
  ];

  const sliderList = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 pb-0 overflow-hidden"
      style={{
        backgroundImage: `url(${testimonialsFaqBg})`,
        backgroundPosition: "center top",
        backgroundSize: "100% 200%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0a1628",
      }}
    >
      {/* Decorative stars */}
      <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100" />
      <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <button className="border-2 border-blue-400 text-blue-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-10 hover:bg-blue-400 hover:text-white transition-colors duration-300">
            ✱ TESTIMONIALS
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What People say about Us
          </h2>
        </div>

        {/* HORIZONTAL SLIDER */}
        <div className="relative overflow-hidden py-6 sm:py-8 md:py-10">
          <div className="flex gap-6 sm:gap-8 md:gap-10 animate-testimonials-slide">
            {sliderList.map((testimonial, index) => (
              <div
                key={index}
                className="
                  relative
                  min-w-[80vw] sm:min-w-[300px] md:min-w-[320px]
                  max-w-xs sm:max-w-sm
                  rounded-3xl
                  p-6 sm:p-8 md:p-10
                  bg-[#061228]/90
                  backdrop-blur-xl
                  border border-[#1e2d4a]
                  shadow-[0_0_40px_rgba(0,150,255,0.25)]
                  transition-all duration-300
                  md:hover:scale-110 lg:hover:scale-125
                  md:hover:-translate-y-4 lg:hover:-translate-y-6
                  md:hover:shadow-[0_0_60px_rgba(0,150,255,0.5)]
                  lg:hover:shadow-[0_0_80px_rgba(0,150,255,0.6)]
                  md:hover:z-50
                  cursor-pointer
                  will-change-transform
                "
              >
                <div className="flex flex-col items-start text-left mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-2 shadow-[0_0_12px_rgba(0,150,255,0.35)]"
                  />
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                    {testimonial.role}{" "}
                    <span className="font-bold text-white">
                      {testimonial.company}
                    </span>
                  </p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonials-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-testimonials-slide {
          animation: testimonials-slide 22s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-testimonials-slide {
            animation: testimonials-slide 16s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
