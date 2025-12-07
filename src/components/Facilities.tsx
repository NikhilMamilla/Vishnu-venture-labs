import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const facilitiesData = [
    {
        image: "/images_vvlf/facilities/coworking.jpg",
        title: "Co-Working Space",
        description: "Modern, ergonomic workspaces designed for collaboration and productivity."
    },
    {
        image: "/images_vvlf/facilities/mentorship.jpg",
        title: "Mentorship",
        description: "Access to industry experts and academic leaders for guidance."
    },
    {
        image: "/images_vvlf/facilities/ip_support.jpg",
        title: "IP Support",
        description: "Comprehensive assistance for patent filing and intellectual property protection."
    },
    {
        image: "/images_vvlf/facilities/funding.jpg",
        title: "Funding",
        description: "Opportunities for seed funding, grants, and investor connections."
    },
    {
        image: "/images_vvlf/facilities/networking.jpg",
        title: "Networking Events",
        description: "Regular meetups, workshops, and hackathons to connect with peers."
    },
    {
        image: "/images_vvlf/facilities/software.jpg",
        title: "Software Tools",
        description: "Access to premium software licenses and development tools."
    },
    {
        image: "/images_vvlf/facilities/infrastructure.jpg",
        title: "Tech Infrastructure",
        description: "High-speed internet, cloud credits, and server access."
    },
    {
        image: "/images_vvlf/facilities/maker_lab.jpg",
        title: "Maker Lab",
        description: "State-of-the-art fabrication lab for prototyping and hardware development."
    }
];

const Facilities: React.FC = () => {
    useEffect(() => {
        // Init AOS for Hero animation only
        AOS.init({ duration: 500, once: true });
    }, []);

    return (
        <div className="font-lato text-gray-800 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cyan-900">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-cyan-900/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/30 via-cyan-900/60 to-cyan-950/90"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center pb-32" data-aos="fade-down" data-aos-duration="1000">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                        Our <span className="text-cyan-200">Facilities</span>
                    </h1>
                    <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                        World-class infrastructure and resources to help you build, scale, and succeed.
                    </p>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0 z-0">
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                    >
                        <path
                            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>
            </section>

            {/* Content Sections: Why Choose VVLF & What We Offer */}
            <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
                <div>
                    <h2 className="font-header text-3xl font-bold text-dark-text mb-6 uppercase tracking-wide border-l-4 border-primary-blue pl-4">
                        Why Choose VVLF
                    </h2>
                    <p className="font-sans text-lg text-body-text leading-relaxed text-justify">
                        Vishnu Venture Labs Foundation stands out because of its strong backing from BVRIT Narsapur and direct access to industry experts, corporate networks, and government liaisons. We provide end-to-end startup support under one roof—from idea validation to scaling and investor connects—ensuring a seamless growth journey for entrepreneurs. Our startups benefit from hands-on mentorship, personalized guidance from mentors, domain experts, and successful entrepreneurs. With state-of-the-art prototyping labs, research centers, and opportunities for interdisciplinary collaborations, VVLF is uniquely positioned to foster impact-driven innovations. Cohorts, peer learning, and networking opportunities further create a supportive and vibrant entrepreneurial community.
                    </p>
                </div>

                <div>
                    <h2 className="font-header text-3xl font-bold text-dark-text mb-6 uppercase tracking-wide border-l-4 border-cyan-400 pl-4">
                        What We Offer
                    </h2>
                    <p className="font-sans text-lg text-body-text leading-relaxed text-justify">
                        We offer comprehensive startup support, including access to cutting-edge prototyping labs, co-working and meeting spaces, and BVRIT research centers. Our mentorship and advisory programs connect founders with a robust network of mentors from academia and industry, providing technical clinics, business coaching, and personalized roadmaps for growth. We also facilitate funding access by linking startups to grants, investor connect programs, and seed or CSR funding opportunities. Additionally, VVLF supports collaborations and branding through government liaison for pilots and approvals, showcasing opportunities at expos and media, and assistance in building a strong digital identity and marketing presence.
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <div className="max-w-[1400px] mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilitiesData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
                        >
                            {/* Image Section with Overlay Title */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    width="600"
                                    height="400"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <h3 className="absolute bottom-4 left-4 z-20 font-playfair text-2xl font-bold text-white tracking-wide">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description Section */}
                            <div className="p-6 flex-grow">
                                <p className="font-lato text-body-text text-[0.95rem] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
