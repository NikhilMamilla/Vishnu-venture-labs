import React from 'react';

const StatsSection: React.FC = () => {
    const stats = [
        {
            value: "6+",
            label: "Total startups",
            sublabel: "incorporated"
        },
        {
            value: "5+",
            label: "Programs",
            sublabel: ""
        },
        {
            value: "10+",
            label: "Pre incubatees",
            sublabel: ""
        }
    ];

    return (
        <section className="relative z-30 py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl shadow-xl flex flex-col md:flex-row justify-around items-center py-8 md:py-12 px-6 border border-gray-100 animate-[fadeInUp_1s_ease-out_0.9s_both]">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4">
                        <span className="text-5xl md:text-6xl font-bold text-[#3B82F6] font-header mb-2">
                            {stat.value}
                        </span>
                        <div className="flex flex-col text-gray-900 font-semibold text-lg leading-tight font-sans">
                            <span>{stat.label}</span>
                            {stat.sublabel && <span>{stat.sublabel}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
