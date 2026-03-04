"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Heart, Github, Twitter, Facebook, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 text-slate-400 py-16 lg:py-24 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900 group-hover:scale-110 transition-transform">
                                <BookOpen size={24} />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Tech Park <span className="text-blue-500">English</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-8">
                            A 10-Day Spoken English Bootcamp for school teachers. Build classroom communication confidence from Day 1.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Program</h5>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#overview" className="hover:text-blue-500 transition-colors">Course Overview</Link></li>
                            <li><Link href="#curriculum" className="hover:text-blue-500 transition-colors">10-Day Plan</Link></li>
                            <li><Link href="#verbs" className="hover:text-blue-500 transition-colors">Essential Verbs</Link></li>
                            <li><Link href="#roleplay" className="hover:text-blue-500 transition-colors">Real-Life Roleplays</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Resources</h5>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#homework" className="hover:text-blue-500 transition-colors">Daily Sheets</Link></li>
                            <li><Link href="#pronunciation" className="hover:text-blue-500 transition-colors">Pronunciation Guide</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Grammar Chart</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Tense Reference</Link></li>
                        </ul>
                    </div>

                    <div className="relative">
                        <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Join Us</h5>
                        <p className="text-sm mb-6">Get notified about our upcoming bootcamps and workshops.</p>
                        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40">
                            Apply Now
                        </button>
                        <button
                            onClick={scrollToTop}
                            className="absolute -top-12 right-0 md:relative md:top-auto md:mt-12 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-800"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© {new Date().getFullYear()} Tech Park English. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> for the Teachers of Bangladesh
                    </div>
                </div>
            </div>
        </footer>
    );
}
