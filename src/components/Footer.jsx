import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Facebook, Phone, Download, Globe } from 'lucide-react';

const Footer = () => {
    const locations = [
        {
            name: "Head Office",
            address: "102, Kamla Vihar, Patna - 801503",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e1!3m2!1sen!2sin!4v1234567890"
        },
        {
            name: "Panchkula Office",
            address: "At- Sundra Ramgarh Chowk, Panchkula, Haryana",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.8534!3d30.6942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQxJzM5LjEiTiA3NsKwNTEnMTIuMiJF!5e1!3m2!1sen!2sin!4v1234567890"
        },
        {
            name: "Rohtak Office",
            address: "Hafed Chowk, Rohtak, Haryana - 124001",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.0!2d76.5890!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUzJzQzLjgiTiA3NsKwMzUnMjAuNCJF!5e1!3m2!1sen!2sin!4v1234567890"
        }
    ];

    return (
        <footer className="bg-navy text-silver pt-24 pb-12 px-6 border-t border-white/10" id="contact">
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/dslab_logo.png" alt="DS STEM LAB Logo" className="h-14 w-auto object-contain" />
                            <div>
                                <h3 className="font-display font-bold text-xl text-white">DS STEM LAB</h3>
                                <p className="text-xs text-silver/60 font-body">A Robotic & Research Lab | A.I. & Coding</p>
                            </div>
                        </div>
                        <h2 className="font-display font-black text-5xl md:text-6xl leading-[0.9] text-white/20 mb-8">
                            LET'S BUILD <br /> THE FUTURE.
                        </h2>

                        {/* Brochure Download */}
                        <a
                            href="/assets/DS Stem Lab Redesign.pdf"
                            download
                            className="inline-flex items-center gap-3 px-6 py-3 bg-accent-blue text-white font-body font-bold text-sm tracking-wider rounded-full hover:bg-white hover:text-navy transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <Download size={18} />
                            DOWNLOAD BROCHURE
                        </a>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-body font-bold text-accent-blue uppercase tracking-widest text-xs mb-6">Contact</h4>
                        <ul className="space-y-4 font-body text-sm text-silver/70">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0" />
                                <a href="mailto:ds.stemlab@gmail.com" className="hover:text-white transition-colors">ds.stemlab@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe size={18} className="shrink-0" />
                                <a href="https://www.dstemlab.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.dstemlab.co.in</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0" />
                                <a href="tel:+917004547034" className="hover:text-white transition-colors">+91 70045 47034</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0" />
                                <a href="tel:+919534527757" className="hover:text-white transition-colors">+91 95345 27757</a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-body font-bold text-accent-blue uppercase tracking-widest text-xs mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 hover:scale-110">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Locations with Maps */}
                <div className="mb-20">
                    <h4 className="font-body font-bold text-accent-blue uppercase tracking-widest text-xs mb-8">Our Locations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((location, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 hover:border-accent-blue/50 transition-all group">
                                <div className="flex items-start gap-3 mb-4">
                                    <MapPin size={20} className="text-accent-blue shrink-0 mt-1" />
                                    <div>
                                        <h5 className="font-display font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{location.name}</h5>
                                        <p className="font-body text-xs text-silver/60 leading-relaxed">{location.address}</p>
                                    </div>
                                </div>
                                <div className="w-full h-48 rounded-lg overflow-hidden border border-white/10">
                                    <iframe
                                        src={location.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="hover:scale-105 transition-transform duration-300"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-body text-silver/40 uppercase tracking-widest">
                    <span>© {new Date().getFullYear()} DS STEM LAB. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
