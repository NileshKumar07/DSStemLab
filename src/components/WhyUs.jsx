import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, FileText, Monitor, Trophy, BookOpen } from 'lucide-react';

const Services = () => {
    const services = [
        { title: "Composite Skill Lab Setup", desc: "Robotics, Space Tech, AI labs for schools.", icon: Settings },
        { title: "Online 1:1 Classes", desc: "Personalized STEAM curriculum for students.", icon: Monitor },
        { title: "Skill Enhancement Programs", desc: "3Cs Impact Report Card & tracking.", icon: FileText },
        { title: "Technical Consultation", desc: "ERP solutions & Smart panels for institutions.", icon: Users },
        { title: "Competition Workshops", desc: "Training for innovation & critical thinking leagues.", icon: Trophy },
        { title: "Teacher Trainings", desc: "Upskilling educators in Python & Tech skills.", icon: BookOpen },
    ];

    return (
        <section className="py-24 px-6 bg-navy text-silver relative overflow-hidden" id="services">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 skew-x-12 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
                            className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm"
                        >
                            <service.icon className="w-8 h-8 text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="font-display font-bold text-xl mb-3 text-white">{service.title}</h3>
                            <p className="font-body text-xs text-silver/50 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
