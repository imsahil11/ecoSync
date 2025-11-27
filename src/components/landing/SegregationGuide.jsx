import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Zap, Trash2, ArrowUpRight, Tag, Info } from 'lucide-react';

const BentoCard = ({ title, desc, icon: Icon, className, delay, tags }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`group relative bg-zinc-900/50 border border-zinc-800/50 p-8 rounded-3xl overflow-hidden hover:bg-zinc-900 transition-colors ${className}`}
    >
        {/* Background Pattern */}
        <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className="w-64 h-64 text-white rotate-12" />
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="p-2 bg-white rounded-full">
                <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
        </div>

        <div className="h-full flex flex-col justify-between relative z-10">
            <div>
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 border border-zinc-700">
                    <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{desc}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs font-medium text-zinc-300 flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default function SegregationGuide() {
    return (
        <section id="guide" className="py-32 px-4 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            INTELLIGENT <span className="text-zinc-800">SORTING</span>
                        </h2>
                        <p className="text-zinc-500 max-w-md">
                            Our AI-driven classification system ensures 99.9% sorting accuracy,
                            maximizing resource recovery and minimizing landfill impact.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-white border-b border-zinc-800 pb-1 hover:border-primary transition-colors">
                        Download Guidelines <Info className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[450px]">
                    {/* Large Card */}
                    <BentoCard
                        className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950"
                        title="Organic Matter"
                        desc="Biodegradable waste processing via anaerobic digestion. Optimized for compost generation and biogas production."
                        icon={Leaf}
                        delay={0}
                        tags={["Food Scraps", "Garden Waste", "Compostable"]}
                    />

                    {/* Tall Card */}
                    <BentoCard
                        className="md:row-span-2 bg-zinc-900"
                        title="E-Waste Recovery"
                        desc="Specialized extraction of rare earth metals and circuit components. Zero landfill policy for all electronics."
                        icon={Zap}
                        delay={0.2}
                        tags={["Batteries", "Circuits", "Phones", "Cables"]}
                    />

                    {/* Regular Card */}
                    <BentoCard
                        title="Recyclables"
                        desc="Automated sorting of plastics, metals, and paper products using optical sensors."
                        icon={Recycle}
                        delay={0.1}
                        tags={["Plastics", "Paper", "Glass", "Metals"]}
                    />

                    {/* Regular Card */}
                    <BentoCard
                        title="Hazardous"
                        desc="Secure containment and neutralization of chemical byproducts and medical waste."
                        icon={Trash2}
                        delay={0.3}
                        tags={["Medical", "Chemicals", "Sharps"]}
                    />
                </div>
            </div>
        </section>
    );
}
