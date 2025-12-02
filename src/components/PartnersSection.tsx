import React, { useEffect, useRef } from 'react';

const PartnersSection: React.FC = () => {
    const partners = [
        { src: "/images_vvlf/bvrit-logo.png", alt: "BVRIT" },
        { src: "/images_vvlf/kaiteki-logo-Copy.jpg", alt: "Kaiteki" },
        { src: "/images_vvlf/TGIC-logo.png", alt: "TGIC" },
        { src: "/images_vvlf/tgtf-logo-Copy.jpg", alt: "TGTF" },
    ];

    return (
        <div className="bg-[#f9fafb] py-20 px-6 text-center overflow-hidden">
            <h2 className="font-playfair uppercase text-4xl text-dark-text mb-16 font-bold inline-block relative cursor-pointer transition-colors duration-300 hover:text-dark-text group">
                Ecosystem Partners
                <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-1 bg-primary-blue transition-all duration-300 group-hover:w-[80%]"></span>
            </h2>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-[scrollLeft_30s_linear_infinite] hover:pause">
                    {/* First set of logos */}
                    <div className="flex items-center gap-16 px-8">
                        {partners.map((partner, index) => (
                            <img
                                key={`p1-${index}`}
                                src={partner.src}
                                alt={partner.alt}
                                className="h-[100px] w-auto object-contain transition-all duration-300 hover:scale-110"
                            />
                        ))}
                    </div>
                    {/* Second set of logos for seamless loop */}
                    <div className="flex items-center gap-16 px-8">
                        {partners.map((partner, index) => (
                            <img
                                key={`p2-${index}`}
                                src={partner.src}
                                alt={partner.alt}
                                className="h-[100px] w-auto object-contain transition-all duration-300 hover:scale-110"
                            />
                        ))}
                    </div>
                    {/* Third set of logos for extra safety on wide screens */}
                    <div className="flex items-center gap-16 px-8">
                        {partners.map((partner, index) => (
                            <img
                                key={`p3-${index}`}
                                src={partner.src}
                                alt={partner.alt}
                                className="h-[100px] w-auto object-contain transition-all duration-300 hover:scale-110"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default PartnersSection;
