import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Aperture, Youtube, Box, CircuitBoard, Bot, Smartphone } from 'lucide-react';

const TechCard = ({ title, icon: Icon, delay, className, bgImage }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay, duration: 0.7, ease: "backOut" }}
        className={`relative overflow-hidden border border-navy/10 p-8 flex flex-col justify-between hover:border-accent-blue/50 transition-all hover:shadow-2xl group min-h-[250px] ${className}`}
    >
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
            {bgImage ? (
                <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-blue transition-colors border border-white/20">
            <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
        </div>

        <div className="relative z-10">
            <span className="font-display font-bold text-2xl text-white uppercase tracking-wider block mb-2 transform group-hover:-translate-y-1 transition-transform">{title}</span>
            <div className="w-12 h-1 bg-accent-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
    </motion.div>
);

const TechGrid = () => {
    return (
        <section className="py-24 px-6 bg-silver relative" id="projects">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-black text-navy mb-4 uppercase">
                        Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-purple-600">Stack</span>
                    </h2>
                    <p className="max-w-xl text-navy/60 font-body">
                        We equip students with the tools of tomorrow. From coding to robotics, our curriculum is built on industry-standard technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px] mb-20">
                    {/* Asymmetrical Layout with Backgrounds */}
                    <TechCard
                        title="Robotics"
                        icon={Bot}
                        delay={0}
                        className="md:col-span-2 md:row-span-2 bg-black"
                        bgImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
                    />

                    <TechCard
                        title="AI & ML"
                        icon={CircuitBoard}
                        delay={0.1}
                        className="md:col-span-2 bg-nvy"
                        bgImage="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80"
                    />

                    <TechCard
                        title="AR / VR"
                        icon={Aperture}
                        delay={0.2}
                        className="md:row-span-2 bg-navy"
                        bgImage="https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80"
                    />

                    <TechCard title="Web Dev" icon={Code} delay={0.3} className="bg-zinc-900" />
                    <TechCard title="3D Printing" icon={Box} delay={0.4} className="bg-zinc-800" />

                    <TechCard
                        title="Scratch / Python"
                        icon={Code}
                        delay={0.5}
                        className="md:col-span-2 bg-accent-blue"
                        bgImage="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80"
                    />
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a href="#contact" className="group relative px-12 py-6 bg-navy text-white font-display font-black text-2xl uppercase tracking-widest hover:bg-accent-blue transition-all duration-300 shadow-xl hover:shadow-accent-blue/20 rounded-full overflow-hidden">
                        <span className="relative z-10 flex items-center gap-4">
                            Book A Free Class <span className="text-xl">→</span>
                        </span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TechGrid;
