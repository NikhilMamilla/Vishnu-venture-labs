import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TeamMember {
    name: string;
    title: string;
    image: string;
    linkedin?: string;
}

const boardMembers: TeamMember[] = [
    {
        name: 'Shri R. Rajagopal',
        title: 'Vice Chairman',
        image: '/images_vvlf/2.jpg',
    },
    {
        name: 'Shri K. Aditya Vissam',
        title: 'Secretary',
        image: '/images_vvlf/1.jpg',
    },
    {
        name: 'Dr. K. Lakshmi Prasad',
        title: 'Director',
        image: '/images_vvlf/3.jpg',
    },
    {
        name: 'Dr. Sanjay Dubey',
        title: 'Principal',
        image: '/images_vvlf/4.jpg',
    },
];

const teamMembers: TeamMember[] = [
    {
        name: 'Dr. M. K. Kaushik',
        title: 'Director',
        image: '/images_vvlf/5.jpg',
        linkedin: 'https://www.linkedin.com/in/dr-m-k-kaushik-a6580b33/',
    },
    {
        name: 'Rohith Sirpa',
        title: 'Manager',
        image: '/images_vvlf/7.jpg',
        linkedin: 'https://www.linkedin.com/in/rohith-sirpa-539b0b97/',
    },
];

const Team: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="font-lato">
            {/* Hero Section */}
            <div
                className="relative w-full h-[65vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images_vvlf/vvlf6.jpeg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-white text-5xl font-bold font-playfair" data-aos="fade-up">
                        OUR TEAM
                    </h1>
                </div>
            </div>

            {/* Board of Directors Section */}
            <section className="py-16 px-5 text-center bg-white">
                <h2 className="text-4xl font-bold font-playfair text-[#222] mb-12 uppercase inline-block relative group" data-aos="fade-up">
                    Board of Directors
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5999E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </h2>

                <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                    {boardMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-60 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/240x240?text=No+Image';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold font-playfair text-[#111] mb-1">{member.name}</h3>
                                <p className="text-sm font-medium text-[#5999E1] uppercase tracking-wider">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 px-5 text-center bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
                <h2 className="text-4xl font-bold font-playfair text-[#222] mb-12 uppercase inline-block relative group" data-aos="fade-up">
                    Our Team
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5999E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </h2>

                <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/280x280?text=No+Image';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold font-playfair text-[#111] mb-2">{member.name}</h3>
                                <div className="flex justify-center items-center gap-2">
                                    <p className="text-sm font-medium text-[#5999E1] uppercase tracking-wider">{member.title}</p>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-[#0077b5] transition-colors duration-300 transform hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Team;
