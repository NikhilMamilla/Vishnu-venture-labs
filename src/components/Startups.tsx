import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Startups: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const startupsData = [
        {
            name: "Innovable Solutions LLP",
            description: "Innovable Solutions is a social-impact startup developing inclusive, multi-sensory learning tools for children with intellectual and developmental disabilities. Their flagship innovation combines education and therapy to enhance cognitive, language, and functional skills through technology. Focused on accessibility and affordability, Innovable Solutions aims to bridge gaps in special education and promote independent living. The team is committed to scalable, indigenous innovation aligned with national priorities like SDG 4.",
            image: "/images_vvlf/Innovable.jpg",
            altText: "Innovable Solutions LLP Logo",
            knowMoreLink: "#",
            linkedInLink: "#"
        },
        {
            name: "MXC Ignite LLP",
            description: "MXC Ignite is a deep-tech startup revolutionizing the semiconductor industry with its advanced IP cores and SoC solutions. Specializing in RISC-V architecture, MXC Ignite designs high-performance, energy-efficient processors tailored for IoT, automotive, and industrial automation. Their mission is to democratize chip design by providing customizable, scalable, and cost-effective semiconductor solutions. With a strong focus on R&D and indigenous manufacturing, MXC Ignite is positioning itself as a key player in the global semiconductor ecosystem, driving innovation and self-reliance.",
            image: "/images_vvlf/mxc.jpg",
            altText: "MXC Ignite LLP Logo",
            knowMoreLink: "#",
            linkedInLink: "#"
        },
        {
            name: "Nirvaha Wellness LLP",
            description: "Nirvaha is a wellness-tech startup blending ancient Indian wisdom with modern science and AI to create personalized emotional healing experiences. We’re on a mission to make mental wellness soulful, accessible, and impactful.",
            image: "/images_vvlf/nirvaha.jpg",
            altText: "Nirvaha Wellness LLP Logo",
            knowMoreLink: "#",
            linkedInLink: "https://www.linkedin.com/company/soulverse23/"
        },
        {
            name: "Olynk.AI LLP",
            description: "OLynk is an AI-powered operations advisor designed for Indian D2C brands with annual revenues of ₹2–10Cr. Unlike traditional dashboards or fragmented tools, OLynk acts like a virtual COO, silently monitoring operations, predicting short-term issues (like stockouts or fulfillment delays), and automatically prescribing or executing the right actions across platforms like Shopify, WhatsApp, Razorpay, and Shiprocket.",
            image: "/images_vvlf/olynk.jpg",
            altText: "Olynk.AI LLP Logo",
            knowMoreLink: "#",
            linkedInLink: "https://www.linkedin.com/company/olynkai/"
        },
        {
            name: "Stud Entertainments",
            description: "Stud Entertainments is a filmmaking and tech driven startup building a new ecosystem where storytelling and technology coexist to deliver a true CinemaTech experience to audiences. We produce original and unique stories on screen that reflect creativity, craft, and conviction. In addition to that, we address real world challenges in the filmmaking process through practical tech driven solutions. Ultimately, Stud Entertainments is a space for creators and techies with passion and imaginative ideas, a place where innovation and cinematic expression come together.",
            image: "/images_vvlf/student_c_logo-scaled.png",
            altText: "Stud Entertainments Logo",
            knowMoreLink: "#",
            linkedInLink: "#"
        }
    ];

    return (
        <div className="font-lato text-body-text">
            {/* Hero Section */}
            <div
                className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('https://vishnuventurelabs.com/wp-content/uploads/2025/08/STARTUPS-1.png')" }}
            >
                {/* Optional Overlay if needed */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
                <h1 className="relative z-10 text-white font-playfair font-bold text-4xl md:text-6xl text-center drop-shadow-md">
                    {/* Fostering Deep Tech Communities - Optional Title */}
                </h1>
            </div>

            <main className="max-w-[1200px] mx-auto px-5 py-10 bg-[#FFFBF5]">
                {startupsData.map((startup, index) => (
                    <React.Fragment key={startup.name}>
                        <section className="flex flex-col md:flex-row items-center gap-10 my-16" data-aos="fade-up">
                            <div className="flex-1 max-w-full md:max-w-[300px]">
                                <img
                                    src={startup.image}
                                    alt={startup.altText}
                                    className="w-full h-auto rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl block"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://placehold.co/300x200/5999E1/FFFFFF?text=${encodeURIComponent(startup.name)}`;
                                    }}
                                />
                            </div>
                            <div className="flex-[2] text-center md:text-left">
                                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#222] mb-4 uppercase">
                                    {startup.name}
                                </h2>
                                <p className="font-lato text-lg text-[#222] leading-relaxed mb-6 text-justify">
                                    {startup.description}
                                </p>
                                <div className="flex items-center justify-center md:justify-start gap-5">
                                    <a href={startup.knowMoreLink} className="font-lato font-bold bg-[#0077B5] text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4a8ad8] no-underline mt-2">
                                        Know More
                                    </a>
                                    <a href={startup.linkedInLink} title="LinkedIn Profile" className="text-[#5999E1] text-3xl transition-colors duration-300 hover:text-[#4a8ad8]">
                                        <img
                                            src="/images_vvlf/LI_logo.png"
                                            alt="LinkedIn"
                                            className="w-10 h-10 align-middle transition-opacity duration-300 hover:opacity-75"
                                        />
                                    </a>
                                </div>
                            </div>
                        </section>
                        {index < startupsData.length - 1 && (
                            <hr className="border-0 h-px bg-[#ddd] max-w-[1200px] mx-auto my-10" />
                        )}
                    </React.Fragment>
                ))}
            </main>
        </div>
    );
};

export default Startups;
