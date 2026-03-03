import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

// ─── Groq API (Groq supports browser CORS natively) ──────────────────────────
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const MODEL = 'llama-3.1-8b-instant';

// ─── System Prompt: rich structured HTML output ───────────────────────────────
const SYSTEM_PROMPT = `You are DS Bot, the friendly AI assistant for DS STEM LAB — India's premier Robotics & STEM education lab.

STRICT OUTPUT RULES — MUST FOLLOW EXACTLY:
1. Max 90 words per reply. No essays.
2. NEVER use markdown. No **asterisks**, no #headings, no - dash bullets, no * star bullets.
3. Use ONLY these HTML tags: <strong>, <br/>, <ul>, <li>. Nothing else.
4. Always <strong>bold</strong> the key terms, names, numbers and important words in every response.
5. For any answer with 2+ items, ALWAYS list them as <ul><li>…</li></ul> — never inline.
6. Max 5 <li> items per list.
7. Structure: 1 short intro line → then the list or details. Never just dump everything in one line.
8. End with a contact tip only when the user asks about fees/enrollment/contact.
9. 1–2 emojis per reply max.

FORMAT TEMPLATES — pick the right one for each question:

[LIST answers — locations, services, events, projects, equipment]
<strong>Our 3 Office Locations</strong> 📍<br/>We serve students PAN India from these offices:<br/><ul><li><strong>Patna HQ</strong> — 102 Kamla Vihar, Bihar 801503</li><li><strong>Panchkula</strong> — Sundra Ramgarh Chowk, Haryana</li><li><strong>Rohtak</strong> — Hafed Chowk, Haryana 124001</li></ul>

[COURSES answer]
<strong>Course Levels</strong> 🤖<br/>Progressive learning for <strong>Grade 1–12</strong>:<br/><ul><li><strong>Level 1 – Mechano:</strong> Robot cars, helicopters, cranes</li><li><strong>Level 2 – Electronics:</strong> Circuits, IoT & automation</li><li><strong>Level 3 – Advanced:</strong> 3D printing & drone tech</li></ul>

[CONTACT / ENROLL answer]
<strong>Reach Us</strong> 📞<br/>We'd love to help you enroll:<br/><ul><li>📞 <strong>+91 7004547034</strong></li><li>💬 WhatsApp: <strong>+91 9534527757</strong></li><li>📧 <strong>ds.stemlab@gmail.com</strong></li><li>🌐 <strong>www.dstemlab.co.in</strong></li></ul>

[SINGLE-TOPIC answer — fees, timing, certs, about]
<strong>Fees & Pricing</strong> 💰<br/>Course fees vary by program. <strong>ATL lab setup</strong> costs <strong>₹5–30 lakhs</strong> depending on scope. Flexible payment options available.<br/>📞 Call <strong>+91 7004547034</strong> for a custom quote.

KNOWLEDGE BASE:
ABOUT: DS STEM LAB — Robotics & Research Lab | A.I. & Coding. Mission: "Children must be taught how to think, not what to think." 62,000+ students. www.dstemlab.co.in. Brochure: /assets/DS Stem Lab Redesign.pdf
CONTACT: Phone: +91 7004547034 | WhatsApp: +91 9534527757 | Email: ds.stemlab@gmail.com | Instagram/Facebook: @dsstemlab | LinkedIn: Rajnish Sharma
LOCATIONS: Patna HQ (102 Kamla Vihar, Bihar 801503) | Panchkula Haryana (Sundra Ramgarh Chowk) | Rohtak Haryana (Hafed Chowk 124001) | Services PAN India
SERVICES: ATL Lab Setup (NITI Aayog) | Composite Skill Labs (Robotics, Space Tech, AI) | Online 1:1 STEAM classes | Teacher Training (Python, Robotics, AI, Coding) | Skill Enhancement & 3Cs Report Cards | Technical Consultation (ERP, Smart Panels) | Camps & Events (Marathons, Exhibitions, Hackathons)
COURSES: Level 1 Mechano — Basic (Robot cars, Helicopters, Cranes, Rockets, Ships) & Advanced (Engineering design, device systems) | Level 2 Electronics — Snap Circuits (8yrs+), Breadboard circuits, Wireless/IoT automation | Level 3 Advanced — 3D Printing (CAD, prototyping) & Aero Modeling/Drones | For Grade 1–12
FEES: Vary by course and duration. ATL lab setup ₹5–30 lakhs. Flexible payment options. Contact for custom quote.
TIMING: Mon–Sat 9AM–6PM. Weekend batches available. Classes by age group & level.
ENROLL: Visit any office / Call +91 7004547034 / WhatsApp +91 9534527757 / Fill contact form on website
ATL: Full end-to-end setup — lab infrastructure, robotics & STEM equipment, curriculum development, teacher training, installation, ongoing support, NITI Aayog approval guidance
ONLINE: Personalized 1:1 live sessions, take-home learning kits, recorded sessions for revision, one-on-one mentorship
CERTS: Yes — on course completion. Project certs. Skill-based certs. Prep for national/international robotics competitions.
EQUIPMENT: Robotics kits (Arduino, Raspberry Pi), electronics components, 3D printers, take-home kits. No prior equipment needed.
PROJECTS: Building robots, line-following cars, home automation, IoT weather stations, game development, mobile apps, drones
EVENTS: Summer/Winter camps, robotics marathons, STEM exhibitions, coding hackathons, competition workshops`;

