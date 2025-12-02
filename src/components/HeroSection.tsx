import React from 'react';

const HeroSection: React.FC = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-vvlf');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                    <button
                        onClick={scrollToAbout}
                        className="mt-10 group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-primary-blue rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue animate-[fadeInUp_1s_ease-out_0.6s_both]"
                    >
                        Know More
                        <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </button>
                </section>
            </div>
        </div>
    );
};

export default HeroSection;
