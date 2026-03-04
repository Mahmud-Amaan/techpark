"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const homeworkSheets = [
    { d: 1, title: 'Introductions', topic: 'Simple Present + To Be', color: 'bg-blue-600', tasks: ["Write a self-introduction in 10 sentences", "List 5 things about your classroom", "Record a 1-minute audio", "Practise in front of a mirror"] },
    { d: 2, title: 'Giving Instructions', topic: 'Imperatives + Modals', color: 'bg-cyan-500', tasks: ["Write 30 instruction sentences", "Practise in front of a mirror (5 mins)", "List 10 behavior phrases", "Translate 5 common commands"] },
    { d: 3, title: 'Classroom Situations', topic: 'Present Continuous', color: 'bg-emerald-500', tasks: ["Meeting a late student dialogue", "10 sentences using present continuous", "Roleplay: attendance checking", "Write what to say for sick student"] },
    { d: 4, title: 'Discipline', topic: 'Modals: Must, Should', color: 'bg-orange-600', tasks: ["Write 10 discipline phrases", "Create a rules poster", "Practise Roleplay 4 and 5", "Mobile phone scenario response"] },
    { d: 5, title: 'Praise', topic: 'Adjectives + Exclamations', color: 'bg-purple-600', tasks: ["List 15 praise phrases", "Motivational speech for class", "Practise exclamations out loud", "Encourage struggling student"] },
    { d: 6, title: 'Parent Meetings', topic: 'Simple Past + Polite English', color: 'bg-pink-600', tasks: ["Parent meeting dialogue (10 lines)", "5 polite introduction phrases", "Write a brief note home", "Record parent meeting roleplay"] },
    { d: 7, title: 'Advanced Scenarios', topic: 'Reported Speech + Future', color: 'bg-indigo-600', tasks: ["Staff meeting contribution", "5 reported speech examples", "Practise suggestion phrases", "3-sentence lesson plan intro"] },
    { d: 8, title: 'Pronunciation', topic: 'Stress + Intonation', color: 'bg-cyan-600', tasks: ["Practise 20 words with stress", "Record 5 intonation sentences", "Practise connected speech", "Read 5 daily drills aloud"] },
    { d: 9, title: 'Practice Day', topic: 'All Structures', color: 'bg-emerald-600', tasks: ["Do 3 complete roleplays", "Record unscripted teaching session", "Partner feedback session", "Self-review and improvement notes"] },
    { d: 10, title: 'Finale', topic: 'Self Evaluation', color: 'bg-amber-600', tasks: ["3 things I improved", "3 goals for next month", "5-minute teaching demonstration", "Share progress with a colleague 🎉"] },
];

export function Homework() {
    return (
        <section id="homework" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                        <ClipboardList size={14} />
                        Daily Training
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        10-Day Daily Exercises
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Structured daily tasks to reinforce each session. Download individual sheets or the full pack as PDF.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    <Download size={20} />
                    Download All Sheets
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {homeworkSheets.map((hw, i) => (
                    <motion.div
                        key={hw.d}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg", hw.color)}>
                                D{hw.d}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 leading-tight">{hw.title}</h3>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{hw.topic}</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {hw.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-start gap-3 group/item">
                                    <div className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center mt-0.5 group-hover/item:border-blue-500 transition-colors shrink-0">
                                        <CheckCircle2 size={12} className="text-transparent group-hover/item:text-blue-500 transition-colors" />
                                    </div>
                                    <span className="text-sm text-slate-600 leading-snug">{task}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl text-sm border border-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center gap-2">
                            <Download size={16} />
                            Day {hw.d} Worksheet
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
