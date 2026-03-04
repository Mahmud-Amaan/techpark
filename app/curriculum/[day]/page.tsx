"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, MessageSquare, Target, Trophy, HelpCircle, ChevronRight, AlertCircle, Users, Sparkles, Calendar, CheckCircle2 } from "lucide-react";
import { curriculumData } from "@/lib/curriculumData";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CurriculumDetailPage() {
    const params = useParams();
    const router = useRouter();
    const dayStr = params?.day as string;
    const dayId = dayStr ? parseInt(dayStr) : NaN;
    const data = dayId ? curriculumData[dayId] : undefined;

    if (!data || isNaN(dayId)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-8 md:p-12 bg-white rounded-[3rem] border border-slate-200 shadow-2xl max-w-lg mx-4">
                    <div className="w-20 h-20 bg-rose-50 rounded-[2rem] flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                        <AlertCircle size={40} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Focus Module Not Found</h1>
                    <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                        The specialized content for <span className="text-slate-900 font-bold">Day {dayStr || "Unknown"}</span> hasn't been added to the local vault yet. Check back soon for the full 10-day training suite.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                        <ArrowLeft size={18} />
                        Return to Command Center
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50/50 pb-24">
            {/* Header / Hero */}
            <header className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/" className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all mb-10 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all border border-white/10">
                            <ArrowLeft size={18} />
                        </div>
                        <span className="font-bold tracking-tight">Back to Curriculum</span>
                    </Link>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                            Technical Training Module
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
                            Day {data.day}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{data.title}</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                            {data.tagline}
                        </p>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-20">
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-20">
                    {/* Section 1: Dialogue Model */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
                            <div className="w-20 h-20 rounded-[2rem] bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner border border-blue-100/50">
                                <MessageSquare size={40} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">Professional Dialogue Model</h2>
                                <p className="text-blue-600 text-sm font-black uppercase tracking-[0.3em] mt-2">Classroom Scenario Training</p>
                            </div>
                        </div>

                        <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] mb-12 shadow-inner">
                            <h4 className="font-black text-slate-900 mb-6 flex items-center gap-3 text-xl tracking-tight">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <BookOpen size={20} />
                                </div>
                                Situation: {data.dialogue?.situation}
                            </h4>
                            <div className="space-y-4">
                                {data.dialogue?.context?.map((para, i) => (
                                    <p key={i} className="text-slate-600 leading-relaxed font-semibold text-lg opacity-80">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10 mb-16">
                            {data.dialogue?.script?.map((line, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-6 group/line">
                                    <div className="md:w-32 md:text-right pt-3 shrink-0">
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover/line:text-blue-600 transition-colors">
                                            {line.role}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="p-8 bg-slate-50 group-hover/line:bg-blue-50/50 transition-all border-l-[8px] border-blue-600 rounded-3xl shadow-sm">
                                            <p className="text-slate-900 font-bold italic prose-2xl leading-relaxed text-xl md:text-2xl">
                                                "{line.text}"
                                            </p>
                                            {line.note && (
                                                <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white rounded-full border border-blue-100 text-xs font-black text-blue-600 uppercase tracking-widest shadow-sm">
                                                    <AlertCircle size={14} />
                                                    Direction: {line.note}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {data.dialogue?.escalation && (
                            <div className="p-10 bg-rose-50 border-2 border-dashed border-rose-200 rounded-[3rem] mb-16 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-200">
                                            <AlertCircle size={24} />
                                        </div>
                                        <h4 className="text-xl font-black text-rose-900 tracking-tight">The Escalation Trigger</h4>
                                    </div>
                                    <p className="text-rose-900 font-black mb-4 text-xs uppercase tracking-widest opacity-60">IF THIS HAPPENS: {data.dialogue.escalation.trigger}</p>
                                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-rose-100">
                                        <p className="text-rose-700 font-bold leading-relaxed text-2xl italic tracking-tight">
                                            "{data.dialogue.escalation.action}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.dialogue?.takeaways?.map((takeaway, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900 text-white rounded-[2rem] font-black text-sm transition-transform hover:scale-[1.02] shadow-xl shadow-slate-900/10">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                                        <Trophy size={18} />
                                    </div>
                                    {takeaway}
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 2: Case Study */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100"
                    >
                        <div className="flex flex-col sm:items-center sm:flex-row gap-6 mb-12">
                            <div className="w-20 h-20 rounded-[2rem] bg-purple-50 flex items-center justify-center text-purple-600 shadow-inner border border-purple-100/50">
                                <Target size={40} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">{data.caseStudy.title}</h2>
                                <p className="text-purple-600 text-sm font-black uppercase tracking-[0.3em] mt-2">Professional Strategy Analysis</p>
                            </div>
                        </div>

                        <div className="p-10 md:p-16 bg-slate-900 text-slate-100 rounded-[3rem] mb-16 shadow-2xl relative overflow-hidden group/case">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -mr-48 -mt-48 group-hover/case:scale-110 transition-transform duration-1000" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-400">Deep Narrative Context</span>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>

                                <div className="space-y-8">
                                    {data.caseStudy.narrative.map((para, i) => (
                                        <p key={i} className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-bold font-serif opacity-90 tracking-tight">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
                                <div className="w-3 h-10 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full" />
                                Strategic Resolution Steps
                            </h4>
                            <div className="grid grid-cols-1 gap-6">
                                {data.caseStudy.resolution.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 15 }}
                                        className="flex items-start gap-6 p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] group/res hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all cursor-default"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl font-black text-slate-300 group-hover/res:bg-purple-600 group-hover/res:text-white group-hover/res:border-purple-600 group-hover/res:scale-110 transition-all shrink-0 shadow-sm">
                                            {i + 1}
                                        </div>
                                        <span className="text-slate-800 font-bold text-lg md:text-xl leading-relaxed pt-2 opacity-90">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3: Homework Challenge */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900 rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] -mr-64 -mt-64" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -ml-40 -mb-40" />

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
                                <div className="w-24 h-24 rounded-[2.5rem] bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 shadow-2xl">
                                    <HelpCircle size={48} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-2">Technical Mastery:<br />{data.homework.title}</h2>
                                    <p className="text-blue-400 text-sm font-black uppercase tracking-[0.4em]">Submission Required</p>
                                </div>
                            </div>

                            <div className="p-10 md:p-14 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 mb-16 shadow-inner">
                                <div className="space-y-8">
                                    {data.homework.situation.map((para, i) => (
                                        <p key={i} className="text-2xl md:text-3xl text-blue-50 italic font-serif leading-relaxed opacity-80">
                                            "{para}"
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                                <div>
                                    <h4 className="font-black text-blue-400 mb-8 uppercase tracking-[0.3em] text-xs">Self-Reflection Prompts</h4>
                                    <ul className="space-y-6">
                                        {data.homework.prompts.map((prompt, i) => (
                                            <li key={i} className="flex gap-5 text-lg md:text-xl font-bold leading-relaxed opacity-80 group/prompt cursor-default">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0 group-hover/prompt:scale-150 transition-transform" />
                                                {prompt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-black text-indigo-400 mb-8 uppercase tracking-[0.3em] text-xs">Final Execution Tasks</h4>
                                    <ul className="space-y-4">
                                        {data.homework.tasks.map((task, i) => (
                                            <li key={i} className="flex items-center gap-5 p-6 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-black border border-white/10 transition-all hover:scale-[1.02] cursor-pointer group/task">
                                                <ChevronRight size={20} className="text-blue-500 group-hover/task:translate-x-1 transition-transform" />
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 4: Bonus Drill & Advanced Tips */}
                    {(data.bonus || data.advancedTips) && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            {data.bonus && (
                                <motion.section
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200 border border-slate-100"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shadow-inner">
                                            <Sparkles size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900">Bonus: Quick Drill</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-400">
                                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">The Challenge</p>
                                            <p className="text-slate-900 font-bold text-lg">{data.bonus.situation}</p>
                                        </div>
                                        <div className="p-6 bg-amber-50/50 rounded-2xl border-l-4 border-amber-500">
                                            <p className="text-amber-600 text-xs font-black uppercase tracking-widest mb-2">Pro Response</p>
                                            <p className="text-amber-900 font-black text-xl italic leading-relaxed">"{data.bonus.response}"</p>
                                        </div>
                                    </div>
                                </motion.section>
                            )}

                            {data.advancedTips && (
                                <motion.section
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-900 text-white rounded-[3rem] p-10 shadow-2xl shadow-slate-900/10 border border-slate-800"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                                            <Calendar size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black">{data.advancedTips.title}</h3>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {data.advancedTips.items.map((tip, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-bold opacity-80">
                                                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">Practical Example</p>
                                        <div className="space-y-2">
                                            {data.advancedTips.example.map((ex, i) => (
                                                <p key={i} className="text-white font-mono text-sm leading-relaxed border-l-2 border-white/20 pl-4">
                                                    {ex}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.section>
                            )}
                        </div>
                    )}

                    {/* Section 5: Core Message Summary */}
                    {data.coreMessage && (
                        <motion.section
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative mt-20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur-3xl opacity-10" />
                            <div className="relative bg-white border border-blue-100 rounded-[3rem] p-8 md:p-12 overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50" />

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                                    <div className="w-24 h-24 rounded-[2rem] bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-2xl shadow-blue-500/40">
                                        <Trophy size={48} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase tracking-widest text-center md:text-left">
                                            {data.coreMessage.title}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {data.coreMessage.points.map((point, i) => (
                                                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                                                    <span className="text-slate-700 font-black text-sm uppercase tracking-tight italic">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </div>
            </div>
        </main>
    );
}
