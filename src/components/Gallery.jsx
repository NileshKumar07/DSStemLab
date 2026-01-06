import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Gallery = () => {
    // Parallax hook
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const images = [
        { src: "/assets/kreativity_show.jpg", title: "Kreativity Show" },
        { src: "/assets/1.jpg", title: "Robotics Workshop" },
        { src: "/assets/Mr. Nilesh Kumar.png", title: "Leadership" },
        { src: "/assets/2.jpg", title: "Student Projects" },
        { src: "/assets/kreativity_league.jpg", title: "League Events" },
        { src: "/assets/3.jpg", title: "Innovation Lab" },
        { src: "/assets/nilesh newspaper.jpg", title: "Press Coverage" },
    ];

    return (
        <section className="py-24 px-6 bg-navy text-silver relative overflow-hidden" id="gallery">
            {/* Technical Background Lines */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <span className="text-accent-blue font-body font-bold tracking-widest uppercase mb-2 block">Moments</span>
                        <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.85]">
                            CAPTURING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-white/20">INNOVATION</span>
                        </h2>
                    </div>
                    <p className="font-body text-sm text-silver/60 max-w-sm text-right">
                        A glimpse into the daily life at DS STEM LAB, where curiosity meets creation.
                    </p>
                </motion.div>

                {/* CSS Columns for True Masonry / Full Aspect Ratio */}
                <div className="columns-1 md:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden bg-zinc-900 border border-white/10"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="font-display font-bold text-xl text-white uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {img.title}
                                </span>
                                <div className="w-12 h-1 bg-accent-blue mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
