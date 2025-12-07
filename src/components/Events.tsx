import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { eventsData } from '../data/eventsData';

const Timeline = ({ data }: { data: any[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans px-4 sm:px-6" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="relative pb-32 min-h-[50vh]">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                            {/* Timeline Marker & Date (Left/Sticky) */}
                            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-primary-blue border border-blue-200 p-2" />
                                </div>
                                {/* Date/Timeline on desktop */}
                                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-gray-400 font-playfair">
                                    {item.timeline.replace('Posted ', '')}
                                </h3>
                            </div>

                            {/* Content (Right) */}
                            <div className="relative pl-16 pr-4 md:pl-4 w-full">
                                {/* Mobile Date */}
                                <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-gray-500 font-playfair">
                                    {item.timeline.replace('Posted ', '')}
                                </h3>

                                {/* Event Card */}
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                    {/* Image Section */}
                                    <div className="h-64 sm:h-80 overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-6 text-white text-sm font-medium">
                                                {item.location && <p className="flex items-center gap-2 mb-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {item.location}</p>}
                                                {item.engagement && <p className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> {item.engagement}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        {/* Tags / Type */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.type && <span className="px-3 py-1 bg-blue-50 text-primary-blue text-xs font-bold uppercase rounded-full tracking-wide">{item.type}</span>}
                                            {item.host && <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase rounded-full tracking-wide">Host: {item.host}</span>}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-header leading-tight group-hover:text-primary-blue transition-colors">{item.title}</h3>

                                        {item.date && (
                                            <p className="text-sm font-bold text-accent-orange mb-4 flex items-center gap-2 uppercase tracking-wider">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                {item.date}
                                            </p>
                                        )}

                                        {/* Description */}
                                        <div className="text-gray-600 mb-6 leading-relaxed">
                                            <p>{item.description}</p>

                                            {/* Program Details */}
                                            {item.programDetails && (
                                                <div className="mt-4 bg-gray-50 p-4 rounded-xl text-sm">
                                                    {item.programDetails.milestones && (
                                                        <div className="mb-3">
                                                            <strong className="block text-gray-900 mb-1">Key Milestones:</strong>
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {item.programDetails.milestones.map((m: any, i: number) => (
                                                                    <li key={i}>{m.name}: <span className="text-gray-700">{m.date}</span></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {item.programDetails.focusAreas && (
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {item.programDetails.focusAreas.map((area: string, i: number) => (
                                                                <span key={i} className="inline-block px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700">{area}</span>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {item.programDetails.offerings && (
                                                        <div className="space-y-1">
                                                            {item.programDetails.offerings.map((offering: string, i: number) => (
                                                                <p key={i} className="text-gray-700 font-medium">{offering}</p>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {item.achievement && (
                                                <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-md">
                                                    <p className="text-sm text-green-800 font-bold">🏆 {item.achievement}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Collaborators & Contacts (Small text) */}
                                        <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                                            {item.collaborators && (
                                                <p className="text-xs text-gray-500">
                                                    <span className="font-bold text-gray-700">Collaborators:</span> {item.collaborators.join(', ')}
                                                </p>
                                            )}
                                            {item.contacts && (
                                                <p className="text-xs text-gray-500">
                                                    <span className="font-bold text-gray-700">Key Contacts:</span> {item.contacts.join(', ')}
                                                </p>
                                            )}
                                        </div>

                                        {/* Hashtags */}
                                        {item.hashtags && item.hashtags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {item.hashtags.map((tag: string, i: number) => (
                                                    <span key={i} className="px-2 py-1 text-[10px] uppercase font-bold text-gray-400 hover:text-primary-blue hover:bg-blue-50 rounded transition-colors cursor-default">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Timeline Line */}
                    <div
                        style={{ height: height + "px", maxHeight: "100%" }}
                        className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                    >
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary-blue via-cyan-400 to-transparent from-[0%] via-[10%] rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Events: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

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
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                        Our <span className="text-cyan-200">Events</span>
                    </h1>
                    <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                        Measuring Impact Through Action
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
                            fill="#f8f9fa"
                        />
                    </svg>
                </div>
            </section>

            {/* Timeline Section */}
            <main className="py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                    <h2 className="font-header text-4xl font-black text-[#ff8c8c] uppercase tracking-wider inline-block">
                        Previous Events
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        A glimpse into the impactful events hosted by VVLF over the past year.
                    </p>
                </div>

                <Timeline data={eventsData} />
            </main>
        </div>
    );
};

export default Events;
