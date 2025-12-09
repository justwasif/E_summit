import { useState } from 'react';
import testimonialsFaqBg from '../../assets/bg/testimonials_faq.png';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "Aman Gupta",
            role: "CO-FOUNDER",
            company: "BOAT",
            image: "/api/placeholder/80/80", // Replace with actual image path
            text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less."
        },
        {
            name: "Aman Gupta",
            role: "CO-FOUNDER",
            company: "BOAT",
            image: "/api/placeholder/80/80",
            text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less."
        },
        {
            name: "Aman Gupta",
            role: "CO-FOUNDER",
            company: "BOAT",
            image: "/api/placeholder/80/80",
            text: "Something false has to be written here so write it in three lines. Strictly three lines, not anymore and not any less."
        },
        {
            name: "John Doe",
            role: "CEO",
            company: "TechCorp",
            image: "/api/placeholder/80/80",
            text: "Another testimonial text that spans exactly three lines. Make sure to keep it consistent with the design requirements."
        },
        {
            name: "Jane Smith",
            role: "FOUNDER",
            company: "StartupXYZ",
            image: "/api/placeholder/80/80",
            text: "More testimonial content here following the same three-line format. This helps maintain visual consistency across all cards."
        }
    ];

    const totalSlides = Math.ceil(testimonials.length / 3);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const getVisibleTestimonials = () => {
        const startIndex = currentSlide * 3;
        return testimonials.slice(startIndex, startIndex + 3);
    };

    return (
        <section
            id="testimonials"
            className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 pb-0 overflow-hidden"
            style={{
                backgroundImage: `url(${testimonialsFaqBg})`,
                backgroundPosition: 'center top',
                backgroundSize: '100% 200%',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0a1628'
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
                <div className="mb-12">
                    <button className="border-2 border-blue-400 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                        ✱ TESTIMONIALS
                    </button>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        What People say about Us
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div
                            key={`${currentSlide}-${index}`}
                            className="bg-blue-950/40 backdrop-blur-sm border border-blue-800 rounded-2xl p-6 hover:border-blue-600 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                                />
                                <div>
                                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.role} <span className="font-bold text-white">{testimonial.company}</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center items-center gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? 'w-8 h-2 bg-white'
                                    : 'w-2 h-2 bg-gray-500 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;