import React, { useState, useRef, useEffect } from 'react';
import { QA_MAP, FALLBACK } from './botQA';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const SUGGESTIONS = [
    'Course offerings', 'Fees structure', 'Contact details', 'Locations', 'ATL Lab setup', 'Teacher training'
];

function matchAnswer(q) {
    const found = QA_MAP.find(({ q: regex }) => regex.test(q.trim()));
    return found ? found.a : FALLBACK;
}

export default function SupportBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { from: 'bot', text: "Hello! I'm DS STEM LAB Support Assistant 🤖. How can I help you today?" }
    ]);
    const chatRef = useRef(null);

    useEffect(() => {
        if (open && chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, open]);

    function sendMessage(msg) {
        if (!msg.trim()) return;
        setMessages(m => [...m, { from: 'user', text: msg }]);
        setTimeout(() => {
            setMessages(m => [...m, { from: 'bot', text: matchAnswer(msg) }]);
        }, 400);
        setInput('');
    }

    return (
        <>
            {/* Chat Bubble Trigger */}
            {!open && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 bg-accent-blue text-white rounded-full shadow-2xl flex items-center gap-2 px-6 py-4 font-display font-bold text-base hover:bg-navy transition-all duration-300 hover:scale-105"
                    onClick={() => setOpen(true)}
                >
                    <MessageCircle size={24} />
                    <span className="hidden sm:inline">Need Help?</span>
                </motion.button>
            )}

            {/* Chat Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[95vw] bg-white border border-navy/10 rounded-2xl shadow-2xl flex flex-col h-[550px] max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-navy/10 bg-gradient-to-r from-navy to-accent-blue rounded-t-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm">
                                    <img src="/dslab_logo.png" alt="DS STEM LAB" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-white text-base leading-tight">DS STEM LAB</h3>
                                    <p className="text-xs text-white/90 font-body leading-tight">Support Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-silver/30">
                            <AnimatePresence initial={false}>
                                {messages.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div
                                            className={
                                                `px-4 py-3 rounded-2xl shadow-sm font-body text-sm leading-relaxed ` +
                                                (m.from === 'bot'
                                                    ? 'bg-white text-navy border border-navy/10'
                                                    : 'bg-accent-blue text-white') +
                                                ' max-w-[85%]'
                                            }
                                            dangerouslySetInnerHTML={{ __html: m.text }}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Suggestions */}
                        <div className="flex flex-wrap gap-2 px-4 py-3 bg-white border-t border-navy/10">
                            {SUGGESTIONS.map(s => (
                                <button
                                    key={s}
                                    className="bg-silver/50 border border-navy/20 text-navy rounded-full px-3 py-1.5 text-xs font-body font-medium hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-200"
                                    onClick={() => sendMessage(s)}
                                >{s}</button>
                            ))}
                        </div>

                        {/* Input */}
                        <form
                            className="flex items-center gap-3 px-4 py-4 border-t border-navy/10 bg-white rounded-b-2xl"
                            onSubmit={e => { e.preventDefault(); sendMessage(input); }}
                        >
                            <input
                                className="flex-1 min-w-0 rounded-full border border-navy/20 px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-silver/30"
                                placeholder="Type your question..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="flex-shrink-0 bg-accent-blue text-white rounded-full p-2.5 font-semibold hover:bg-navy transition-all duration-200 hover:scale-105 shadow-md"
                                aria-label="Send message"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
