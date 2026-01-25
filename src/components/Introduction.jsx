import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
    const cards = [
        { title: "Creativity", desc: "Unlocking the potential to innovate." },
        { title: "Capacity", desc: "Building the skills for tomorrow's challenges." },
        { title: "Curiosity", desc: "Fueling the desire to explore and learn." },
    ];

    return (
        <section className="w-full py-20 px-6 bg-silver relative z-10" id="about">
            <div className="max-w-7xl mx-auto border-t border-navy/10 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="group p-6 border border-navy/5 hover:border-accent-blue/50 transition-colors bg-white/40 backdrop-blur-sm"
                        >
                            <span className="block font-body text-xs text-accent-blue font-bold mb-4">0{i + 1}</span>
                            <h3 className="text-3xl font-display font-bold text-navy mb-2 group-hover:text-accent-blue transition-colors">{card.title}</h3>
                            <p className="font-body text-navy/70 text-sm">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Introduction;
