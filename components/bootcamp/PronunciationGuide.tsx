"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic2, Music, Zap, Volume2 } from "lucide-react";

const tips = [
    {
        title: "Word Stress",
        description: "English is a stress-timed language. Emphasize the important words in a sentence.",
        icon: Music,
        color: "bg-blue-50 text-blue-600",
        example: "I am TEACHing the LESson.",
    },
    {
        title: "Connected Speech",
        description: "Words often blend together. 'Going to' becomes 'gonna', 'want to' becomes 'wanna'.",
        icon: Zap,
        color: "bg-orange-50 text-orange-600",
        example: "I'm gonna open the window.",
    },
    {
        title: "Intonation",
        description: "Rising intonation for yes/no questions. Falling intonation for statements.",
        icon: Volume2,
        color: "bg-purple-50 text-purple-600",
        example: "Do you have your BOOKS? (Rise)",
    },
    {
        title: "Phonetic Awareness",
        description: "Mastering the 'th', 'v', and 'f' sounds is crucial for clear Bengali-English.",
        icon: Mic2,
        color: "bg-emerald-50 text-emerald-600",
        example: "THese THree THings are free.",
    },
];

export function PronunciationGuide() {
    return (
        <section id="pronunciation" className="scroll-mt-24">
            <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-100">
                    <Mic2 size={14} />
                    Fluency Training
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Pronunciation & Fluency Tips
                </h2>
                <p className="text-slate-600 text-lg">
                    Master the rhythm, stress, and intonation of English to sound more natural and confident in the classroom.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip, i) => (
                    <motion.div
                        key={tip.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all group"
                    >
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", tip.color)}>
                            <tip.icon size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">{tip.title}</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            {tip.description}
                        </p>

                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Example</span>
                            <p className="text-slate-700 font-medium italic text-sm">{tip.example}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

import { cn } from "@/lib/utils";
