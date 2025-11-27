import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, MapPin, Activity } from 'lucide-react';

const FloatingCard = ({ icon: Icon, label, value, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        className={`absolute hidden lg:flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl ${className}`}
    >
        <div className="p-2 bg-zinc-800 rounded-xl">
            <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
            <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{label}</div>
            <div className="text-sm font-bold text-white">{value}</div>
        </div>
    </motion.div>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-background">

            {/* Abstract Background Element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-gradient-to-b from-zinc-900 to-black rounded-full blur-3xl opacity-50" />
                <div className="absolute w-[600px] h-[600px] border border-zinc-800 rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[400px] h-[400px] border border-zinc-800 rounded-full opacity-20 animate-[spin_40s_linear_infinite_reverse]" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* Floating Cards */}
            <FloatingCard
                icon={Truck}
                label="Fleet Status"
                value="12 Trucks Active"
                className="top-32 left-[15%]"
                delay={1.2}
            />
            <FloatingCard
                icon={MapPin}
                label="Nearest Pickup"
                value="2 mins away"
                className="bottom-40 right-[15%]"
                delay={1.4}
            />
            <FloatingCard
                icon={Activity}
                label="System Load"
                value="Optimal (98%)"
                className="top-40 right-[20%]"
                delay={1.6}
            />

            <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block"
                >
                    <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        SYSTEM ONLINE v2.4
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.9]"
                >
                    WASTE <br />
                    <span className="text-zinc-800">REDEFINED</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto font-light"
                >
                    The future of logistics is clean, efficient, and intelligent.
                    EcoSync optimizes collection routes in real-time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                >
                    <button className="group bg-primary text-black px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 flex items-center gap-2">
                        Start Integration
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="text-zinc-400 hover:text-white px-8 py-4 text-lg font-medium transition-colors">
                        View Documentation
                    </button>
                </motion.div>
            </div>

            {/* Bottom Ticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-0 left-0 right-0 h-12 bg-zinc-900/50 border-t border-zinc-800 flex items-center overflow-hidden"
            >
                <div className="flex gap-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap px-4">
                    {[...Array(5)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-xs font-mono text-zinc-500 uppercase flex items-center gap-2">
                                <Activity className="w-3 h-3 text-primary" />
                                Real-time tracking enabled
                            </span>
                            <span className="text-xs font-mono text-zinc-500 uppercase flex items-center gap-2">
                                <Truck className="w-3 h-3 text-primary" />
                                Fleet efficiency +24%
                            </span>
                            <span className="text-xs font-mono text-zinc-500 uppercase flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-primary" />
                                New coverage zones added
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </section >
    );
}
