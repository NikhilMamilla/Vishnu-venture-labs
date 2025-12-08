import React from 'react';

const Footer: React.FC = () => {
    // Campus data
    const campuses = [
        {
            name: 'Green Meadows',
            logo: 'https://bvrit.ac.in/wp-content/uploads/2023/04/green-meadows-sri-vishnu-logo.webp',
            link: 'http://www.srivishnu.edu.in/green-meadows-campus/',
            colleges: [
                { name: 'Shri Vishnu Engineering College for Women', link: 'http://svecw.edu.in/' },
                { name: 'Vishnu Institute of Technology', link: 'http://vishnu.edu.in/' },
                { name: 'Smt. B Seetha Polytechnic College', link: 'http://seethapoly.edu.in/' },
                { name: 'Vishnu Dental College & Hospital', link: 'http://vdc.edu.in/' },
                { name: 'Shri Vishnu College of Pharmacy', link: 'http://svcp.edu.in/' },
                { name: 'B.V.Raju Institute of Computer Education', link: 'http://bvrice.edu.in/' },
                { name: 'Vishnu School, Bhimavaram', link: 'http://vishnuschool.edu.in/' },
            ]
        },
        {
            name: 'Orchard Park',
            logo: 'https://bvrit.ac.in/wp-content/uploads/2023/04/orchard-park-sri-vishnu-logo.webp',
            link: 'http://www.srivishnu.edu.in/orchard-park/',
            colleges: [
                { name: 'B V Raju Institute of Technology', link: 'https://www.bvrit.ac.in/' },
                { name: 'Vishnu Institute of Pharmaceutical Education and Research', link: 'http://viper.ac.in/' },
                { name: 'Vishnu High School, Narsapur', link: 'http://vishnuhighschool.edu.in/' },
            ]
        },
        {
            name: 'Valley Vista',
            logo: 'https://bvrit.ac.in/wp-content/uploads/2023/04/valley-vista-sri-vishnu-logo.webp',
            link: 'http://www.srivishnu.edu.in/valley-vista/',
            colleges: [
                { name: 'BVRIT Hyderabad College of Engineering for Women', link: 'http://bvrithyderabad.edu.in/' },
            ]
        },
        {
            name: 'Lake View',
            logo: 'https://bvrit.ac.in/wp-content/uploads/2023/04/lake-view-sri-vishnu-logo.webp',
            link: 'http://www.srivishnu.edu.in/lake-view/',
            colleges: [
                { name: 'Vishnu Educational Development and Innovation Centre', link: 'http://vedic.edu.in/' },
            ]
        },
    ];



    return (
        <>
            <style>{`
        footer {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          margin: 0 !important;
          padding-bottom: 0 !important;
        }
        section#Footer {
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        body {
          border: none !important;
        }
        html {
          border: none !important;
        }
      `}</style>
            <footer className="bg-[#1e3a8a] text-white w-full border-0 m-0 outline-none" style={{ border: 'none', outline: 'none', boxShadow: 'none', margin: 0, paddingBottom: 0 }}>
                {/* Our Campuses Section */}
                <div className="w-full px-6 md:px-12 lg:px-16 py-12">
                    <h3 className="text-2xl font-bold mb-8 text-orange-500">
                        Our Campuses
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {campuses.map((campus, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex flex-col items-center mb-4">
                                    <a
                                        href={campus.link}
                                        rel="noopener noreferrer nofollow"
                                        target="_blank"
                                        className="mb-3"
                                    >
                                        <img
                                            src={campus.logo}
                                            alt={`${campus.name} logo`}
                                            className="w-28 h-28 object-contain"
                                        />
                                    </a>
                                    <h4 className="text-lg font-semibold text-center text-white">
                                        <a
                                            href={campus.link}
                                            rel="noopener noreferrer nofollow"
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            {campus.name}
                                        </a>
                                    </h4>
                                </div>
                                <ul className="space-y-2">
                                    {campus.colleges.map((college, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={college.link}
                                                rel="noopener noreferrer nofollow"
                                                target="_blank"
                                                className="text-sm text-white hover:underline block"
                                            >
                                                {college.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Separator Line */}
                <div className="w-full border-t border-[#8B6F47]"></div>

                {/* Logo and Institution Info Section */}
                <div className="w-full px-6 md:px-12 lg:px-16 py-8">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* Left Side - Logo */}
                        <div className="flex-shrink-0">
                            <div className="flex items-center gap-4">
                                <a href="/" className="block">
                                    <img
                                        src="/images_vvlf/vvlf_logo.png"
                                        alt="VVLF Logo"
                                        className="h-24 w-auto object-contain"
                                    />
                                </a>

                            </div>
                        </div>

                        {/* Right Side - Institution Name and Links */}
                        <div className="flex-1 lg:text-right">
                            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                                <a
                                    href="/"
                                    className="hover:underline"
                                >
                                    Vishnu Venture Labs Foundation
                                </a>
                            </h1>

                            {/* Quick Links Row 1 */}
                            <div className="flex flex-wrap justify-center lg:justify-end gap-2 mb-3 text-sm">
                                <a href="/" className="text-white hover:underline">Home</a>
                                <span className="text-white">|</span>
                                <a href="#" className="text-white hover:underline">Programs</a>
                                <span className="text-white">|</span>
                                <a href="/facilities" className="text-white hover:underline">Facilities</a>
                                <span className="text-white">|</span>
                                <a href="/startups" className="text-white hover:underline">Startups</a>
                            </div>

                            {/* Quick Links Row 2 */}
                            <div className="flex flex-wrap justify-center lg:justify-end gap-2 text-sm">
                                <a href="#" className="text-white hover:underline">Mentors</a>
                                <span className="text-white">|</span>
                                <a href="/team" className="text-white hover:underline">Team</a>
                                <span className="text-white">|</span>
                                <a href="#" className="text-white hover:underline">Events</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Separator Line */}
                <div className="w-full border-t border-[#8B6F47]"></div>

                {/* Copyright Section */}
                <div className="w-full px-6 md:px-12 lg:px-16 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
                        <p>© 2025 Vishnu Venture Labs Foundation - All rights reserved</p>
                        <a
                            href="https://www.srivishnu.edu.in/"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            className="hover:underline"
                        >
                            Vishnu Education Society
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