// ─── Markdown → clean HTML (safety net) ──────────────────────────────────────
function cleanResponse(raw) {
    return raw
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')   // **bold** → <strong>
        .replace(/\*(.+?)\*/g, '$1')                          // *italic* → plain
        .replace(/^#{1,6}\s+/gm, '')                          // # headings → stripped
        .replace(/^\s*[-*]\s+(.+)/gm, '<li>$1</li>')         // - bullet → <li>
        .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')     // wrap stray <li> in <ul>
        .replace(/<\/ul>\s*<ul>/g, '')                        // merge consecutive <ul>
        .replace(/\n{2,}/g, '<br/>')                          // blank lines → <br/>
        .replace(/\n/g, '<br/>')                              // single newline → <br/>
        .replace(/(<br\/>){3,}/g, '<br/><br/>')               // max 2 consecutive br
        .trim();
}

// ─── Quick Suggestion Chips ───────────────────────────────────────────────────
const SUGGESTIONS = [
    { label: '🤖 Courses', query: 'What courses does DS STEM LAB offer?' },
    { label: '🏫 ATL Lab', query: 'Tell me about ATL lab setup for schools' },
    { label: '📍 Locations', query: 'Where are your offices located?' },
    { label: '💰 Fees', query: 'What are the fees?' },
    { label: '👨‍🏫 Teacher Training', query: 'Tell me about teacher training programs' },
    { label: '💻 Online Classes', query: 'Do you offer online classes?' },
    { label: '📝 Enroll', query: 'How do I enroll in a course?' },
];

// ─── Typing Indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex justify-start items-end gap-2"
        >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-blue to-navy flex items-center justify-center flex-shrink-0">
                <Bot size={14} className="text-white" />
            </div>
            <div className="bg-white border border-navy/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                {[0, 1, 2].map(i => (
                    <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-accent-blue/60 rounded-full block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                    />
                ))}
            </div>
        </motion.div>
    );
}

