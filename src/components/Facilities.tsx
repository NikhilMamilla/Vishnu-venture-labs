import React, { useEffect } from 'react';
import {
    Laptop,
    Users,
    FileText,
    BadgeDollarSign,
    MessageSquare,
    Code2,
    Cloud,
    Lightbulb
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const facilitiesData = [
    {
        icon: <Laptop size={40} />,
        title: "Co-Working Space",
        description: "Modern, ergonomic workspaces designed for collaboration and productivity.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: <Users size={40} />,
        title: "Mentorship",
        description: "Access to industry experts and academic leaders for guidance.",
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        icon: <FileText size={40} />,
        title: "IP Support",
        description: "Comprehensive assistance for patent filing and intellectual property protection.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: <BadgeDollarSign size={40} />,
        title: "Funding",
        description: "Opportunities for seed funding, grants, and investor connections.",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: <MessageSquare size={40} />,
        title: "Networking Events",
        description: "Regular meetups, workshops, and hackathons to connect with peers.",
        color: "bg-orange-100 text-orange-600"
    },
    {
        icon: <Code2 size={40} />,
        title: "Software Tools",
        description: "Access to premium software licenses and development tools.",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: <Cloud size={40} />,
        title: "Tech Infrastructure",
        description: "High-speed internet, cloud credits, and server access.",
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        icon: <Lightbulb size={40} />,
        title: "Maker Lab",
        description: "State-of-the-art fabrication lab for prototyping and hardware development.",
        color: "bg-yellow-100 text-yellow-600"
    }
];

const Facilities: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-[120px] pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="font-playfair text-5xl font-bold text-dark-text mb-6 relative inline-block">
                        Our Facilities
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-primary-blue rounded-full"></span>
                    </h1>
                    <p className="font-lato text-xl text-body-text max-w-2xl mx-auto">
                        World-class infrastructure and resources to help you build, scale, and succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilitiesData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                {item.icon}
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-dark-text mb-3 text-center group-hover:text-primary-blue transition-colors">
                                {item.title}
                            </h3>
                            <p className="font-lato text-body-text text-center leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
