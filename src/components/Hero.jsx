import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center px-6 pt-20 overflow-hidden">

            {/* Background Abstract Grid */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                style={{ backgroundImage: 'linear-gradient(#050A18 1px, transparent 1px), linear-gradient(90deg, #050A18 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Content */}
                <div className="col-span-1 lg:col-span-8 flex flex-col items-start z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-3 mb-4 pl-1"
                    >
                        <span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
                        <span className="font-body text-xs md:text-sm tracking-[0.2em] text-navy/70 uppercase font-bold">
                            Stem.org Accredited
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'circOut' }}
                        className="text-[14vw] leading-[0.75] font-display font-black text-navy mix-blend-darken -ml-1 md:-ml-4 tracking-tighter"
                    >
                        FUTURE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-navy to-accent-blue">OF ROBOTICS</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center"
                    >
                        <button className="group relative px-8 py-4 bg-navy text-silver rounded-full font-body font-bold text-sm tracking-wider overflow-hidden hover:bg-accent-blue transition-colors duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                EXPLORE COURSES <ArrowRight size={16} />
                            </span>
                        </button>

                        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-2 pr-6 rounded-full border border-navy/10">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-silver bg-gray-300 flex items-center justify-center text-[10px] overflow-hidden`}>
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-sm leading-none">+182k</span>
                                <span className="text-[10px] text-navy/60 font-body leading-none">Students Trust Us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right 3D Visual (Placeholder) */}
                <div className="col-span-1 lg:col-span-4 relative h-[40vh] lg:h-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* This is where the 3D Image will go. Using a CSS shape for now */}
                        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-accent-blue/20 to-navy/5 border border-navy/10 backdrop-blur-md relative z-10 flex items-center justify-center">
                            <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-bl from-silver to-white shadow-2xl flex items-center justify-center">
                                <span className="font-display font-bold text-navy/20 text-6xl rotate-90">ROBO</span>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-10 w-24 h-24 bg-accent-blue/10 rounded-full blur-xl"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-6 flex items-center gap-4 origin-left -rotate-90 md:rotate-0 md:left-1/2 md:-translate-x-1/2"
            >
                <div className="w-[1px] h-12 bg-navy/20 overflow-hidden">
                    <motion.div
                        animate={{ y: [-50, 50] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/2 bg-navy"
                    />
                </div>
                <span className="font-body text-[10px] uppercase tracking-widest text-navy/50">Scroll</span>
            </motion.div>

        </section>
    );
};

export default Hero;
