import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Globe, Users } from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, delay, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between h-full group hover:border-zinc-700 transition-colors"
    >
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            {children}
        </div>

        <div>
            <div className="text-3xl font-bold text-white mb-1 tracking-tight">{value}</div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">{label}</div>
            <div className="text-xs text-primary flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {subtext}
            </div>
        </div>
    </motion.div>
);

export default function ImpactStats() {
    return (
        <section className="py-32 border-y border-zinc-900 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <StatCard
                        label="Tons Processed"
                        value="50,240"
                        subtext="+12% this month"
                        icon={Activity}
                        delay={0}
                    >
                        {/* Simple Sparkline SVG */}
                        <svg className="w-20 h-10 text-primary opacity-50" viewBox="0 0 100 50">
                            <path d="M0 40 Q 25 40 35 20 T 70 30 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </StatCard>

                    <StatCard
                        label="Global Uptime"
                        value="99.99%"
                        subtext="Uninterrupted service"
                        icon={Globe}
                        delay={0.1}
                    >
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-1 h-6 bg-primary/40 rounded-full" />
                            ))}
                        </div>
                    </StatCard>

                    <StatCard
                        label="Active Nodes"
                        value="12,405"
                        subtext="Expanding network"
                        icon={Users}
                        delay={0.2}
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-zinc-800 border-2 border-zinc-900" />
                            ))}
                        </div>
                    </StatCard>

                    <StatCard
                        label="Carbon Offset"
                        value="-450T"
                        subtext="Net negative impact"
                        icon={Leaf}
                        delay={0.3}
                    >
                        <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-primary" />
                        </div>
                    </StatCard>

                </div>
            </div>
        </section>
    );
}

// Helper for the last card
import { Leaf } from 'lucide-react';
