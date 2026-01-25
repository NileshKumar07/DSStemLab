import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, Globe, Eye, Sparkles } from 'lucide-react';

const LabDetails = () => {
    const labs = [
        {
            title: "Why STEM?",
            icon: Lightbulb,
            description: "STEM integrates Science, Technology, Engineering, and Mathematics. It helps students develop problem-solving skills, critical analysis, teamwork, independent thinking, and digital literacy.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Robotics Lab",
            icon: Cpu,
            description: "The Robotics lab is about tinkering—learning from failures and having unstructured time to explore and invent. It inspires children toward technology and prepares them for automation and AI.",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Atal Tinkering Lab (ATL)",
            icon: Sparkles,
            description: "A dedicated innovation space established as part of the Atal Innovation Mission (AIM). Equipped with 3D printers, robotics kits, and electronics to bridge the gap between theoretical knowledge and practical application.",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "AI & IoT Lab",
            icon: Globe,
            description: "AI: Simulation of human-like intelligence in machines (learning, reasoning, decision making). IoT: Connecting everyday objects to the internet to exchange data. Crucial for understanding our interconnected world.",
            color: "from-green-500 to-teal-500"
        },
        {
            title: "AR/VR Lab",
            icon: Eye,
            description: "Immersive technologies that blend digital content with the real world. AR/VR promotes creativity by allowing kids to design virtual worlds and experience historical events or scientific concepts firsthand.",
            color: "from-indigo-500 to-blue-500"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-silver to-white relative overflow-hidden" id="labs">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-blue font-body font-bold tracking-widest uppercase mb-4 block">Our Labs</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-navy mb-6 uppercase">
                        Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-purple-600">Spaces</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-navy/60 font-body">
                        State-of-the-art facilities designed to nurture creativity, innovation, and hands-on learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {labs.map((lab, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-white border border-navy/10 p-8 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-2xl overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${lab.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <lab.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="font-display font-bold text-2xl text-navy mb-4 group-hover:text-accent-blue transition-colors">
                                    {lab.title}
                                </h3>

                                <p className="font-body text-sm text-navy/70 leading-relaxed">
                                    {lab.description}
                                </p>

                                <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-transparent mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LabDetails;
