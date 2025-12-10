import { useState } from 'react';
import footerBg from '../../assets/bg/footer.png';
import testimonialsFaqBg from '../../assets/bg/testimonials_faq.png';
import MinusIcon from '../../assets/icons/minus.svg';
import PlusIcon from '../../assets/icons/plus.svg';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'The question goes here, try to keep it in 1 line',
            answer: 'The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl',
        },
        {
            question: 'The question goes here, try to keep it in 1 line',
            answer: 'The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl',
        },
        {
            question: 'The question goes here, try to keep it in 1 line',
            answer: 'The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl',
        },
        {
            question: 'The question goes here, try to keep it in 1 line',
            answer: 'The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl',
        },
        {
            question: 'The question goes here, try to keep it in 1 line',
            answer: 'The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl',
        },
        {
            question: 'The question goes here, try to keep it in 1 line',
            answer: 'The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            className="relative min-h-screen pt-0 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{
                backgroundImage: `url(${testimonialsFaqBg}), url(${footerBg})`,
                backgroundPosition: 'center bottom, center bottom',
                backgroundSize: '100% 200%, cover',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundColor: '#0a1628',
            }}
        >
            {/* Decorative stars */}
            <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* SECTION BADGE */}
                <button className="border-2 border-blue-400 text-blue-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                    ✱ NEED HELP
                </button>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Left Side */}
                    <div className="text-white flex flex-col h-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                            Frequently asked <span className="text-blue-400">Questions</span>
                        </h2>

                        <p className="text-gray-300 mb-6 sm:mb-10 text-base sm:text-lg leading-relaxed">
                            Kuch bhi chutiya sa ye jagah bharne k liye likh dena, jisko 2 line me likh sake aaaaaaaaa
                        </p>

                        {/* CTA Card */}
                        <div className="bg-blue-950/05 border border-blue-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md mt-6 sm:mt-10 lg:mt-auto">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Still have a Question?</h3>
                            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                Kuch bhi chutiya sa ye jagah bharne k liye likh dena, jisko 2 line me likh sake
                            </p>
                            <button className="bg-[linear-gradient(90deg,#00C0FF_0%,#5558FF_100%)] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 w-full sm:w-auto">
                                ASK A QUESTION
                            </button>
                        </div>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? 'bg-[linear-gradient(90deg,#00C0FF_0%,#5558FF_100%)] border border-transparent shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                                            : 'bg-blue-950/10 border border-blue-800 backdrop-blur-sm'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
                                    >
                                        <span className="font-bold text-white text-sm sm:text-base lg:text-lg pr-4">
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0">
                                            <img
                                                src={isOpen ? MinusIcon : PlusIcon}
                                                alt={isOpen ? 'Close' : 'Open'}
                                                className="w-5 h-5 sm:w-6 sm:h-6"
                                            />
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                                            <p className="text-white text-sm sm:text-base leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;