"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileDown, Printer, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const verbs = [
    ["be", "was/were", "been", "হওয়া", "I am a teacher at this school."],
    ["have", "had", "had", "থাকা/পাওয়া", "I have a new class today."],
    ["do", "did", "done", "করা", "Please do your homework tonight."],
    ["go", "went", "gone", "যাওয়া", "Go to the board and write your answer."],
    ["say", "said", "said", "বলা", "I said please be quiet."],
    ["get", "got", "gotten", "পাওয়া", "Get your books out now."],
    ["make", "made", "made", "তৈরি করা", "Make sure you understand the lesson."],
    ["know", "knew", "known", "জানা", "I know you can do better."],
    ["think", "thought", "thought", "ভাবা", "Think carefully before you answer."],
    ["take", "took", "taken", "নেওয়া", "Take out your notebooks, please."],
    ["see", "saw", "seen", "দেখা", "I saw you talking during the test."],
    ["come", "came", "come", "আসা", "Come to the front of the class."],
    ["give", "gave", "given", "দেওয়া", "Give me your homework now."],
    ["find", "found", "found", "খোঁজে পাওয়া", "Find the answer in paragraph two."],
    ["tell", "told", "told", "বলা/জানানো", "Tell me what you learned today."],
    ["ask", "asked", "asked", "জিজ্ঞেস করা", "Ask your partner for help."],
    ["write", "wrote", "written", "লেখা", "Write this sentence three times."],
    ["read", "read", "read", "পড়া", "Read the passage aloud, please."],
    ["learn", "learned", "learned", "শেখা", "I am sure you will learn quickly."],
    ["teach", "taught", "taught", "শেখানো", "I have taught this chapter before."],
    ["speak", "spoke", "spoken", "কথা বলা", "Speak clearly so everyone can hear."],
    ["listen", "listened", "listened", "শোনা", "Listen carefully to the instructions."],
    ["sit", "sat", "sat", "বসা", "Sit properly and face the board."],
    ["stand", "stood", "stood", "দাঁড়ানো", "Stand up when the headmaster enters."],
    ["open", "opened", "opened", "খোলা", "Open your books to page thirty."],
    ["close", "closed", "closed", "বন্ধ করা", "Close the door quietly, please."],
    ["bring", "brought", "brought", "আনা", "Bring your permission slip tomorrow."],
    ["send", "sent", "sent", "পাঠানো", "I have sent a message to your parents."],
    ["show", "showed", "shown", "দেখানো", "Show me your exercise book."],
    ["explain", "explained", "explained", "ব্যাখ্যা করা", "Let me explain the grammar rule again."],
    ["repeat", "repeated", "repeated", "পুনরাবৃত্তি করা", "Please repeat after me."],
    ["check", "checked", "checked", "যাচাই করা", "I will check your answers now."],
    ["mark", "marked", "marked", "নম্বর দেওয়া", "I have marked all your copies."],
    ["finish", "finished", "finished", "শেষ করা", "Have you finished your work?"],
    ["start", "started", "started", "শুরু করা", "Let us start with a quick revision."],
    ["begin", "began", "begun", "আরম্ভ করা", "We began this chapter last week."],
    ["stop", "stopped", "stopped", "থামা", "Stop talking and pay attention."],
    ["try", "tried", "tried", "চেষ্টা করা", "Try to answer in complete sentences."],
    ["help", "helped", "helped", "সাহায্য করা", "Can I help you understand?"],
    ["understand", "understood", "understood", "বোঝা", "Do you all understand?"],
    ["remember", "remembered", "remembered", "মনে রাখা", "Remember to bring your textbook."],
    ["forget", "forgot", "forgotten", "ভুলে যাওয়া", "Do not forget tonight's homework."],
    ["practise", "practised", "practised", "অনুশীলন করা", "Practise speaking every day."],
    ["improve", "improved", "improved", "উন্নত করা", "Your pronunciation has improved a lot."],
    ["copy", "copied", "copied", "নকল/লেখা নেওয়া", "Copy the notes from the board."],
    ["answer", "answered", "answered", "উত্তর দেওয়া", "Please answer in full sentences."],
    ["correct", "corrected", "corrected", "সংশোধন করা", "Correct your mistakes in red pen."],
    ["raise", "raised", "raised", "তোলা", "Raise your hand if you know the answer."],
    ["call", "called", "called", "ডাকা", "I called your name twice."],
    ["meet", "met", "met", "দেখা করা", "I met your parents this morning."],
    ["discuss", "discussed", "discussed", "আলোচনা করা", "Let us discuss this topic together."],
    ["present", "presented", "presented", "উপস্থাপন করা", "Each group will present their work."],
    ["draw", "drew", "drawn", "আঁকা", "Draw the diagram in your notebook."],
    ["erase", "erased", "erased", "মুছে ফেলা", "Erase your mistakes neatly."],
    ["distribute", "distributed", "distributed", "বিতরণ করা", "I will distribute the worksheets now."],
    ["collect", "collected", "collected", "সংগ্রহ করা", "Collect your books from the table."],
    ["award", "awarded", "awarded", "পুরস্কার দেওয়া", "I will award a star to the top student."],
    ["praise", "praised", "praised", "প্রশংসা করা", "I am praising your effort today."],
    ["encourage", "encouraged", "encouraged", "উৎসাহিত করা", "I encourage every student to participate."],
    ["warn", "warned", "warned", "সতর্ক করা", "I have already warned you twice."],
    ["allow", "allowed", "allowed", "অনুমতি দেওয়া", "I will not allow mobile phones in class."],
    ["inform", "informed", "informed", "জানানো", "I have informed your guardian."],
    ["record", "recorded", "recorded", "রেকর্ড করা", "I am recording today's attendance."],
    ["submit", "submitted", "submitted", "জমা দেওয়া", "Submit your assignment by Friday."],
    ["revise", "revised", "revised", "পুনরায় দেখা", "Revise chapters three and four tonight."],
    ["test", "tested", "tested", "পরীক্ষা করা", "I will test your vocabulary tomorrow."],
    ["pass", "passed", "passed", "পাস করা", "I am confident you will pass."],
    ["fail", "failed", "failed", "ফেল করা", "I do not want anyone to fail."],
    ["achieve", "achieved", "achieved", "অর্জন করা", "You have achieved excellent results."],
    ["attend", "attended", "attended", "উপস্থিত থাকা", "Please attend every session."],
    ["arrive", "arrived", "arrived", "পৌঁছানো", "Arrive on time every morning."],
    ["leave", "left", "left", "চলে যাওয়া", "Do not leave without permission."],
    ["enter", "entered", "entered", "প্রবেশ করা", "Enter the class quietly, please."],
    ["clean", "cleaned", "cleaned", "পরিষ্কার করা", "Clean the board before I arrive."],
    ["arrange", "arranged", "arranged", "সাজানো", "Arrange your desks in a circle."],
    ["prepare", "prepared", "prepared", "প্রস্তুত করা", "Prepare your questions for tomorrow."],
    ["plan", "planned", "planned", "পরিকল্পনা করা", "I have planned today's lesson carefully."],
    ["solve", "solved", "solved", "সমাধান করা", "Solve the questions on page twelve."],
    ["complete", "completed", "completed", "সম্পন্ন করা", "Complete the exercise before leaving."],
    ["review", "reviewed", "reviewed", "পর্যালোচনা করা", "Let us review what we learned."],
    ["summarise", "summarised", "summarised", "সারাংশ করা", "Summarise the chapter in five points."],
    ["compare", "compared", "compared", "তুলনা করা", "Compare the two characters in the story."],
    ["describe", "described", "described", "বর্ণনা করা", "Describe the picture in English."],
    ["translate", "translated", "translated", "অনুবাদ করা", "Translate sentence five into Bangla."],
    ["pronounce", "pronounced", "pronounced", "উচ্চারণ করা", "How do you pronounce this word?"],
    ["spell", "spelled", "spelled", "বানান করা", "Please spell the word correctly."],
    ["underline", "underlined", "underlined", "আন্ডারলাইন করা", "Underline all the verbs in the text."],
    ["keep", "kept", "kept", "রাখা", "Keep your classroom clean."],
    ["put", "put", "put", "রাখা/দেওয়া", "Put your pen down now."],
    ["buy", "bought", "bought", "কেনা", "Buy the required books by Monday."],
    ["eat", "ate", "eaten", "খাওয়া", "Do not eat in the classroom."],
    ["drink", "drank", "drunk", "পান করা", "You may drink water quietly."],
    ["run", "ran", "run", "দৌড়ানো", "Do not run in the corridor."],
    ["catch", "caught", "caught", "ধরা", "Catch the ball — it is your turn."],
    ["break", "broke", "broken", "ভাঙা", "Do not break school property."],
    ["build", "built", "built", "তৈরি করা", "Build your confidence step by step."],
    ["choose", "chose", "chosen", "বেছে নেওয়া", "Choose the correct answer from the list."],
    ["cut", "cut", "cut", "কাটা", "Cut along the dotted line carefully."],
    ["feel", "felt", "felt", "অনুভব করা", "I feel proud of your hard work."],
    ["hold", "held", "held", "ধরে রাখা", "Hold your paper steady while writing."],
    ["lead", "led", "led", "নেতৃত্ব দেওয়া", "Let Sadia lead today's group discussion."],
    ["pay", "paid", "paid", "মনোযোগ দেওয়া", "Pay attention to the instructions."],
    ["set", "set", "set", "স্থির করা", "Set a personal goal for this week."],
    ["share", "shared", "shared", "ভাগ করা", "Share your ideas with the class now."],
    ["support", "supported", "supported", "সমর্থন করা", "I support every student in this class."],
];

