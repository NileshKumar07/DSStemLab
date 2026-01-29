import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Facebook, Phone, Download, Globe } from 'lucide-react';

const Footer = () => {
    const locations = [
        {
            name: "Head Office",
            address: "102, Kamla Vihar, Patna - 801503"
        },
        {
            name: "Panchkula Office",
            address: "At- Sundra Ramgarh Chowk, Panchkula, Haryana"
        },
        {
            name: "Rohtak Office",
            address: "Hafed Chowk, Rohtak, Haryana - 124001"
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
                            <a href="https://www.facebook.com/profile.php?id=61587186836524" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 hover:scale-110">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/dsstemlab?igsh=eDNyN3VsbTk4cWl2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 hover:scale-110">
                                <Instagram size={18} />
                            </a>
                            <a href="https://in.linkedin.com/in/rajnish-sharma-255614208" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 hover:scale-110">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Locations */}
                <div className="mb-20">
                    <h4 className="font-body font-bold text-accent-blue uppercase tracking-widest text-xs mb-8">Our Locations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((location, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 hover:border-accent-blue/50 transition-all group rounded-xl hover:bg-white/10">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-blue transition-colors">
                                        <MapPin size={20} className="text-accent-blue group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h5 className="font-display font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{location.name}</h5>
                                        <p className="font-body text-xs text-silver/60 leading-relaxed max-w-[200px]">{location.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] font-body text-silver/40 uppercase tracking-widest">
                    <span>© {new Date().getFullYear()} DS STEM LAB. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
