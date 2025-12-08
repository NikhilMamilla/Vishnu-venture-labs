import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Startups: React.FC = () => {
    useEffect(() => {
        // Init AOS for Hero animation only
        AOS.init({ duration: 500, once: true });
    }, []);

    const startupsData = [
        {
            name: "OLynk.AI LLP",
            websiteLink: "https://olynkai.com",
            websiteDisplay: "olynkai.com",
            description: "OLynk is an AI-powered operations advisor designed for Indian D2C brands with annual revenues of ₹2–10Cr. Unlike traditional dashboards or fragmented tools, OLynk acts like a virtual COO, silently monitoring operations, predicting short-term issues (like stockouts or fulfillment delays), and automatically prescribing or executing the right actions across platforms like Shopify, WhatsApp, Razorpay, and Shiprocket.",
            image: "/images_vvlf/olynk.jpg",
            altText: "Olynk.AI LLP Logo"
        },
        {
            name: "Stud Entertainments",
            websiteLink: "",
            websiteDisplay: "",
            description: "Stud Entertainments is a filmmaking and tech driven startup building a new ecosystem where storytelling and technology coexist to deliver a true CinemaTech experience to audiences. We produce original and unique stories on screen that reflect creativity, craft, and conviction. In addition to that, we address real world challenges in the filmmaking process through practical tech driven solutions. Ultimately, Stud Entertainments is a space for creators and techies with passion and imaginative ideas, a place where innovation and cinematic expression come together.",
            image: "/images_vvlf/student_c_logo-scaled.png",
            altText: "Stud Entertainments Logo"
        },
        {
            name: "MXC Ignite LLP",
            websiteLink: "https://mentorxcommunity.com",
            websiteDisplay: "mentorxcommunity.com",
            description: "MXC is a student-led innovation ecosystem, dedicated to transforming students into confident, startup-ready professionals. As a catalytic platform, MXC connects students with founders, CXOs, incubators, and global mentors to provide real-world exposure, startup simulations, outcome-based workshops, Internship and job opportunities and project-driven learning. We don't just mentor we mobilize. From ideation to execution, MXC equips students to lead, build, and grow in the real world. Powered by purpose, driven by impact.",
            image: "/images_vvlf/mxc.jpg",
            altText: "MXC Ignite LLP Logo"
        },
        {
            name: "Nirvaha Wellness LLP",
            websiteLink: "https://nirvaha.org",
            websiteDisplay: "nirvaha.org",
            description: "Nirvaha is a wellness-tech startup blending ancient Indian wisdom with modern science and AI to create personalized emotional healing experiences. We’re on a mission to make mental wellness soulful, accessible, and impactful.",
            image: "/images_vvlf/nirvaha.jpg",
            altText: "Nirvaha Wellness LLP Logo"
        },
        {
            name: "Innovable Solutions",
            websiteLink: "",
            websiteDisplay: "",
            description: "Innovable Solutions is a social-impact startup developing inclusive, multi-sensory learning tools for children with intellectual and developmental disabilities. Their flagship innovation combines education and therapy to enhance cognitive, language, and functional skills through technology. Focused on accessibility and affordability, Innovable Solutions aims to bridge gaps in special education and promote independent living. The team is committed to scalable, indigenous innovation aligned with national priorities like SDG 4.",
            image: "/images_vvlf/Innovable.jpg",
            altText: "Innovable Solutions LLP Logo"
        },
        {
            name: "VIINDE Instruments LLP",
            websiteLink: "",
            websiteDisplay: "",
            description: "VIINDE Instruments delivers smart, efficient solutions tailored for dental practitioners. Their products, from ergonomic workstations to digital imaging tools, enhance workflow, safety, and precision. Designed with dentist input, they help reduce fatigue and improve outcomes. With a focus on technology and support, VIINDE is a trusted partner in dental care.",
            image: "/images_vvlf/VIINDE.jpg",
            altText: "VIINDE Instruments LLP Logo"
        }
    ];

    return (
        <div className="font-sans text-gray-800 bg-[#f8f9fa] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cyan-900">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-cyan-900/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/30 via-cyan-900/60 to-cyan-950/90"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center pb-32" data-aos="fade-down" data-aos-duration="1000">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                        Our <span className="text-cyan-200">Startups</span>
                    </h1>
                    <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                        Where Innovation Meets Opportunity
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

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-2 h-10 bg-primary-blue rounded-full"></div>
                    <h2 className="font-header text-4xl font-black text-[#ff8c8c] uppercase tracking-wider">
                        Incorporated Startups
                    </h2>
                </div>

                {/* Startups List */}
                <div className="flex flex-col gap-12">
                    {startupsData.map((startup) => (
                        <div key={startup.name} className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Logo Box */}
                            <div className="w-full md:w-[220px] md:h-[220px] flex-shrink-0 bg-[#fffdf5] rounded-3xl p-6 flex items-center justify-center shadow-sm">
                                <img
                                    src={startup.image}
                                    alt={startup.altText}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-grow pt-2">
                                <h3 className="text-3xl font-bold text-primary-blue mb-1 font-header">
                                    {startup.name}
                                </h3>
                                {startup.websiteLink && (
                                    <a
                                        href={startup.websiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ff8c8c] font-bold text-lg hover:underline mb-4 block"
                                    >
                                        {startup.websiteDisplay}
                                    </a>
                                )}
                                <p className={`font-sans text-gray-700 text-[1.05rem] leading-relaxed text-left md:text-justify ${!startup.websiteLink ? 'mt-3' : ''}`}>
                                    {startup.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Startups;
