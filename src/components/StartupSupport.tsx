import React from 'react';

const StartupSupport: React.FC = () => {
    return (
        <section id="vvlf-startup-support" className="py-20 px-6 max-w-[1200px] mx-auto text-center bg-[#f9fafb]">
            <h2 className="font-playfair uppercase text-4xl font-bold mb-5 text-dark-text relative inline-block group">
                Startup Support
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary-blue transition-all duration-400 mt-2 block group-hover:w-[80%]"></span>
            </h2>
            <h3 className="font-lato text-xl font-normal mb-3 text-body-text">
                How VVLF Helps Startups Succeed
            </h3>
            <p className="font-lato text-xl font-normal mb-12 text-body-text">
                We provide holistic, founder-first incubation support:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
                {[
                    {
                        title: 'Infrastructure',
                        bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
                        items: ['Prototyping labs', 'Co-working and meeting spaces', 'Access to BVRIT research centers'],
                        delay: 0
                    },
                    {
                        title: 'Mentorship & Advisory',
                        bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
                        items: ['Mentors from academia and industry', 'Technical clinics & coaching', 'Personalized roadmaps'],
                        delay: 100
                    },
                    {
                        title: 'Funding Access',
                        bgImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop',
                        items: ['Linkages to grants', 'Investor connect programs', 'Seed & CSR funding facilitation'],
                        delay: 200
                    },
                    {
                        title: 'Collaborations & Branding',
                        bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
                        items: ['Government liaison for pilots', 'Media & expo showcasing', 'Digital identity & marketing'],
                        delay: 300
                    }
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-cover bg-center relative p-7 rounded-2xl text-left transition-all duration-300 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15)] group"
                        style={{ backgroundImage: `url(${card.bgImage})` }}
                        data-aos="fade-up"
                        data-aos-delay={card.delay}
                    >
                        {/* Stronger overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-white/75 z-0 transition-opacity duration-300 group-hover:bg-gradient-to-br group-hover:from-white/90 group-hover:to-white/80"></div>

                        <h4 className="relative z-[2] font-playfair text-2xl font-bold mb-4 text-dark-text">
                            {card.title}
                        </h4>
                        <ul className="relative z-[2] font-lato font-medium pl-[22px] text-[16px] leading-[1.8] text-body-text list-disc">
                            {card.items.map((item, i) => (
                                <li key={i} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StartupSupport;
