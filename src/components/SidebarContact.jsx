import React from "react";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function SidebarContact({ visible }) {
    // Animation variants for sidebar container
    const sidebarVariants = {
        hidden: { x: -60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    // Animation variants for individual icons
    const iconVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
        }),
    };

    if (!visible) return null;

    return (
        <motion.div
            className="fixed left-0 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 flex"
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
        >
            <motion.a
                href="tel:+919534527757"
                custom={0}
                variants={iconVariants}
                className="bg-white rounded-md p-3 sm:p-3 shadow ml-2 hover:bg-blue-100 transition-colors"
                aria-label="Call DS STEM LAB"
            >
                <Phone className="text-[#193CB8] w-6 h-6 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
                href="mailto:ds.stemlab@gmail.com"
                custom={1}
                variants={iconVariants}
                className="bg-white rounded-md p-3 sm:p-3 shadow ml-2 hover:bg-blue-100 transition-colors"
                aria-label="Email DS STEM LAB"
            >
                <Mail className="text-[#193CB8] w-6 h-6 sm:w-6 sm:h-6" />
            </motion.a>
        </motion.div>
    );
}
