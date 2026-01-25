import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is an Atal Tinkering Lab (ATL)?",
            answer: "An Atal Tinkering Lab (ATL) is a workspace equipped with state-of-the-art equipment like 3D printers, robotics kits, IoT devices, and electronics tools. It's part of the Atal Innovation Mission (AIM) by NITI Aayog, designed to foster curiosity, creativity, and innovation among students. DS STEM LAB provides complete ATL setup services for schools across India."
        },
        {
            question: "Does DS STEM LAB provide online classes?",
            answer: "Yes! We provide personalized 1:1 online STEAM and coding classes for students. Our expert instructors teach Python, Scratch, Robotics, AI, and Web Development through interactive sessions tailored to each student's learning pace and interests."
        },
        {
            question: "Why is STEM important for students?",
            answer: "STEM (Science, Technology, Engineering, Mathematics) education prepares students for the 4th Industrial Revolution. It develops critical thinking, problem-solving, creativity, and innovation skills. STEM learning moves beyond rote memorization, teaching students HOW to think rather than WHAT to think, making them future-ready for careers in technology and innovation."
        },
        {
            question: "How to set up an ATL lab in school?",
            answer: "Setting up an ATL lab requires proper planning, NITI Aayog approval, infrastructure setup, and equipment procurement. DS STEM LAB provides end-to-end ATL setup services including consultation, equipment supply, installation, teacher training, and ongoing support. We handle everything from 3D printers and robotics kits to IoT devices and curriculum development."
        },
        {
            question: "What are the benefits of robotics in school curriculum?",
            answer: "Robotics in schools enhances hands-on learning, develops computational thinking, improves teamwork and collaboration, boosts creativity and innovation, and prepares students for automation and AI-driven careers. Students learn by building, testing, and iterating - understanding that failure is part of the learning process."
        },
        {
            question: "What is the 4th Industrial Revolution in education?",
            answer: "The 4th Industrial Revolution refers to the fusion of technologies like AI, robotics, IoT, and automation that are transforming how we live and work. In education, it means preparing students with skills in coding, robotics, AI, and critical thinking to thrive in an increasingly automated world. DS STEM LAB's curriculum is designed specifically to prepare students for this revolution."
        },
        {
            question: "What is the difference between AI and ML for kids?",
            answer: "Artificial Intelligence (AI) is the broader concept of machines being able to carry out tasks in a 'smart' way, like voice assistants or game characters. Machine Learning (ML) is a subset of AI where machines learn from data and improve over time without being explicitly programmed. We teach both concepts through age-appropriate projects and simulations."
        },
        {
            question: "What is the cost of setting up a STEM lab?",
            answer: "The cost varies based on lab size, equipment requirements, and customization needs. A basic STEM lab can start from ₹5-10 lakhs, while a comprehensive ATL setup may range from ₹20-30 lakhs. Contact DS STEM LAB for a detailed quote customized to your school's requirements and budget."
        },
        {
            question: "Which locations does DS STEM LAB serve?",
            answer: "DS STEM LAB has offices in three locations: Patna (Bihar), Panchkula (Haryana), and Rohtak (Haryana). However, we provide our services across India, including ATL lab setup, teacher training, and online classes for students nationwide."
        },
        {
            question: "Do you provide teacher training for robotics and coding?",
            answer: "Yes! We offer comprehensive teacher training programs in Python, Scratch, Robotics, AI, and other technical skills. Our training equips educators with the knowledge and confidence to teach modern STEM subjects effectively, including hands-on workshops and ongoing support."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-silver" id="faq">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-blue font-body font-bold tracking-widest uppercase mb-4 block">FAQ</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-navy mb-6 uppercase leading-[0.9]">
                        Frequently Asked <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-purple-600">Questions</span>
                    </h2>
                    <p className="text-navy/60 font-body text-sm max-w-2xl mx-auto">
                        Everything you need to know about DS STEM LAB, our services, and STEM education.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white border border-navy/10 rounded-lg overflow-hidden hover:border-accent-blue/50 transition-all"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-navy/5 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="font-display font-bold text-lg text-navy pr-8">
                                    {faq.question}
                                </h3>
                                <div className="shrink-0 w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-white" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-white" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2">
                                            <p className="text-navy/70 font-body text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center p-8 bg-navy rounded-lg"
                >
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Still have questions?</h3>
                    <p className="text-silver/70 font-body text-sm mb-6">
                        Can't find the answer you're looking for? Please reach out to our team.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-accent-blue text-white font-body font-bold text-sm tracking-wider rounded-full hover:bg-white hover:text-navy transition-all duration-300 hover:scale-105"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                    >
                        CONTACT US
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
