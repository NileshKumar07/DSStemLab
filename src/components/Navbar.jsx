import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 text-navy"
        >
            <div className="flex items-center gap-2">
                <img src="/dslab_logo.png" alt="DS STEM LAB Logo" className="h-10 w-auto object-contain" />
            </div>

            <div className="hidden md:flex items-center gap-8 font-body text-sm font-bold tracking-widest uppercase">
                {['Home', 'Projects', 'About', 'Contact'].map((item, i) => (
                    <a key={i} href={`#${item.toLowerCase()}`} className="hover:text-accent-blue transition-colors relative group text-navy">
                        {item}
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent-blue transition-all group-hover:w-full" />
                    </a>
                ))}
            </div>

            {/* Mobile Menu Icon Placeholder */}
            <div className="md:hidden w-8 h-8 bg-zinc-800 rounded-full" />
        </motion.nav>
    );
};

export default Navbar;
