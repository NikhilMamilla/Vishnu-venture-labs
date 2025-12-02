import React from 'react';

const FocusAreas: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gray-50 text-center">
            <h2 className="font-playfair uppercase text-4xl font-bold mb-5 text-dark-text relative inline-block">
                Key Thrust Areas
            </h2>

            <p className="font-lato text-xl font-normal text-dark-text -mt-2.5 mb-10 leading-relaxed" data-aos="fade-up">
                {['Fueling', 'innovation', 'through', 'focused', 'domain', 'leadership.'].map((word, index) => (
                    <span
                        key={index}
                        className="inline-block opacity-0 translate-y-5 animate-[fadeInUp_0.6s_forwards]"
                        style={{ animationDelay: `${0.1 + index * 0.2}s` }}
                    >
                        {word}&nbsp;
                    </span>
                ))}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1100px] mx-auto mt-10">
                {[
                    { img: '/images_vvlf/7.png', title: 'Deep Tech (AI, IoT, Robotics)', delay: 100 },
                    { img: '/images_vvlf/6.png', title: 'Semiconductors', delay: 200 },
                    { img: '/images_vvlf/9.png', title: 'Assistive Technology', delay: 0 },
                    { img: '/images_vvlf/8.png', title: 'Sustainability & Green Tech', delay: 300 },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-[30px_20px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col items-center transition-all duration-350 relative overflow-hidden hover:-translate-y-3 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group"
                        data-aos="fade-up"
                        data-aos-delay={item.delay}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-[140px] h-[140px] object-cover rounded-2xl mb-[18px] z-[1] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-4 border-white transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className="font-lato text-xl font-bold text-dark-text z-[1] text-center leading-snug px-2.5">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FocusAreas;
