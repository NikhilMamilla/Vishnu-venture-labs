import React from 'react';

const AboutVVLF: React.FC = () => {
    return (
        <section className="font-lato text-body-text py-20 px-6 bg-[#f9fafb]">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="about-vvlf-image-content">
                    <img
                        src="/images_vvlf/SDG.png"
                        alt="UN Sustainable Development Goals"
                        className="w-full rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="group">
                    <h2 className="font-playfair uppercase text-dark-text text-4xl font-bold relative pb-3 inline-block">
                        About VVLF
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#2563eb] transition-all duration-400 group-hover:w-1/2"></span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-justify">
                        Vishnu Venture Labs Foundation (VVLF), the incubation center of B V Raju Institute of Technology Narsapur, is a not-for-profit Section 8 company dedicated to empowering early-stage startups, innovators, and researchers through world-class infrastructure, mentorship, and access to industry networks. VVLF fosters a structured ecosystem that supports idea validation, prototyping, business modeling, and scale-up assistance, enabling founders to transform purpose-driven innovations into scalable, high-impact ventures.                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutVVLF;