export function VerbsTable() {
    const [search, setSearch] = useState("");

    const filteredVerbs = verbs.filter(
        (v) =>
            v[0].toLowerCase().includes(search.toLowerCase()) ||
            v[3].includes(search) ||
            v[4].toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="verbs" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                        <Info size={14} />
                        Vocabulary Essentials
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        100 Essential Irregular Verbs
                    </h2>
                    <p className="text-slate-600">
                        Complete irregular verb list with Bangla meanings and classroom examples.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="p-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
                        <Printer size={20} />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                        <FileDown size={20} />
                        Download PDF
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by verb, meaning or example..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">#</th>
                                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">V1 (Base)</th>
                                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">V2 (Past)</th>
                                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">V3 (Past Participle)</th>
                                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">Bangla Meaning</th>
                                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">Classroom Example</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredVerbs.map((v, i) => (
                                <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-slate-400 text-xs font-medium">{i + 1}</td>
                                    <td className="px-6 py-4 text-slate-900 font-bold group-hover:text-blue-600 transition-colors">{v[0]}</td>
                                    <td className="px-6 py-4 text-blue-600/80 font-medium">{v[1]}</td>
                                    <td className="px-6 py-4 text-emerald-600/80 font-medium">{v[2]}</td>
                                    <td className="px-6 py-4 text-slate-900 font-semibold">{v[3]}</td>
                                    <td className="px-6 py-4 text-slate-500 text-sm italic whitespace-nowrap lg:whitespace-normal">{v[4]}</td>
                                </tr>
                            ))}
                            {filteredVerbs.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500 font-medium">
                                        No verbs found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
