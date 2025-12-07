import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Phone, Mail, Send, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
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
                        Contact <span className="text-cyan-200">Us</span>
                    </h1>
                    <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                        Get in Touch with Vishnu Venture Labs Foundation
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
            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left Column: Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-2 h-10 bg-primary-blue rounded-full"></div>
                            <h2 className="font-header text-4xl font-black text-[#ff8c8c] uppercase tracking-wider">
                                Send a Message
                            </h2>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input type="email" id="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <input type="text" id="subject" placeholder="How can we help?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea id="message" rows={6} placeholder="Type your message here..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="px-8 py-3 bg-primary-blue text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2 group">
                                Send Message
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Contact Details */}
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>
                                <h3 className="font-header text-2xl font-bold text-gray-800 uppercase">Contact Info</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-primary-blue">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Visit Us</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Vishnu Venture Labs Foundation<br />
                                            Vishnupur, Narsapur, Tuljaraopet,<br />
                                            Telangana 502313
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-primary-blue">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Call Us</h4>
                                        <p className="text-gray-600 font-medium">+91 7382101373</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-primary-blue">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Email Us</h4>
                                        <p className="text-gray-600 font-medium">rohith.s@bvrit.ac.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="bg-gradient-to-br from-[#002b36] to-[#004e64] rounded-3xl p-8 text-white">
                            <h3 className="font-header text-2xl font-bold mb-6">Connect With Us</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/vishnu_venture_labs_foundation/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://www.facebook.com/share/16rUV3afEX/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm">
                                    <Facebook className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d950.1030415028296!2d78.2564273!3d17.7252083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc0b004c3862eb%3A0x4897c6f2b7632512!2sVishnu%20Venture%20Labs%20Foundation%20(VVLF)!5e0!3m2!1sen!2sin!4v1753250536180!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>
            </main>
        </div>
    );
};

export default Contact;
