import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, FileText, Monitor, Trophy, BookOpen, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Composite Skill Lab Setup",
            desc: "Setting up Robotics, Space Tech, and AI labs for schools with state-of-the-art equipment.",
            icon: Settings
        },
        {
            title: "ATAL Tinkering Lab (ATL) Setup",
            desc: "Complete services for innovation spaces authorized by NITI Aayog with cutting-edge tools.",
            icon: Sparkles
        },
        {
            title: "Online 1:1 Classes",
            desc: "Personalized STEAM curriculum for students with expert instructors.",
            icon: Monitor
        },
        {
            title: "Teacher Training",
            desc: "Upskilling educators in Python, Coding, and Technical skills for modern education.",
            icon: BookOpen
        },
        {
            title: "Skill Enhancement Programs",
            desc: "3Cs Impact Report Cards & student tracking for comprehensive development.",
            icon: FileText
        },
        {
            title: "Technical Consultation",
            desc: "Providing ERP solutions & Smart panels for institutions to modernize infrastructure.",
            icon: Users
        },
        {
            title: "Camps & Events",
            desc: "Summer/Winter Camps, Robotics Marathons, Exhibitions, and Competition Workshops.",
            icon: Trophy
        },
    ];

    return (
        <section className="py-24 px-6 bg-navy text-silver relative overflow-hidden" id="services">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 skew-x-12 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <span className="text-accent-blue font-body font-bold tracking-widest uppercase mb-4 block">What We Do</span>
                        <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-none">
                            EMPOWERING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gray-500">SCHOOLS.</span>
                        </h2>
                        <p className="font-body text-silver/60 mb-8 text-sm leading-relaxed">
                            DS STEM LAB provides comprehensive solutions for the modern education ecosystem, from infrastructure to curriculum and training.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-blue/50 transition-all group backdrop-blur-sm"
                            >
                                <service.icon className="w-8 h-8 text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-display font-bold text-xl mb-3 text-white group-hover:text-accent-blue transition-colors">{service.title}</h3>
                                <p className="font-body text-xs text-silver/50 leading-relaxed">{service.desc}</p>
                                <div className="w-12 h-1 bg-accent-blue mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
