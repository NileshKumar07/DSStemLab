import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Aperture, Box, CircuitBoard, Bot } from 'lucide-react';

const TechCard = ({ title, description, icon: Icon, delay, className, bgImage }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay, duration: 0.7, ease: "easeOut" }}
        className={`relative overflow-hidden border border-navy/10 rounded-2xl p-8 flex flex-col justify-between hover:border-accent-blue transition-all duration-500 hover:shadow-2xl hover:shadow-accent-blue/10 group min-h-[320px] ${className}`}
    >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
            {bgImage ? (
                <>
                    <img src={bgImage} alt={title} loading="lazy" className="w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/60 to-accent-blue/70" />
                </>
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-navy via-navy/95 to-accent-blue/90" />
            )}
        </div>

        {/* Icon Container */}
        <div className="relative z-10 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent-blue group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end">
            <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                {title}
            </h3>
            <div className="w-16 h-1 bg-accent-blue mb-4 transform origin-left group-hover:w-24 transition-all duration-300" />
            <p className="font-body text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {description}
            </p>
        </div>

        {/* Hover Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-16 translate-x-16" />
    </motion.div>
);

const TechGrid = () => {
    const handleBookClass = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const technologies = [
        {
            title: "Robotics",
            description: "Build and program robots using Arduino, Raspberry Pi, and industry-standard kits. Learn mechanics, electronics, and automation.",
            icon: Bot,
            bgImage: "/assets/gallery/IMG-20260125-WA0005.jpg", // Actual robotics kits display
            className: "md:col-span-2 md:row-span-2"
        },
        {
            title: "AI & ML",
            description: "Explore artificial intelligence and machine learning with hands-on projects in computer vision, NLP, and neural networks.",
            icon: CircuitBoard,
            bgImage: "/assets/gallery/IMG-20260125-WA0003.jpg", // DS STEM LAB services banner
            className: "md:col-span-2"
        },
        {
            title: "AR / VR",
            description: "Create immersive experiences with augmented and virtual reality. Design 3D environments and interactive applications.",
            icon: Aperture,
            bgImage: "/assets/gallery/IMG-20260107-WA0008.jpg", // Drone and VR technology
            className: "md:row-span-2"
        },
        {
            title: "Web Dev",
            description: "Master modern web development with HTML, CSS, JavaScript, and frameworks like React. Build responsive websites.",
            icon: Code,
            bgImage: "/assets/gallery/IMG-20260125-WA0025.jpg", // Students coding on laptop
            className: ""
        },
        {
            title: "3D Printing",
            description: "Design and fabricate physical objects using CAD software and 3D printers. Bring your ideas to life.",
            icon: Box,
            bgImage: "/assets/gallery/IMG-20260107-WA0012.jpg", // 3D printer demonstration
            className: ""
        },
        {
            title: "Python & Scratch",
            description: "Learn programming fundamentals with Scratch for beginners and Python for advanced coding. Build games and apps.",
            icon: Code,
            bgImage: "/assets/gallery/IMG-20260125-WA0022.jpg", // Coding workshop with students
            className: "md:col-span-2"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-silver to-white relative overflow-hidden" id="projects">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -translate-y-48 translate-x-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-y-48 -translate-x-48" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-black text-navy mb-6 uppercase leading-tight">
                        Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-purple-600">Stack</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-accent-blue to-purple-600 mx-auto mb-6" />
                    <p className="text-lg text-navy/70 font-body leading-relaxed">
                        We equip students with the tools of tomorrow. From coding to robotics, our curriculum is built on industry-standard technologies.
                    </p>
                </motion.div>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px] mb-16">
                    {technologies.map((tech, index) => (
                        <TechCard
                            key={tech.title}
                            title={tech.title}
                            description={tech.description}
                            icon={tech.icon}
                            delay={index * 0.1}
                            className={tech.className}
                            bgImage={tech.bgImage}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={handleBookClass}
                        className="group relative px-10 py-5 bg-gradient-to-r from-navy to-accent-blue text-white font-display font-bold text-xl uppercase tracking-wider hover:shadow-2xl hover:shadow-accent-blue/30 transition-all duration-300 rounded-full overflow-hidden hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Book A Free Class
                            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </span>
                        <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TechGrid;
