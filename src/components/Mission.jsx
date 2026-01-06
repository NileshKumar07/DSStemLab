import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section className="py-20 px-6 bg-silver" id="mission">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Text Content */}
                <div className="flex-1 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-black text-navy mb-8 uppercase leading-[0.9]">
                            Building the <br /><span className="text-accent-blue">Future</span>
                        </h2>
                        <div className="w-20 h-1 bg-navy mb-8" />

                        <p className="font-body text-navy/80 text-lg mb-6 max-w-lg">
                            DS STEM LAB is on a mission to be a world-class player in the education sector. We provide state-of-the-art STEM Labs and Atal labs, fostering a culture of innovation.
                        </p>

                        <blockquote className="border-l-4 border-accent-blue pl-6 italic font-display text-2xl text-navy/60 my-8">
                            "Children must be taught how to think, not what to think."
                        </blockquote>

                        <p className="font-body text-sm text-navy/60">
                            We move beyond traditional rote learning, empowering students to question, explore, and create.
                        </p>
                    </motion.div>
                </div>

                {/* Visual Content (Robotic Arm Placeholder) */}
                <div className="flex-1 order-1 lg:order-2 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative bg-navy w-full h-[400px] md:h-[600px] overflow-hidden group"
                    >
                        {/* Geometric Overlays */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-bluemix-blend-overlay opacity-50 z-10" />
                        <div className="absolute bottom-10 left-10 w-full h-[1px] bg-white/20 z-10" />

                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                            <span className="font-display font-bold text-silver/10 text-8xl -rotate-12">ARM</span>
                            {/* This requires an actual image for full effect. Using a placeholder for now. */}
                            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>

                        <div className="absolute bottom-8 left-8 z-20">
                            <span className="font-body text-xs text-accent-blue tracking-widest uppercase block mb-1">Project 01</span>
                            <span className="font-display font-bold text-3xl text-white">INDUSTRIAL<br />AUTOMATION</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Mission;
