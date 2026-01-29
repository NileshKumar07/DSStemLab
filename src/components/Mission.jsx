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
                            DS STEM LAB is on a mission to be a world-class player in the education sector. We provide state-of-the-art STEM Labs and Atal labs, fostering a culture of innovation to prepare students for the 4th Industrial Revolution.
                        </p>

                        <blockquote className="border-l-4 border-accent-blue pl-6 italic font-display text-2xl text-navy/60 my-8">
                            "Children must be taught how to think, not what to think."
                        </blockquote>

                        <p className="font-body text-sm text-navy/60 mb-8">
                            We move beyond traditional rote learning, empowering students to question, explore, and create through hands-on experiences in our cutting-edge labs.
                        </p>

                        {/* 3 C's */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {[
                                { title: "Creativity", desc: "Unlocking potential" },
                                { title: "Capacity", desc: "Building skills" },
                                { title: "Curiosity", desc: "Fueling exploration" }
                            ].map((item, i) => (
                                <div key={i} className="text-center p-4 bg-white/50 border border-navy/10 hover:border-accent-blue/50 transition-all">
                                    <h4 className="font-display font-bold text-navy text-lg mb-1">{item.title}</h4>
                                    <p className="font-body text-xs text-navy/60">{item.desc}</p>
                                </div>
                            ))}
                        </div>
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
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue mix-blend-overlay opacity-50 z-10" />
                        <div className="absolute bottom-10 left-10 w-full h-[1px] bg-white/20 z-10" />

                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                            <img
                                src="/assets/gallery/IMG-20260125-WA0002.jpg"
                                alt="Innovation"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                            />
                        </div>

                        <div className="absolute bottom-8 left-8 z-20">
                            <span className="font-body text-xs text-accent-blue tracking-widest uppercase block mb-1">Innovation</span>
                            <span className="font-display font-bold text-3xl text-white">PREPARING FOR<br />THE FUTURE</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Mission;
