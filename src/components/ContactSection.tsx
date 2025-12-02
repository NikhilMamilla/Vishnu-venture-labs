import React from 'react';
import { MapPin, Phone, Mail, Send, Instagram, Linkedin, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-white font-lato" id="contact">
            <div className="py-16 px-6">
                <div className="max-w-7xl mx-auto">


                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Left Column: Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <p className="text-primary-blue text-sm font-semibold tracking-wider mb-2 uppercase">
                                Get in Touch
                            </p>
                            <h2 className="font-playfair text-5xl font-bold mb-6 text-dark-text">
                                Contact.
                            </h2>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-dark-text font-medium mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-dark-text font-medium mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-dark-text font-medium mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Type your message here..."
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group px-6 py-3 border-2 border-primary-blue text-primary-blue font-semibold rounded-full hover:bg-primary-blue hover:text-white transition-all duration-300 flex items-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Contact Info - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Address Card */}
                            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-100 hover:border-primary-blue transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-text mb-2 text-lg">Visit Us</h4>
                                        <p className="text-body-text text-sm leading-relaxed">
                                            Vishnu Venture Labs Foundation<br />
                                            Vishnupur, Narsapur, Tuljaraopet,<br />
                                            Telangana 502313
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-4">
                                <div className="flex items-center gap-4 group cursor-pointer hover:bg-blue-50 p-3 rounded-lg transition-colors duration-300">
                                    <div className="w-10 h-10 bg-blue-50 group-hover:bg-primary-blue rounded-lg flex items-center justify-center transition-colors duration-300">
                                        <Phone className="w-5 h-5 text-primary-blue group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Call Us</p>
                                        <p className="text-dark-text font-semibold">+91 XXX XXX XXXX</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer hover:bg-blue-50 p-3 rounded-lg transition-colors duration-300">
                                    <div className="w-10 h-10 bg-blue-50 group-hover:bg-primary-blue rounded-lg flex items-center justify-center transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-primary-blue group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Email Us</p>
                                        <p className="text-dark-text font-semibold">contact@vvlf.org</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                                <h4 className="font-bold text-dark-text mb-4 text-center text-lg">Connect With Us</h4>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="https://www.instagram.com/vishnu_venture_labs_foundation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:scale-110 transition-transform duration-300 shadow-md"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0A66C2] hover:scale-110 transition-transform duration-300 shadow-md"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/16rUV3afEX/?mibextid=qi2Omg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#1877F2] hover:scale-110 transition-transform duration-300 shadow-md"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Width Map */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d950.1030415028296!2d78.2564273!3d17.7252083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc0b004c3862eb%3A0x4897c6f2b7632512!2sVishnu%20Venture%20Labs%20Foundation%20(VVLF)!5e0!3m2!1sen!2sin!4v1753250536180!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[450px] border-0 rounded-[15px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
