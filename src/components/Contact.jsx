import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Mail, User, MessageCircle, MapPin, Phone, FileText, CheckCircle, Copy } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const CONTACT_INFO = [
    {
        icon: <MapPin className="w-6 h-6 text-indigo-600" />,
        label: "Location",
        value: "102, Kamla Vihar, Patna, Bihar 801503",
        copy: false,
    },
    {
        icon: <Mail className="w-6 h-6 text-indigo-600" />,
        label: "Email Address",
        value: "ds.stemlab@gmail.com",
        copy: true,
    },
    {
        icon: <Phone className="w-6 h-6 text-indigo-600" />,
        label: "Phone Numbers",
        value: "+91 7004547034, +91 9534527757",
        copyValue: "+91 9534527757", // Only copy WhatsApp number
        copy: true,
    },
    {
        icon: <FileText className="w-6 h-6 text-indigo-600" />,
        label: "Rohtak Office",
        value: "Hafed Chowk, Rohtak, Haryana 124001",
        copy: false,
    },
];

export default function Contact() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [copiedIdx, setCopiedIdx] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Copy to clipboard
    const handleCopy = (value, idx) => {
        navigator.clipboard.writeText(value);
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 1200);
    };

    // EmailJS config (replace with your own)
    const EMAILJS_SERVICE_ID = "service_i2re00a";
    const EMAILJS_TEMPLATE_ID = "template_9tmegrk";
    const EMAILJS_USER_ID = "m-KrEnQkmKXuwyWSb";

    // Form submit handler
    const onSubmit = async () => {
        setLoading(true);
        try {
            // Debug: log all field values before sending
            if (formRef.current) {
                console.log(
                    "name:", formRef.current.name?.value,
                    "email:", formRef.current.email?.value,
                    "message:", formRef.current.message?.value
                );
            }
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_USER_ID
            );
            Swal.fire({
                icon: "success",
                title: "Thank you!",
                text: "We'll be in touch shortly.",
                showConfirmButton: false,
                timer: 2000,
            });
            reset();
        } catch {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Something went wrong. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-[#f8faff] to-[#e3f2fd] py-20 px-4 md:px-10 lg:px-20">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
                {/* Illustration (left) */}
                <motion.div
                    className="hidden md:flex justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="/dslab_logo.png"
                        alt="Contact Illustration"
                        className="w-[340px] h-[340px] object-contain"
                    />
                </motion.div>
                {/* Heading and subtitle (right) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Get in Touch</h1>
                    <p className="text-lg text-[#64748b] mb-6">We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you shortly.</p>
                </motion.div>
            </div>
            {/* Main Content: Form + Info */}
            <motion.div
                className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                {/* Contact Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-8 space-y-6"
                >
                    {/* Name (used for {{name}} in template and From Name) */}
                    <div>
                        <label className="block text-sm font-medium text-[#1e293b] mb-1 flex items-center gap-2">
                            <User className="w-4 h-4 text-indigo-600" /> Full Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] bg-white text-[#1e293b] border-[#cbd5e1] ${errors.name ? "border-red-400" : ""}`}
                            placeholder="Your Name"
                        />
                        {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                    </div>
                    {/* Email (used for {{email}} in template and Reply To) */}
                    <div>
                        <label className="block text-sm font-medium text-[#1e293b] mb-1 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-indigo-600" /> Email
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email address" },
                            })}
                            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] bg-white text-[#1e293b] border-[#cbd5e1] ${errors.email ? "border-red-400" : ""}`}
                            placeholder="you@email.com"
                        />
                        {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                    </div>
                    {/* Message (used for {{message}} in template) */}
                    <div>
                        <label className="block text-sm font-medium text-[#1e293b] mb-1 flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-indigo-600" /> Message
                        </label>
                        <textarea
                            rows={4}
                            {...register("message", { required: "Message is required" })}
                            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] bg-white text-[#1e293b] border-[#cbd5e1] resize-none ${errors.message ? "border-red-400" : ""}`}
                            placeholder="Type your message..."
                        />
                        {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#6366f1] shadow-md transition-all duration-300 hover:scale-105 focus:scale-105 flex items-center justify-center gap-2"
                        disabled={loading}
                    >
                        {loading && (
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                        )}
                        Send Message
                    </button>
                </form>
                {/* Contact Info Panel */}
                <div className="flex flex-col gap-6">
                    {CONTACT_INFO.map((info, idx) => (
                        <motion.div
                            key={info.label}
                            className="flex items-center gap-4 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5 hover:scale-[1.02] transition cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            onClick={() => info.copy && handleCopy(info.copyValue || info.value, idx)}
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e0e7ff]">
                                {info.icon}
                            </div>
                            <div className="flex-1">
                                <div className="text-base font-semibold text-[#1e293b] flex items-center gap-2">
                                    {info.label}
                                    {info.copy && (
                                        <span className="ml-1">
                                            {copiedIdx === idx ? (
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-indigo-400" />
                                            )}
                                        </span>
                                    )}
                                </div>
                                <div className="text-[#64748b] text-sm mt-1">{info.value}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* WhatsApp Button & Social Media Links */}
            <motion.div
                className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row gap-6 items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919534527757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat with us on WhatsApp
                </a>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    <span className="text-[#64748b] font-medium">Follow us:</span>
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/profile.php?id=61587186836524"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                        aria-label="Facebook"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/dsstemlab?igsh=eDNyN3VsbTk4cWl2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                        aria-label="Instagram"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://in.linkedin.com/in/rajnish-sharma-255614208"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </motion.div>

            {/* Optional: Google Maps Embed */}
            <div className="max-w-3xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-md">
                <iframe
                    title="DS STEM LAB Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4567890123456!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
