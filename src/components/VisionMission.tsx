import React from 'react';

const VisionMission: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Vision Box */}
                <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300 flex-shrink-0">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                alt="Vision"
                                className="w-10 h-10 object-contain"
                            />
                        </div>

                        <h2 className="font-playfair text-3xl font-bold text-dark-text relative inline-block">
                            Our Vision
                        </h2>
                    </div>

                    <p className="font-lato text-lg text-body-text leading-relaxed">
                        A world-class innovation ecosystem brings together startups, researchers, investors, and government bodies, all collaborating closely. It provides essential support like funding, mentorship, infrastructure, and networks, enabling inclusive and sustainable innovations. This environment helps turn ideas into impactful solutions that support economic growth and the UN Sustainable Development Goals.                    </p>
                </div>

                {/* Mission Box */}
                <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300 flex-shrink-0">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2920/2920232.png"
                                alt="Mission"
                                className="w-10 h-10 object-contain"
                            />
                        </div>

                        <h2 className="font-playfair text-3xl font-bold text-dark-text relative inline-block">
                            Our Mission
                        </h2>
                    </div>

                    <ul className="space-y-4 font-lato text-lg text-body-text">
                        {[
                            "To incubate and accelerate early-stage, tech-led startups working in critical sectors.",
                            "To foster cross-sector collaboration between academia, industry, and government.",
                            "To equip young innovators with the skills, tools, and networks to build ventures that matter.",
                            "To catalyze solutions aligned with SDGs and national innovation priorities."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="mt-2 w-2 h-2 bg-primary-blue rounded-full flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
