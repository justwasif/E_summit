import { useState } from 'react';
import footerBg from '../../assets/bg/footer.png';
import testimonialsFaqBg from '../../assets/bg/testimonials_faq.png';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "The question goes here, try to keep it in 1 line",
            answer: "The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl"
        },
        {
            question: "The question goes here, try to keep it in 1 line",
            answer: "The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl"
        },
        {
            question: "The question goes here, try to keep it in 1 line",
            answer: "The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl"
        },
        {
            question: "The question goes here, try to keep it in 1 line",
            answer: "The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl"
        },
        {
            question: "The question goes here, try to keep it in 1 line",
            answer: "The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl"
        },
        {
            question: "The question goes here, try to keep it in 1 line",
            answer: "The answer goes in this line where max it has to take sjdbjkrbsdfjkb aosficjkzmdftkxjdrfk v tkzsjdoidffinzxm, kl"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            className="relative min-h-screen pt-0 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden"
            style={{
                backgroundImage: `url(${testimonialsFaqBg}), url(${footerBg})`,
                backgroundPosition: 'center bottom, center bottom',
                backgroundSize: '100% 200%, cover',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundColor: '#0a1628'
            }}
        >
            {/* Decorative stars */}
            <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/4 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Title and CTA */}
                    <div className="text-white">
                        <button className="border-2 border-blue-400 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                            ✱ NEED HELP
                        </button>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Frequently asked <span className="text-blue-400">Questions</span>
                        </h2>

                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Kuch bhi chutiya sa ye jagah bharne k liye likh dena, jisko 2 line me likh sake
                        </p>

                        <div className="bg-blue-950/50 border border-blue-800 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-3">Still have a Question?</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Kuch bhi chutiya sa ye jagah bharne k liye likh dena, jisko 2 line me likh sake
                            </p>
                            <button className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300">
                                ASK A QUESTION
                            </button>
                        </div>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? 'bg-cyan-400 border-cyan-400'
                                        : 'bg-blue-950/30 border-blue-800 backdrop-blur-sm'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-4 text-left"
                                >
                  <span
                      className={`font-semibold ${
                          openIndex === index ? 'text-gray-900' : 'text-white'
                      }`}
                  >
                    {faq.question}
                  </span>
                                    <div
                                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ml-4 ${
                                            openIndex === index
                                                ? 'bg-white text-cyan-400'
                                                : 'bg-blue-800 text-white'
                                        }`}
                                    >
                                        {openIndex === index ? '−' : '+'}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="px-4 pb-4">
                                        <p className="text-gray-900 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;