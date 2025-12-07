import React from 'react';

const HeroSection: React.FC = () => {


    return (
        <div className="relative flex w-full items-center justify-center bg-white overflow-x-hidden">
            <div className="relative z-20 w-full">
                <section className="min-h-screen pt-18 md:pt-30 py-8 sm:py-12 flex flex-col items-center justify-center text-center px-8 sm:px-6">
                    {/* Logo */}
                    <img
                        src="/images_vvlf/logo.png"
                        alt="VVLF Logo"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 object-contain drop-shadow-xl animate-[fadeInUp_1s_ease-out]"
                    />

                    {/* Main Heading */}
                    <h1 className="text-4xl pb-1 sm:text-5xl md:text-7xl font-extrabold text-center leading-[1.45] mb-6 font-header">
                        <span className="block bg-gradient-to-b from-primary-blue to-custom-sky bg-clip-text text-transparent drop-shadow-md">
                            Vishnu Venture Labs
                        </span>
                        <span className="block bg-gradient-to-b from-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-md">
                            Foundation
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p className="mt-2 max-w-2xl text-lg sm:text-lg md:text-lg font-semibold tracking-wide animate-[fadeInUp_1s_ease-out_0.3s_both] text-accent-orange drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                        Turning Ideas into Impactful Ventures
                    </p>

                    {/* CTA Button */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-primary-blue rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                        >
                            Build With Us
                            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1lTRNqYU2juupEFF9oCyXSckRBYr8hmsm/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-primary-blue transition-all duration-300 bg-white border-2 border-primary-blue rounded-full hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                        >
                            View Brochure
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HeroSection;
