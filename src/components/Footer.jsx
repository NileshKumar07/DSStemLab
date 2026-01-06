import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy text-silver pt-24 pb-12 px-6 border-t border-white/10" id="contact">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                {/* Brand */}
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/dslab_logo.png" alt="DS STEM LAB Logo" className="h-12 w-auto object-contain brightness-0 invert" />
                    </div>
                    <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] text-white/20 mb-8">
                        LET'S BUILD <br /> THE FUTURE.
                    </h2>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-body font-bold text-accent-blue uppercase tracking-widest text-xs mb-6">Contact</h4>
                    <ul className="space-y-4 font-body text-sm text-silver/70">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="mt-1 shrink-0" />
                            <span>Rohtak, Haryana 124001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} />
                            <a href="mailto:ds.stemlab@gmail.com" className="hover:text-white transition-colors">ds.stemlab@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span>+91 95345 27757</span>
                        </li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-body font-bold text-accent-blue uppercase tracking-widest text-xs mb-6">Socials</h4>
                    <div className="flex gap-4">
                        {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-body text-silver/40 uppercase tracking-widest">
                <span>© {new Date().getFullYear()} DS STEM LAB. All rights reserved.</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
