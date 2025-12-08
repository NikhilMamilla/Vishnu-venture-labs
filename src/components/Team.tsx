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
    }
];

const Team: React.FC = () => {
    useEffect(() => {
        // Init AOS for Hero animation
        AOS.init({ duration: 500, once: true });
    }, []);

    const MemberCard = ({ member }: { member: TeamMember }) => (
        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 w-full max-w-[280px]">
            {/* Image Container with Gradient Overlay */}
            <div className="relative h-[320px] overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x500/f3f4f6/1f2937?text=${encodeURIComponent(member.name)}`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Overlay Content (visible on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 bg-[#0077b5] rounded-full text-white hover:bg-white hover:text-[#0077b5] transition-colors mb-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Info Section */}
            <div className="p-6 text-center bg-white relative z-10 transition-colors duration-300 group-hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-primary-blue uppercase tracking-wider">{member.title}</p>
            </div>
        </div>
    );

    return (
        <div className="font-lato text-gray-800 bg-[#f8f9fa] min-h-screen">
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
                        Our <span className="text-cyan-200">Team</span>
                    </h1>
                    <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                        Dedicated to fostering innovation and entrepreneurship.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-blue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-transform shadow-lg hover:-translate-y-1"
                        >
                            Build With Us
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1lTRNqYU2juupEFF9oCyXSckRBYr8hmsm/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary-blue transition-all"
                        >
                            View Brochure
                        </a>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0 z-0">
                    <svg viewBox="0 0 1440 120" fill="none" className="w-full">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8f9fa" />
                    </svg>
                </div>
            </section>

            {/* Team Grid Section */}
            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex items-center gap-3 mb-16 justify-center">
                    <div className="w-2 h-10 bg-primary-blue rounded-full"></div>
                    <h2 className="font-header text-4xl font-black text-[#ff8c8c] uppercase tracking-wider">
                        Team
                    </h2>
                </div>

                <div className="flex flex-col gap-12 items-center">
                    {/* Row 1: Board Members */}
                    <div className="flex flex-wrap justify-center gap-8 w-full">
                        {boardMembers.map((member, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <MemberCard member={member} />
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Team Members */}
                    <div className="flex flex-wrap justify-center gap-8 w-full">
                        {teamMembers.map((member, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={(index + 4) * 100}>
                                <MemberCard member={member} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Team;
