import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Printer, Plane } from 'lucide-react';

const CourseLevels = () => {
    const levels = [
        {
            level: "Level 1",
            title: "Mechano Level",
            icon: Wrench,
            color: "from-blue-500 to-cyan-500",
            courses: [
                {
                    name: "Basic",
                    description: "Kids get creative making mini Robot cars, Helicopters, Cranes, Rockets, and Ships.",
                    highlights: ["Hands-on Building", "Creative Design", "Basic Mechanics"]
                },
                {
                    name: "Advance",
                    description: "Senior engineering design. Research, build, test, and improve mechanical/electrical devices and systems.",
                    highlights: ["Engineering Design", "Testing & Iteration", "System Integration"]
                }
            ]
        },
        {
            level: "Level 2",
            title: "Electronics Level",
            icon: Zap,
            color: "from-purple-500 to-pink-500",
            courses: [
                {
                    name: "Snap Circuits",
                    description: "For children 8+ years. Exposes young students to elementary engineering concepts.",
                    highlights: ["Circuit Basics", "Electronic Components", "Safe Learning"]
                },
                {
                    name: "Breadboard Circuit",
                    description: "Building temporary circuits to demonstrate actions and reuse components.",
                    highlights: ["Prototyping", "Circuit Design", "Component Reusability"]
                },
                {
                    name: "Wireless/Automation",
                    description: "Advanced circuit design with wireless communication and automation.",
                    highlights: ["IoT Basics", "Wireless Tech", "Automation"]
                }
            ]
        },
        {
            level: "Level 3",
            title: "Advanced Tech",
            icon: Printer,
            color: "from-orange-500 to-red-500",
            courses: [
                {
                    name: "3D Printing",
                    description: "Design and prototyping using cutting-edge 3D printing technology.",
                    highlights: ["CAD Design", "Rapid Prototyping", "Manufacturing"]
                },
                {
                    name: "Aero Modeling",
                    description: "Drone technology and Remote Control (R.C.) Planes.",
                    highlights: ["Aerodynamics", "Drone Tech", "Flight Control"],
                    icon: Plane
                }
            ]
        }
    ];

    return (
        <section className="py-24 px-6 bg-navy text-silver relative overflow-hidden" id="courses">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-96 h-96 border border-white/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-96 h-96 border border-white/20 rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-blue font-body font-bold tracking-widest uppercase mb-4 block">Curriculum</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase">
                        Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-purple-400">Levels</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-silver/60 font-body">
                        Progressive learning paths designed to take students from basics to advanced technology mastery.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {levels.map((level, levelIndex) => (
                        <motion.div
                            key={levelIndex}
                            initial={{ opacity: 0, x: levelIndex % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 hover:border-accent-blue/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center`}>
                                    <level.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-accent-blue font-body text-sm font-bold tracking-widest uppercase">{level.level}</span>
                                    <h3 className="font-display font-black text-3xl md:text-4xl text-white">{level.title}</h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {level.courses.map((course, courseIndex) => (
                                    <motion.div
                                        key={courseIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: courseIndex * 0.1 }}
                                        className="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-accent-blue/50 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-display font-bold text-xl text-white group-hover:text-accent-blue transition-colors">
                                                {course.name}
                                            </h4>
                                            {course.icon && <course.icon className="w-5 h-5 text-accent-blue" />}
                                        </div>

                                        <p className="font-body text-sm text-silver/70 mb-4 leading-relaxed">
                                            {course.description}
                                        </p>

                                        <div className="space-y-2">
                                            {course.highlights.map((highlight, hIndex) => (
                                                <div key={hIndex} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                                    <span className="font-body text-xs text-silver/50">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseLevels;
