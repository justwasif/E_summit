import { Link } from 'react-router-dom';
import footerLogo from '../../assets/logos/footerLogo.svg';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Decorative stars */}
            <div className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
                    {/* Left Side: Logo, Description and Address */}
                    <div className="flex-1 max-w-md">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={footerLogo} alt="E-Summit Logo" className="h-12 w-auto" />
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

                    {/* Right Side: Explore and Contact */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16">
                        {/* Explore Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Explore</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/benefits" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                        BENEFITS
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                        HOW IT WORKS?
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonials" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                        TESTIMONIALS
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faqs" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                        FAQS
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Contact Us</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="mailto:esummit@iitr.ac.in" className="text-blue-200 hover:text-white transition-colors duration-200">
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
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-blue-200 mb-4 md:mb-0">
                        Made with <span className="text-red-500">❤</span> by Design & Tech Team
                    </p>
                    <p className="text-blue-200">
                        © 2024 E-Summit IIT Roorkee. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;