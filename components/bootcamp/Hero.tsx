"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, GraduationCap, Star, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-200 shadow-sm">
                            <Sparkles size={14} className="animate-pulse" />
                            Revolutionizing Teacher Training
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8"
                    >
                        Teach Park <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">English</span> Training
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        A 10-day intensive spoken English bootcamp specifically designed to empower school teachers with confidence and fluency.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 active:scale-95 text-lg">
                            Start Your Journey
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-black rounded-2xl border-2 border-slate-100 hover:border-blue-600 transition-all hover:text-blue-600 text-lg">
                            View Curriculum
                        </button>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-white/50 backdrop-blur-md p-6 rounded-[2.5rem] border border-white"
                    >
                        {[
                            { icon: GraduationCap, label: "Trained Teachers", value: "500+", color: "text-blue-600" },
                            { icon: BookOpen, label: "Training Hours", value: "20+", color: "text-purple-600" },
                            { icon: Users, label: "Active Cohorts", value: "15", color: "text-emerald-600" },
                            { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-amber-500" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-slate-50 shadow-sm transition-transform hover:-translate-y-1">
                                <div className={cn("w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4", stat.color)}>
                                    <stat.icon size={26} />
                                </div>
                                <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
