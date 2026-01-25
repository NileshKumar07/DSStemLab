import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Featured images for initial display
    const featuredImages = [
        { src: "/assets/gallery/kreativity_show.jpg", title: "Kreativity Show", category: "Events" },
        { src: "/assets/gallery/1.jpg", title: "Robotics Workshop", category: "Workshop" },
        { src: "/assets/gallery/Mr. Nilesh Kumar.png", title: "Leadership", category: "Leadership" },
        { src: "/assets/gallery/2.jpg", title: "Student Projects", category: "Projects" },
        { src: "/assets/gallery/kreativity_league.jpg", title: "League Events", category: "Events" },
        { src: "/assets/gallery/3.jpg", title: "Innovation Lab", category: "Lab" },
        { src: "/assets/gallery/nilesh newspaper.jpg", title: "Press Coverage", category: "Press" },
        { src: "/assets/gallery/IMG-20260107-WA0002.jpg", title: "STEM Workshop", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260107-WA0003.jpg", title: "Hands-on Learning", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260125-WA0001.jpg", title: "Student Innovation", category: "Projects" },
        { src: "/assets/gallery/IMG-20260125-WA0002.jpg", title: "Lab Activity", category: "Lab" },
        { src: "/assets/gallery/IMG-20260125-WA0005.jpg", title: "Team Collaboration", category: "Events" },
    ];

    // All gallery images
    const allGalleryImages = [
        ...featuredImages,
        { src: "/assets/gallery/IMG-20260107-WA0004.jpg", title: "Workshop Session", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260107-WA0005.jpg", title: "Student Activity", category: "Projects" },
        { src: "/assets/gallery/IMG-20260107-WA0006.jpg", title: "Innovation Space", category: "Lab" },
        { src: "/assets/gallery/IMG-20260107-WA0007.jpg", title: "Team Work", category: "Projects" },
        { src: "/assets/gallery/IMG-20260107-WA0008.jpg", title: "Learning Session", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260107-WA0009.jpg", title: "Competition Prep", category: "Events" },
        { src: "/assets/gallery/IMG-20260107-WA0010.jpg", title: "Lab Session", category: "Lab" },
        { src: "/assets/gallery/IMG-20260107-WA0011.jpg", title: "Creative Thinking", category: "Projects" },
        { src: "/assets/gallery/IMG-20260107-WA0012.jpg", title: "Workshop Activity", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260107-WA0013.jpg", title: "Team Activity", category: "Events" },
        { src: "/assets/gallery/IMG-20260107-WA0014.jpg", title: "Skill Building", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260107-WA0015.jpg", title: "Project Work", category: "Projects" },
        { src: "/assets/gallery/IMG-20260125-WA0003.jpg", title: "Innovation Lab", category: "Lab" },
        { src: "/assets/gallery/IMG-20260125-WA0004.jpg", title: "Training Session", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260125-WA0006.jpg", title: "Team Building", category: "Events" },
        { src: "/assets/gallery/IMG-20260125-WA0007.jpg", title: "Learning Activity", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260125-WA0008.jpg", title: "Student Projects", category: "Projects" },
        { src: "/assets/gallery/IMG-20260125-WA0009.jpg", title: "Lab Exploration", category: "Lab" },
        { src: "/assets/gallery/IMG-20260125-WA0010.jpg", title: "Workshop Practice", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260125-WA0011.jpg", title: "Group Activity", category: "Events" },
        { src: "/assets/gallery/IMG-20260125-WA0012.jpg", title: "Hands-on Training", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260125-WA0013.jpg", title: "Project Development", category: "Projects" },
        { src: "/assets/gallery/IMG-20260125-WA0014.jpg", title: "Innovation Work", category: "Lab" },
        { src: "/assets/gallery/IMG-20260125-WA0015.jpg", title: "Team Event", category: "Events" },
        { src: "/assets/gallery/IMG-20260125-WA0016.jpg", title: "Workshop Training", category: "Workshop" },
        { src: "/assets/gallery/IMG-20260125-WA0017.jpg", title: "Student Project", category: "Projects" },
        { src: "/assets/gallery/IMG-20260125-WA0018.jpg", title: "Lab Innovation", category: "Lab" },
        { src: "/assets/gallery/IMG-20260125-WA0019.jpg", title: "Learning Workshop", category: "Workshop" },
    ];

    const displayImages = showAll ? allGalleryImages : featuredImages;

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
                    <p className="font-body text-sm text-silver/60 max-w-sm md:text-right">
                        A glimpse into the daily life at DS STEM LAB, where curiosity meets creation.
                    </p>
                </motion.div>

                {/* CSS Columns for True Masonry / Full Aspect Ratio */}
                <div className="columns-1 md:columns-3 gap-6 space-y-6">
                    {displayImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (i % 12) * 0.05 }}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="font-display font-bold text-xl text-white uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {img.title}
                                </span>
                                <span className="text-accent-blue text-xs font-body mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {img.category}
                                </span>
                                <div className="w-12 h-1 bg-accent-blue mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group px-8 py-4 bg-accent-blue text-white font-body font-bold text-sm tracking-wider rounded-full hover:bg-white hover:text-navy transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        {showAll ? 'SHOW LESS' : `VIEW ALL (${allGalleryImages.length}+ IMAGES)`}
                    </button>
                </motion.div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-display font-bold text-white">{selectedImage.title}</h3>
                                <p className="text-accent-blue text-sm font-body mt-1">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
