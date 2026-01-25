import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Services', href: '#services' },
        { name: 'Courses', href: '#courses' },
        { name: 'Labs', href: '#labs' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-silver/95 backdrop-blur-md border-b border-navy/10"
            >
                <div className="flex items-center gap-2">
                    <img src="/dslab_logo.png" alt="DS STEM LAB Logo" className="h-10 w-auto object-contain" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-body text-sm font-bold tracking-widest uppercase">
                    {navItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => handleNavClick(item.href)}
                            className="hover:text-accent-blue transition-colors relative group text-navy cursor-pointer"
                        >
                            {item.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent-blue transition-all group-hover:w-full" />
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-10 h-10 bg-navy rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Slide-out Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-navy z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Menu Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <img src="/dslab_logo.png" alt="DS STEM LAB Logo" className="h-8 w-auto object-contain" />
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-white" />
                                    </button>
                                </div>

                                {/* Menu Items */}
                                <div className="flex-1 overflow-y-auto py-8">
                                    {navItems.map((item, i) => (
                                        <motion.button
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => handleNavClick(item.href)}
                                            className="w-full text-left px-6 py-4 text-white font-body font-bold tracking-wider uppercase text-sm hover:bg-white/10 hover:text-accent-blue transition-all border-l-4 border-transparent hover:border-accent-blue"
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Menu Footer */}
                                <div className="p-6 border-t border-white/10">
                                    <p className="text-white/60 text-xs font-body mb-2">DS STEM LAB</p>
                                    <p className="text-white/40 text-xs font-body">A Robotic & Research Lab</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
