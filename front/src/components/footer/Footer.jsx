import footerLogo from '../../assets/logos/footerLogo.svg';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative stars */}
            <div className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8">
                    {/* Left Side */}
                    <div className="flex-1 max-w-md">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={footerLogo} alt="E-Summit Logo" className="h-10 sm:h-12 w-auto" />
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed mb-6">
                            E-Summit IIT Roorkee is North India's largest entrepreneurial fest, organized by the Entrepreneurship Cell to inspire and empower future leaders.
                        </p>

                        <div className="mt-6">
                            <h4 className="font-semibold mb-2 uppercase text-sm tracking-wide">Address</h4>
                            <address className="text-blue-200 text-sm not-italic leading-relaxed">
                                E-Cell Office, SAC Building<br />
                                IIT Roorkee<br />
                                Roorkee, Uttarakhand - 247667
                            </address>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16">
                        {/* Explore Section */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wide">Explore</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('home')}
                                        className="text-blue-200 hover:text-white transition-colors duration-200 text-sm text-left"
                                    >
                                        HOME
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('events')}
                                        className="text-blue-200 hover:text-white transition-colors duration-200 text-sm text-left"
                                    >
                                        EVENTS
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('speakers')}
                                        className="text-blue-200 hover:text-white transition-colors duration-200 text-sm text-left"
                                    >
                                        SPEAKERS
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('testimonials')}
                                        className="text-blue-200 hover:text-white transition-colors duration-200 text-sm text-left"
                                    >
                                        TESTIMONIALS
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('faqs')}
                                        className="text-blue-200 hover:text-white transition-colors duration-200 text-sm text-left"
                                    >
                                        FAQS
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wide">Contact Us</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="mailto:esummit@iitr.ac.in" className="text-blue-200 hover:text-white transition-colors duration-200 break-all">
                                        esummit@iitr.ac.in
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+918750528616" className="text-blue-200 hover:text-white transition-colors duration-200">
                                        +91 87505 28616
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+917016204140" className="text-blue-200 hover:text-white transition-colors duration-200">
                                        +91 70162 04140
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-blue-700 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4">
                    <p className="text-blue-200 text-center md:text-left">
                        Made with <span className="text-red-500">❤</span> by Design & Tech Team
                    </p>
                    <p className="text-blue-200 text-center md:text-right">
                        © 2024 E-Summit IIT Roorkee. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;