// ─── Message Bubble ───────────────────────────────────────────────────────────
function MessageBubble({ message }) {
    const isBot = message.from === 'bot';
    return (
        <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-end gap-2`}
        >
            {isBot && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-blue to-navy flex items-center justify-center flex-shrink-0 mb-0.5 shadow-sm">
                    <Bot size={13} className="text-white" />
                </div>
            )}
            <div
                className={[
                    'text-sm leading-relaxed shadow-sm break-words',
                    'px-4 py-2.5 rounded-2xl',
                    isBot
                        ? 'bg-white text-navy border border-navy/10 rounded-tl-sm max-w-[82%] chat-bubble-bot'
                        : 'bg-gradient-to-br from-accent-blue to-blue-600 text-white rounded-br-sm max-w-[75%]',
                ].join(' ')}
                dangerouslySetInnerHTML={{ __html: message.html }}
            />
        </motion.div>
    );
}

// ─── Main SupportBot Component ────────────────────────────────────────────────
export default function SupportBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            from: 'bot',
            html: "👋 Hi! I'm <strong>DS Bot</strong> — your DS STEM LAB assistant.<br/>Ask me about courses, ATL labs, fees, locations & more!",
        }
    ]);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, loading]);

    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [open]);

    // Build the fetch payload (shared between attempts)
    function buildPayload(userMessage) {
        const history = messages.slice(-6).map(m => ({
            role: m.from === 'bot' ? 'assistant' : 'user',
            content: m.html.replace(/<[^>]*>/g, ''),
        }));
        return {
            model: MODEL,
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...history,
                { role: 'user', content: userMessage },
            ],
            temperature: 0.45,
            max_tokens: 350,
        };
    }

    // Single fetch attempt
    async function fetchGroq(userMessage) {
        const res = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify(buildPayload(userMessage)),
        });
        if (!res.ok) {
            const err = await res.text();
            throw new Error(`Groq ${res.status}: ${err}`);
        }
        const data = await res.json();
        const raw = data.choices[0]?.message?.content || 'Sorry, I could not process that.';
        return cleanResponse(raw);
    }

    // Calls Groq with 1 auto-retry on transient failure (network glitch, 429, 5xx)
    async function callGroq(userMessage) {
        try {
            return await fetchGroq(userMessage);
        } catch (firstErr) {
            console.warn('Groq first attempt failed, retrying…', firstErr.message);
            // Wait 1.2s then try once more
            await new Promise(r => setTimeout(r, 1200));
            return await fetchGroq(userMessage); // throws if still failing
        }
    }

    async function sendMessage(msg) {
        const text = (msg || input).trim();
        if (!text || loading) return;
        setInput('');
        setMessages(prev => [...prev, { from: 'user', html: text }]);
        setLoading(true);
        try {
            const html = await callGroq(text);
            setMessages(prev => [...prev, { from: 'bot', html }]);
        } catch (err) {
            console.error('Groq error:', err);
            setMessages(prev => [
                ...prev,
                {
                    from: 'bot',
                    html: "Connection issue. Reach us directly:<br/>📞 <strong>+91 7004547034</strong><br/>📧 <strong>ds.stemlab@gmail.com</strong>",
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    }

    return (
        <>
            {/* ── Mobile backdrop overlay when chat open ────────────── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/30 sm:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* ── Floating Trigger Button ───────────────────────────── */}
            <AnimatePresence>
                {!open && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50"
                    >
                        {/* Pulse ring */}
                        <motion.div
                            animate={{ scale: [1, 1.55, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2.8, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-accent-blue"
                        />
                        <button
                            onClick={() => setOpen(true)}
                            className="relative flex items-center gap-2 bg-gradient-to-br from-accent-blue to-navy text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300
                                       px-3 py-3 sm:px-5 sm:py-3.5"
                            aria-label="Chat with DS Bot"
                        >
                            <Sparkles size={18} className="animate-pulse" />
                            {/* Label hidden on very small phones, shown on sm+ */}
                            <span className="hidden xs:inline sm:inline font-display font-bold text-sm">
                                Chat with DS Bot
                            </span>
                            <MessageCircle size={18} className="sm:inline" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Chat Window ──────────────────────────────────────── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="chat-window"
                        data-dschat="true"
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: 'spring', stiffness: 340, damping: 32 }}
                        className={
                            "fixed z-50 flex flex-col overflow-hidden shadow-2xl " +
                            "bottom-0 left-0 right-0 rounded-t-2xl border border-navy/10 " +
                            "sm:bottom-6 sm:right-6 sm:left-auto sm:w-[370px] sm:rounded-2xl"
                        }
                        style={{ height: '92dvh' }}
                    >

                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-navy to-accent-blue flex-shrink-0">
                            <div className="flex items-center gap-2.5">
                                <div className="relative">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                                        <img src="/dslab_logo.png" alt="DS STEM LAB" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-navy" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-white text-sm leading-tight">DS Bot ✨</h3>
                                    <p className="text-[10px] text-white/65 font-body">DS STEM LAB · AI Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages — touch & trackpad scrollable */}
                        <div
                            ref={chatRef}
                            className="flex-1 overflow-y-scroll px-3 py-3 space-y-2.5 bg-slate-50"
                            style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
                        >
                            <AnimatePresence initial={false}>
                                {messages.map((m, i) => <MessageBubble key={i} message={m} />)}
                            </AnimatePresence>
                            <AnimatePresence>{loading && <TypingIndicator />}</AnimatePresence>
                        </div>

                        {/* Suggestions — horizontal scroll on mobile, wrap on desktop */}
                        <div className="flex-shrink-0 bg-white border-t border-slate-100 px-3 pt-2 pb-1.5">
                            <p className="text-[9px] font-body text-navy/30 font-semibold uppercase tracking-widest mb-1.5">
                                Quick Questions
                            </p>
                            {/* Mobile: single scrollable row | Desktop: wrap */}
                            <div
                                className="flex gap-1.5 overflow-x-auto sm:flex-wrap sm:overflow-x-visible pb-1"
                                style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
                            >
                                {SUGGESTIONS.map(s => (
                                    <motion.button
                                        key={s.label}
                                        whileTap={{ scale: 0.93 }}
                                        onClick={() => sendMessage(s.query)}
                                        disabled={loading}
                                        className="flex-shrink-0 bg-slate-100 border border-navy/10 text-navy/70 rounded-full px-3 py-1 text-[11px] sm:text-[10.5px] font-body font-medium hover:bg-accent-blue hover:text-white hover:border-accent-blue active:bg-accent-blue active:text-white transition-all duration-200 whitespace-nowrap disabled:opacity-50"
                                    >
                                        {s.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="flex-shrink-0 px-3 py-2.5 bg-white border-t border-navy/10">
                            <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 border border-navy/10 focus-within:border-accent-blue focus-within:bg-white transition-all">
                                <input
                                    ref={inputRef}
                                    className="flex-1 min-w-0 bg-transparent text-sm font-body text-navy placeholder:text-navy/35 focus:outline-none"
                                    placeholder={loading ? 'Thinking…' : 'Ask me anything…'}
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    disabled={loading}
                                    maxLength={400}
                                />
                                <motion.button
                                    whileTap={{ scale: 0.88 }}
                                    onClick={() => sendMessage()}
                                    disabled={loading || !input.trim()}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${input.trim() && !loading
                                        ? 'bg-accent-blue text-white shadow'
                                        : 'bg-navy/10 text-navy/30 cursor-not-allowed'
                                        }`}
                                    aria-label="Send"
                                >
                                    {loading ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                            className="w-4 h-4 border-2 border-navy/20 border-t-accent-blue rounded-full"
                                        />
                                    ) : (
                                        <Send size={14} />
                                    )}
                                </motion.button>
                            </div>
                            <p className="text-[8.5px] text-center text-navy/20 font-body mt-1">
                                Powered by Groq AI · DS STEM LAB
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop height override — sm screens get fixed popup height */}
            <style>{`
                @media (min-width: 640px) {
                    [data-dschat="true"] {
                        height: min(560px, 88vh) !important;
                    }
                }
                .chat-bubble-bot ul {
                    margin: 5px 0 3px 0;
                    padding-left: 1.1rem;
                    list-style: disc;
                }
                .chat-bubble-bot li {
                    margin-bottom: 3px;
                    line-height: 1.5;
                }
                .chat-bubble-bot strong { color: #0a1628; }
                /* hide scrollbar on suggestion strip */
                div::-webkit-scrollbar { display: none; }
            `}</style>
        </>
    );
}
