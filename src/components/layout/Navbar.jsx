import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none`}
            >
                <div className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${scrolled
                        ? 'bg-zinc-900/80 backdrop-blur-md border-zinc-800 shadow-2xl w-full max-w-5xl'
                        : 'bg-transparent border-transparent w-full max-w-7xl'
                    }`}>

                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="relative w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden group-hover:border-primary transition-colors">
                            <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-[spin_3s_linear_infinite]" />
                            <div className="absolute w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <span className="font-bold tracking-tight text-lg group-hover:text-white transition-colors">ecoSync</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Mission', 'Guide', 'Impact', 'Login'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            className="absolute top-8 right-8 text-zinc-500 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {['Mission', 'Guide', 'Impact', 'Login'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-bold text-white hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
