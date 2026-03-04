"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronDown, Target, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const roleplays = [
    {
        cat: 'A', n: 1, title: 'Starting Class Confidently', obj: 'Greet, take attendance, introduce topic', lines: [
            { sp: 'Teacher', t: "Good morning, everyone. Please stand up. Good morning!" },
            { sp: 'Students', t: "Good morning, ma'am!" },
            { sp: 'Teacher', t: "Please sit down. Let me take attendance. Raju?" },
            { sp: 'Student', t: "Present, ma'am." },
            { sp: 'Teacher', t: "Rina is absent. Does anyone know why?" },
            { sp: 'Student', t: "She is sick, ma'am." },
            { sp: 'Teacher', t: "Open your books to page thirty-two. Today we learn about adjectives." }
        ]
    },
    {
        cat: 'A', n: 2, title: 'Student Arrives Late', obj: 'Handle lateness calmly and firmly', lines: [
            { sp: 'Teacher', t: "Yes? Come in." },
            { sp: 'Student', t: "Sorry ma'am, I am late." },
            { sp: 'Teacher', t: "Why are you late today?" },
            { sp: 'Student', t: "The bus was delayed, ma'am." },
            { sp: 'Teacher', t: "I understand, but please leave home earlier next time. Sit down and catch up." }
        ]
    },
    {
        cat: 'B', n: 4, title: 'Students Talking in Class', obj: 'Address disruption firmly but professionally', lines: [
            { sp: 'Teacher', t: "Class, there are far too many side conversations going on." },
            { sp: 'Teacher', t: "Is there something more important than this lesson?" },
            { sp: 'Students', t: "No, ma'am." },
            { sp: 'Teacher', t: "Then let us please focus. I will not repeat myself." }
        ]
    },
    {
        cat: 'D', n: 9, title: 'Concerned Parent Meeting', obj: 'Handle a worried parent with professionalism', lines: [
            { sp: 'Parent', t: "My son says he does not understand anything in class." },
            { sp: 'Teacher', t: "Thank you for coming. He is bright but needs to ask more questions." },
            { sp: 'Teacher', t: "I suggest thirty minutes of reading at home daily. Can we meet again in two weeks?" },
            { sp: 'Parent', t: "Yes, of course." },
            { sp: 'Teacher', t: "I will keep you updated by phone. Thank you for your support." }
        ]
    },
    // Adding more from the extracted data...
    {
        cat: 'E', n: 11, title: 'Staff Meeting Contribution', obj: 'Speak confidently in a professional meeting', lines: [
            { sp: 'Teacher', t: "May I share a suggestion? I have noticed students struggle with reading comprehension." },
            { sp: 'Teacher', t: "I propose five minutes of silent reading at the start of every class." },
            { sp: 'Principal', t: "That is an excellent idea. Let us trial it next week." }
        ]
    }
];

const categories = [
    { id: 'all', name: 'All Situations' },
    { id: 'A', name: 'Starting Class' },
    { id: 'B', name: 'Discipline' },
    { id: 'D', name: 'Parent Meetings' },
    { id: 'E', name: 'Staff Meetings' },
];

export function RoleplayScenarios() {
    const [activeTab, setActiveTab] = useState('all');
    const [openId, setOpenId] = useState<number | null>(null);

    const filteredRoleplays = activeTab === 'all'
        ? roleplays
        : roleplays.filter(rp => rp.cat === activeTab);

    return (
        <section id="roleplay" className="scroll-mt-24">
            <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100">
                    <Users size={14} />
                    Collaborative Practice
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Real-Life Roleplays
                </h2>
                <p className="text-slate-600 text-lg">
                    Practice essential classroom dialogues. These scenarios help you transform theory into confident speech.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={cn(
                            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all border",
                            activeTab === cat.id
                                ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-200"
                                : "bg-white text-slate-600 border-slate-200 hover:border-purple-300 hover:text-purple-600"
                        )}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
                {filteredRoleplays.map((rp) => (
                    <div
                        key={rp.n}
                        className={cn(
                            "bg-white border rounded-3xl overflow-hidden transition-all",
                            openId === rp.n ? "border-purple-600 shadow-xl shadow-purple-500/5" : "border-slate-100 shadow-sm"
                        )}
                    >
                        <button
                            onClick={() => setOpenId(openId === rp.n ? null : rp.n)}
                            className="w-full px-8 py-6 flex items-center justify-between text-left group"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 font-bold group-hover:scale-110 transition-transform">
                                    {rp.n}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                        {rp.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm font-medium">Category {rp.cat}</p>
                                </div>
                            </div>
                            <ChevronDown
                                size={24}
                                className={cn("text-slate-400 transition-transform duration-300", openId === rp.n && "rotate-180")}
                            />
                        </button>

                        <AnimatePresence>
                            {openId === rp.n && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-8 pb-8">
                                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-4 mb-6">
                                            {rp.lines.map((line, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <span className="font-bold text-slate-900 min-w-[80px] text-sm uppercase tracking-wider pt-1">
                                                        {line.sp}:
                                                    </span>
                                                    <span className="text-slate-700 italic text-lg leading-relaxed">
                                                        "{line.t}"
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-purple-600 font-bold">
                                            <Target size={18} />
                                            Objective: <span className="text-slate-600 font-medium">{rp.obj}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
