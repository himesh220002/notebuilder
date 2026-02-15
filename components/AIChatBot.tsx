'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Minus, Maximize2, Minimize2, Square } from 'lucide-react';
import MathText from './MathText';
import ChatMessageContent from './ChatMessageContent';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

export default function AIChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: "Hello! I'm your AI learning assistant. How can I help you with Class 11 Applied Mathematics today?" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [requestCount, setRequestCount] = useState(0);
    const [dailyLimit, setDailyLimit] = useState(20);
    const [lastResetDate, setLastResetDate] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    // Load and reset usage limit
    useEffect(() => {
        const storedCount = localStorage.getItem('chatbot_request_count');
        const storedDate = localStorage.getItem('chatbot_last_reset_date');
        const storedLimit = localStorage.getItem('chatbot_daily_limit');
        const today = new Date().toLocaleDateString();

        if (storedDate !== today) {
            localStorage.setItem('chatbot_request_count', '0');
            localStorage.setItem('chatbot_last_reset_date', today);
            setRequestCount(0);
            setLastResetDate(today);
        } else {
            setRequestCount(Number(storedCount) || 0);
            setLastResetDate(storedDate || today);
        }

        if (storedLimit) {
            setDailyLimit(Number(storedLimit));
        }
    }, []);

    // Helper to increment usage
    const incrementUsage = (actualCount?: number, actualLimit?: number) => {
        const newCount = actualCount !== undefined ? actualCount : requestCount + 1;
        setRequestCount(newCount);
        localStorage.setItem('chatbot_request_count', newCount.toString());

        if (actualLimit !== undefined) {
            setDailyLimit(actualLimit);
            localStorage.setItem('chatbot_daily_limit', actualLimit.toString());
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen, isMinimized, isMaximized, isLoading]);

    const handleStop = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
            setIsLoading(false);
            setMessages(prev => [...prev.slice(0, -1), { role: 'bot', content: "Generation stopped." }]);
        }
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading || requestCount >= dailyLimit) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        const controller = new AbortController();
        abortControllerRef.current = controller;

        // Extract page context
        const mainContent = document.getElementById('main-content');
        const pageContext = mainContent ? mainContent.innerText.slice(0, 5000) : ''; // Limit to 5k chars for safety

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    context: pageContext,
                    history: messages.slice(-6).map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.content }))
                }),
                signal: controller.signal
            });

            const data = await response.json();

            // Sync quota if provided in error or success
            if (data.quotaInfo) {
                incrementUsage(data.quotaInfo.current, data.quotaInfo.limit);
            }

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'bot', content: data.reply }]);
                if (!data.quotaInfo) incrementUsage();
            } else if (response.status === 429 || data.quotaInfo) {
                const limitMsg = data.quotaInfo
                    ? `Daily limit reached (${data.quotaInfo.current}/${data.quotaInfo.limit}). Please try again tomorrow.`
                    : "Daily limit reached. Please try again tomorrow.";
                setMessages(prev => [...prev, { role: 'bot', content: limitMsg }]);
            } else {
                setMessages(prev => [...prev, { role: 'bot', content: data.message || "I'm sorry, I encountered an error. Please try again later." }]);
            }
        } catch (error: any) {
            if (error.name === 'AbortError') return;
            setMessages(prev => [...prev, { role: 'bot', content: "Connection error. Please check your internet and try again." }]);
        } finally {
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    };

    // Calculate window size based on state
    const getWindowStyles = () => {
        if (isMinimized) return { height: '64px', width: 'min(300px, 80vw)' };
        if (isMaximized) return { height: 'min(800px, 90vh)', width: 'min(1200px, 70vw)' };
        return { height: 'min(640px, 85vh)', width: 'min(420px, 90vw)' };
    };

    const windowStyles = getWindowStyles();

    return (
        <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] font-sans pointer-events-none transition-all duration-300 ${isMaximized ? 'w-full h-full flex items-end justify-end p-6' : ''}`}>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Invisible Backdrop to detect clicks outside */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[-1] pointer-events-auto cursor-default bg-black/5 backdrop-blur-[2px]"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                ...windowStyles
                            }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col mb-4 pointer-events-auto relative"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-4 shrink-0 text-white flex items-center justify-between shadow-lg z-10">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xs md:text-sm tracking-tight italic">Math Assistant</h3>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                            <span className="text-[9px] md:text-[10px] font-bold opacity-80 uppercase tracking-widest">Active Now</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    {!isMinimized && (
                                        <button
                                            onClick={() => setIsMaximized(!isMaximized)}
                                            className="hidden sm:flex p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors"
                                            aria-label={isMaximized ? "Normalize chat" : "Maximize chat"}
                                        >
                                            {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                        </button>
                                    )}
                                    <button
                                        onClick={() => {
                                            setIsMinimized(!isMinimized);
                                            if (!isMinimized) setIsMaximized(false);
                                        }}
                                        className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors"
                                        aria-label={isMinimized ? "Open chat" : "Minimize to header"}
                                    >
                                        {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors"
                                        aria-label="Close assistant"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {!isMinimized && (
                                <>
                                    {/* Messages Area */}
                                    <div
                                        ref={scrollRef}
                                        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50/50 custom-scrollbar"
                                    >
                                        {messages.map((msg, idx) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                key={idx}
                                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                                            >
                                                {msg.role === 'bot' && (
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border border-indigo-200 shadow-sm">
                                                        <Bot className="w-4 h-4 text-indigo-600" />
                                                    </div>
                                                )}
                                                <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl md:rounded-3xl text-sm font-medium shadow-sm border ${msg.role === 'user'
                                                    ? 'bg-indigo-600 text-white border-indigo-500 rounded-br-none'
                                                    : 'bg-white text-slate-700 border-slate-100 rounded-bl-none'
                                                    }`}>
                                                    <ChatMessageContent content={msg.content} />
                                                </div>
                                                {msg.role === 'user' && (
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 border border-slate-300 shadow-sm">
                                                        <User className="w-4 h-4 text-slate-600" />
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                        {isLoading && (
                                            <div className="flex justify-start items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center animate-bounce">
                                                    <Bot className="w-4 h-4 text-indigo-600" />
                                                </div>
                                                <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 shadow-sm flex gap-1">
                                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-3 md:p-4 bg-white border-t border-slate-100 shrink-0">
                                        <div className="flex gap-2 bg-slate-100 p-1.5 md:p-2 rounded-xl md:rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                                            <input
                                                type="text"
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                                placeholder="Ask math concepts..."
                                                disabled={isLoading}
                                                className="flex-1 bg-transparent px-2 md:px-4 py-1.5 md:py-2 border-none outline-none text-sm font-bold text-slate-700 placeholder:text-slate-400 disabled:opacity-50"
                                            />
                                            {isLoading ? (
                                                <button
                                                    onClick={handleStop}
                                                    className="bg-rose-500 text-white p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-rose-600 transition-all shadow-md group animate-pulse"
                                                    aria-label="Stop generating"
                                                >
                                                    <Square className="w-4 h-4 fill-current" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleSend}
                                                    disabled={isLoading || !input.trim() || requestCount >= dailyLimit}
                                                    className="bg-indigo-600 text-white p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:scale-95 transition-all shadow-md group"
                                                    aria-label="Send message"
                                                >
                                                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </button>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between px-1 mt-2">
                                            <p className={`text-[10px] font-bold uppercase tracking-wider ${requestCount >= dailyLimit ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`}>
                                                {requestCount >= dailyLimit ? 'Daily limit reached' : `Requests: ${requestCount}/${dailyLimit}`}
                                            </p>
                                            <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                                <Sparkles className="w-2.5 h-2.5" /> Powered by Gemini
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                animate={{
                    x: isOpen ? -10 : 0,
                    scale: isOpen ? 1.1 : 1,
                    rotate: isOpen ? 90 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setIsMinimized(false);
                }}
                className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl hover:shadow-indigo-500/30 transition-shadow relative group overflow-hidden border-4 border-white pointer-events-auto"
                aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
            >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    <AnimatePresence initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, x: -20, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, rotate: 90, scale: 0.5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute inset-0 z-10 flex items-center justify-center"
                            >
                                <X className="w-full h-full" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ opacity: 0, x: 20, rotate: 90, scale: 0.5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, rotate: -90, scale: 0.5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute inset-0 z-10 flex items-center justify-center"
                            >
                                <Bot className="w-full h-full" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-rose-500 rounded-full border-2 border-white"
                />
            </motion.button>
        </div>
    );
}
