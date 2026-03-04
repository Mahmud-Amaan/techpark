"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const curriculum = [
    {
        day: 1,
        title: "Greetings & Introductions",
        description: "First day in class, introducing yourself to students and colleagues.",
        topics: ["Simple Present", "To Be"],
        color: "from-blue-600 to-cyan-500",
    },
    {
        day: 2,
        title: "Giving Instructions",
        description: "Classroom commands, directing students effectively and clearly.",
        topics: ["Imperatives", "Modal Verbs"],
        color: "from-cyan-500 to-emerald-500",
    },
    {
        day: 3,
        title: "Classroom Situations",
        description: "Managing attendance, late students, and homework checking.",
        topics: ["Present Continuous"],
        color: "from-emerald-500 to-lime-500",
    },
    {
        day: 4,
        title: "Handling Disrespect & Public Challenges",
        description: "Protecting authority without losing composure during challenges.",
        topics: ["Authority", "Control"],
        color: "from-orange-500 to-amber-500",
    },
    {
        day: 5,
        title: "Handling Emotional Students",
        description: "Emotional intelligence, compassion, and professional boundaries.",
        topics: ["EQ", "Boundaries"],
        color: "from-purple-500 to-pink-500",
    },
    {
        day: 6,
        title: "Parent Confrontations",
        description: "Professional communication under pressure with difficult parents.",
        topics: ["Communication", "Conflict"],
        color: "from-pink-500 to-rose-500",
    },
    {
        day: 7,
        title: "Classroom Culture",
        description: "Building long-term respect and preventing problems by design.",
        topics: ["Culture", "Leadership"],
        color: "from-blue-500 to-indigo-500",
    },
    {
        day: 8,
        title: "Psychological Leadership",
        description: "Silent authority, physical positioning, and teacher presence.",
        topics: ["Presence", "Influence"],
        color: "from-cyan-500 to-blue-500",
    },
    {
        day: 9,
        title: "Advanced Influence & Motivation",
        description: "Inspiring effort without fear and motivating difficult students.",
        topics: ["Influence", "Motivation"],
        color: "from-emerald-600 to-teal-800",
    },
    {
        day: 10,
        title: "Assessment & Reflection",
        description: "Self-evaluation and final teaching demonstration.",
        topics: ["Public Speaking", "Review"],
        color: "from-amber-500 to-orange-700",
    },
];

export function Curriculum() {
    return (
        <section id="curriculum" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                        <Calendar size={14} />
                        Study Plan
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        10-Day Intensive Curriculum
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Each day targets a specific classroom situation with dedicated grammar, vocabulary, and roleplay practice.
                    </p>
                </div>
                <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors hidden md:block">
                    Download Full PDF
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculum.map((day, i) => (
                    <Link
                        key={day.day}
                        href={`/curriculum/${day.day}`}
                        className="block group"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all overflow-hidden h-full"
                        >
                            {/* Background Accent */}
                            <div className={cn(
                                "absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br",
                                day.color
                            )} />

                            <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg bg-gradient-to-br",
                                day.color
                            )}>
                                {day.day}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors text-balance">
                                {day.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                {day.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {day.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-tight rounded-full border border-slate-100"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mt-auto">
                                Explore Day {day.day}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
