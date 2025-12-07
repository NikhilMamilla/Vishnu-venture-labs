import React from 'react';

const VisionMission: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 px-6 relative overflow-hidden">
            {/* Background elements for premium feel */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px]"></div>
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-cyan-100 rounded-full blur-[80px]"></div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
                {/* Vision Box */}
                <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-500 flex-shrink-0 shadow-sm">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                alt="Vision"
                                className="w-9 h-9 object-contain opacity-80 group-hover:opacity-100 group-hover:invert transition-all duration-500"
                            />
                        </div>

                        <h2 className="font-header text-4xl font-bold text-dark-text relative inline-block tracking-tight">
                            Vision
                        </h2>
                    </div>

                    <p className="font-sans text-lg text-body-text leading-relaxed text-justify opacity-90">
                        Our vision is to build a world-class, purpose-driven innovation ecosystem that nurtures inclusive, sustainable, and deep-tech innovations. We aspire to be a catalyst for startups and innovators who aim to address pressing societal challenges while contributing to economic growth and the UN Sustainable Development Goals. VVLF envisions an environment where creativity meets cutting-edge technology, and bold ideas are transformed into meaningful, market-ready solutions with global relevance.
                    </p>
                </div>

                {/* Mission Box */}
                <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-500 flex-shrink-0 shadow-sm">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2920/2920232.png"
                                alt="Mission"
                                className="w-9 h-9 object-contain opacity-80 group-hover:opacity-100 group-hover:invert transition-all duration-500"
                            />
                        </div>

                        <h2 className="font-header text-4xl font-bold text-dark-text relative inline-block tracking-tight">
                            Mission
                        </h2>
                    </div>

                    <p className="font-sans text-lg text-body-text leading-relaxed text-justify opacity-90">
                        Our mission is to incubate and accelerate early-stage, tech-led startups while fostering collaboration between academia, industry, and government. VVLF equips young innovators with the skills, tools, and networks they need to thrive and catalyzes solutions aligned with both the SDGs and national innovation priorities. We aim to support the entire innovation journey—from idea conception to large-scale impact—by providing holistic support and guidance at every stage.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
