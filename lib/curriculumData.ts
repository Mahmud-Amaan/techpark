export interface DialogueLine {
    role: string;
    text: string;
    note?: string;
}

export interface CurriculumDay {
    day: number;
    title: string;
    tagline: string;

    // Section 1: Dialogue Model
    dialogue: {
        situation: string;
        context: string[];
        script: DialogueLine[];
        escalation?: {
            trigger: string;
            action: string;
        };
        takeaways: string[];
    };

    // Section 2: Case Study
    caseStudy: {
        title: string;
        situation: string;
        narrative: string[];
        resolution: string[];
        results: string[];
    };

    // Section 3: Homework / Incomplete Story
    homework: {
        title: string;
        situation: string[];
        prompts: string[];
        tasks: string[];
    };

    // Bonus/Optional
    bonus?: {
        situation: string;
        response: string;
    };

    advancedTips?: {
        title: string;
        items: string[];
        example: string[];
    };

    coreMessage?: {
        title: string;
        points: string[];
    };
}

export const curriculumData: Record<number, CurriculumDay> = {
    1: {
        day: 1,
        title: "Greetings & Introductions",
        tagline: "Establishing authority and safety from the first minute.",
        dialogue: {
            situation: "Student Using Phone During First Introduction",
            context: [
                "It is your first day in Grade 8.",
                "You are introducing yourself.",
                "While speaking, you notice Tazwan looking down and typing on his phone under the desk.",
                "You stop speaking. The class becomes slightly quiet."
            ],
            script: [
                { role: "Teacher", text: "Tazwan.", note: "calm tone, steady eye contact" },
                { role: "Tazwan", text: "(Looks up)" },
                { role: "Teacher", text: "Please keep your phone inside your bag." },
                { role: "Tazwan", text: "Sorry sir, I was just replying to my mother." },
                { role: "Teacher", text: "I understand. However, during class time, phones remain inside the bag unless I give permission. Thank you.", note: "firm but respectful" },
                { role: "Tazwan", text: "(Puts phone away)" },
                { role: "Teacher", text: "Just to be clear, everyone — during class time, mobile phones stay in your bags. If there is an emergency, you may inform me.", note: "addressing whole class calmly" }
            ],
            escalation: {
                trigger: "Later in the class, he takes it out again.",
                action: "Tazwan, this is the second reminder. If it happens again, I will need to keep the phone until the end of class."
            },
            takeaways: [
                "Correct behavior immediately.",
                "Do not embarrass.",
                "Show calm authority.",
                "Establish classroom expectations clearly.",
                "Show fairness."
            ]
        },
        caseStudy: {
            title: "Conflict Resolution: The First Day Fight",
            situation: "Two Students Fight on First Day",
            narrative: [
                "It is still your first class.",
                "You ask students to introduce themselves.",
                "Munab stands up and says: 'My name is Munab. I want to become a doctor.'",
                "Suddenly, Jafin laughs loudly and whispers something to the student beside him.",
                "Munab looks embarrassed and angry and says loudly: 'Why are you laughing?!'",
                "Jafin replies: 'Because that’s impossible!'",
                "Munab pushes his chair back aggressively. The classroom energy shifts."
            ],
            resolution: [
                "Stop speaking immediately. Do not shout.",
                "Stand still and raise your hand until class becomes quiet.",
                "Teacher (neutral tone): 'Jafin. Munab. Please stand.'",
                "Teacher: 'Jafin, laughing at someone’s dream is disrespectful. Munab, reacting with anger is also not acceptable.'",
                "Teacher: 'This classroom is a safe place. Everyone’s goal matters here.'",
                "Separate their seating positions."
            ],
            results: [
                "Emotional control",
                "Equal fairness",
                "Respect reinforcement",
                "Leadership presence"
            ]
        },
        homework: {
            title: "Staff Introduction + Unexpected Responsibility",
            situation: [
                "It is your first day at school.",
                "After your class, you enter the staff room.",
                "A senior teacher says: 'We are planning a welcome assembly next week.'",
                "The principal looks at you and smiles: 'You are new. Would you like to introduce the new teachers on stage?'",
                "You feel nervous. You don't know the culture yet."
            ],
            prompts: [
                "What will you say to the principal?",
                "How will you respond confidently without sounding arrogant?",
                "What preparation steps will you take?"
            ],
            tasks: [
                "Write a full dialogue response to the principal.",
                "Create a 6-step preparation plan.",
                "Write a short stage introduction script.",
                "Reflection: What fears might arise and how will you control them?"
            ]
        },
        bonus: {
            situation: "Students Not Responding to Greeting",
            response: "I think we can do better than that. Let's try again. Good morning, everyone!"
        }
    },
    2: {
        day: 2,
        title: "Giving Instructions",
        tagline: "Clear Commands, Authority Language & Instruction Control",
        dialogue: {
            situation: "Students Not Following Instructions During Group Work",
            context: [
                "You are teaching Grade 7.",
                "You say: 'Open your books and complete Exercise 2 in pairs.'",
                "Within 2 minutes: Some students are talking, Raiyan is walking around, noise level increases."
            ],
            script: [
                { role: "Teacher", text: "(Stops speaking, stands still, raises hand until noise decreases)" },
                { role: "Teacher", text: "Stop.", note: "firm, slow tone" },
                { role: "Teacher", text: "Books open." },
                { role: "Teacher", text: "Exercise 2." },
                { role: "Teacher", text: "Work with your partner only." },
                { role: "Teacher", text: "You have 5 minutes." },
                { role: "Teacher", text: "Raiyan. Sit down. Work with your partner.", note: "low voice, walking closer" },
                { role: "Student", text: "Sir, we don't understand." },
                { role: "Teacher", text: "Listen carefully. You read the question. Then you discuss. Then you write one answer. Start." }
            ],
            takeaways: [
                "Rule: Instructions must be short, not speeches.",
                "Short sentences.",
                "Imperative verbs.",
                "No emotional energy.",
                "Clear time limit.",
                "Physical proximity for control."
            ]
        },
        caseStudy: {
            title: "Chaos During Activity: Instruction Failure & Recovery",
            situation: "Unclear instructions lead to confusion and noise.",
            narrative: [
                "You give a long, vauge instruction for a speaking activity.",
                "Students look confused and start asking many questions at once.",
                "Noise increases and structure breaks down."
            ],
            resolution: [
                "Clap once. 'Stop.' Wait silently. 'Everyone sit.'",
                "Step 1: Count 1 to 4 to form groups.",
                "Step 2: Topic – Hobbies.",
                "Step 3: Discuss for 3 minutes.",
                "Step 4: One speaker per group.",
                "Begin."
            ],
            results: [
                "Admitting confusion through action, not words",
                "Regaining control using structure",
                "Simplifying language",
                "Using imperatives clearly"
            ]
        },
        homework: {
            title: "Student Challenges Your Instruction",
            situation: [
                "You say: 'Submit your homework on my table.'",
                "Farhan says loudly: 'Why should we submit today? You didn’t say yesterday.'",
                "Other students start murmuring and delaying."
            ],
            prompts: [
                "What will you say immediately?",
                "How will you avoid arguing?",
                "How will you reinforce authority without humiliation?",
                "What tone will you use?"
            ],
            tasks: [
                "Write a full dialogue between teacher and Farhan.",
                "Create a calm but firm response.",
                "Create a consequence plan (if refusal continues).",
                "Reflection: How to prevent this situation next time?"
            ]
        },
        bonus: {
            situation: "Students Pretend Not to Understand ('We didn't hear you')",
            response: "Walk closer. 'Close your books.' Wait until done. 'Thank you.' No debate."
        },
        advancedTips: {
            title: "Advanced Instruction Techniques",
            items: [
                "Command (What to do)",
                "Time limit (How long)",
                "Clear ending signal (When to stop)",
                "Check for understanding (Confirming clarity)"
            ],
            example: [
                "“Open page 25.”",
                "“Complete questions 1 to 5.”",
                "“You have 7 minutes.”",
                "“When I say stop, stop immediately.”"
            ]
        },
        coreMessage: {
            title: "Day 2 Core Message",
            points: [
                "Clear instructions = calm classroom.",
                "Long explanations = confusion.",
                "Emotion = weakness.",
                "Structure = power."
            ]
        }
    },
    4: {
        day: 4,
        title: "Handling Disrespect & Public Challenges",
        tagline: "Protecting Authority Without Losing Composure",
        dialogue: {
            situation: "Public Backtalk",
            context: [
                "You say: 'Everyone submit your assignment.'",
                "Student Rafi says loudly: 'Why do we even need this subject? It’s useless.'",
                "A few students laugh. Others turn to look at you. This is a direct public challenge."
            ],
            script: [
                { role: "Teacher", text: "(Pauses, looks at Rafi calmly)" },
                { role: "Teacher", text: "We are not discussing that right now.", note: "calm, steady tone" },
                { role: "Teacher", text: "Submit your assignment." },
                { role: "Rafi", text: "I’m just saying it’s pointless." },
                { role: "Teacher", text: "You may share your opinion after class. Assignment. Now.", note: "firm boundary, removing audience" }
            ],
            takeaways: [
                "Never debate in public.",
                "Short responses maintain authority.",
                "Remove the audience.",
                "Separate opinion from behavior.",
                "Stay steady, not reactive."
            ]
        },
        caseStudy: {
            title: "Sarcasm & Mocking Tone",
            situation: "A student uses subtle disrespect to gain peer attention.",
            narrative: [
                "You are explaining a difficult topic.",
                "Nabil whispers loudly: 'Wow, this is sooo exciting.'",
                "Friend laughs. You notice eye-rolling and a few student smiles."
            ],
            resolution: [
                "Stop speaking mid-sentence. Let silence fill the room.",
                "Slowly look at Nabil and walk toward his desk.",
                "Calm voice: 'Repeat that.'",
                "If he stays silent, respond: 'In this classroom, we respect the learning process.'",
                "Turn back to the class and resume immediately: 'Let’s continue.'"
            ],
            results: [
                "Silence shifts pressure back to the student",
                "Calm correction prevents escalation",
                "Removing the 'reward' of attention",
                "Redirecting energy into accountability"
            ]
        },
        homework: {
            title: "Direct Public Challenge to Credibility",
            situation: [
                "You are reviewing homework answers.",
                "Adyan says loudly: 'That’s wrong. My cousin said the answer is different.'",
                "A few students whisper. Energy shifts. Adyan asks: 'Are you sure that’s correct?'"
            ],
            prompts: [
                "What do you say immediately?",
                "Do you defend emotionally or calmly?",
                "How do you prevent group doubt?",
                "What if you actually made a mistake?"
            ],
            tasks: [
                "Write a continuation including dialogue examples.",
                "Describe the tone and psychological reasoning.",
                "Define a classroom control strategy for this moment.",
                "Plan how to close the situation confidently."
            ]
        },
        bonus: {
            situation: "Handling a Mistake (If you were actually wrong)",
            response: "Admit it calmly: 'I stand corrected. Thank you, Adyan. Let's adjust that.' Confidence increases respect."
        },
        coreMessage: {
            title: "Day 4 Core Principles",
            points: [
                "Never react emotionally to disrespect.",
                "Short responses maintain authority.",
                "Remove audience when correcting.",
                "Silence is stronger than shouting.",
                "Correct behavior, not personality."
            ]
        }
    },
    5: {
        day: 5,
        title: "Handling Emotional Students & Sensitive Situations",
        tagline: "Emotional Control, Compassion & Professional Boundaries",
        dialogue: {
            situation: "Student Suddenly Starts Crying After Correction",
            context: [
                "You are checking homework. Student name: Mira.",
                "You say calmly: 'Mira, this answer is incomplete.'",
                "Suddenly her eyes fill with tears. Nearby students notice. Class attention shifts."
            ],
            script: [
                { role: "Teacher", text: "Mira, step outside with me for a moment.", note: "lowered voice, calm tone" },
                { role: "Teacher", text: "(To class) Continue question three silently." },
                { role: "Teacher", text: "(Outside) Mira, what happened?", note: "soft voice, giving space to speak" },
                { role: "Mira", text: "I studied but I still get it wrong." },
                { role: "Teacher", text: "Making mistakes is part of learning. You are not in trouble.", note: "validating without over-comforting" },
                { role: "Teacher", text: "Take two minutes. Wash your face. Then come back when ready." }
            ],
            takeaways: [
                "Remove the audience immediately.",
                "Keep your tone steady and calm.",
                "Validate feelings without exaggerating.",
                "Return the class to normal routine fast.",
                "Prioritize emotional safety + stability."
            ]
        },
        caseStudy: {
            title: "Exam Anxiety – Student Freezes During Test",
            situation: "Hassan is overwhelmed by pressure and cannot start his exam.",
            narrative: [
                "Exam room is silent. Hassan is staring at a blank paper with shaking hands.",
                "15 minutes pass. He is still frozen while others are writing.",
                "He looks completely overwhelmed by the fear of failing."
            ],
            resolution: [
                "Kneel slightly nearby to reduce pressure.",
                "Quiet voice: 'Hassan, start with question one.'",
                "Instead of 'relax', give micro-instructions: 'Read it slowly. Underline key words.'",
                "Encourage small steps: 'Just write one sentence.'",
                "Walk away to avoid the spotlight once he starts."
            ],
            results: [
                "Reduced pressure through physical positioning",
                "Micro-instructions bypass mental blocks",
                "Normalized struggle without drama",
                "Provided practical coping strategy (4-4 breathing)"
            ]
        },
        homework: {
            title: "Student Shuts Down & Refuses to Participate",
            situation: [
                "Arham is usually active but today he is withdrawn. Head down, not writing.",
                "You ask him to read, he says quietly: 'I don't want to.'",
                "You later hear his parents had a major argument yesterday."
            ],
            prompts: [
                "What do you say in the moment in front of the class?",
                "Do you push him to read or ignore it?",
                "How do you protect his dignity while maintaining expectations?",
                "When do you involve a school counselor?"
            ],
            tasks: [
                "Write dialogue examples for both public and private stages.",
                "Describe the tone and boundaries you would set.",
                "Create a support and follow-up strategy.",
                "Explain how to balance compassion with classroom function."
            ]
        },
        bonus: {
            situation: "Student Overreacting to Small Correction",
            response: "Lower volume. Maintain eye contact. 'I'm not attacking you, I'm helping you improve. Let's look at it together.'"
        },
        coreMessage: {
            title: "Day 5 Core Principles",
            points: [
                "Stay emotionally neutral but warm.",
                "Remove audience for emotional moments.",
                "Do not overreact or panic.",
                "Validate feelings, don't lower standards.",
                "Offer small practical steps.",
                "You are a stable guide, not a therapist."
            ]
        }
    },
    6: {
        day: 6,
        title: "Handling Parent Confrontations & Difficult Meetings",
        tagline: "Professional Communication Under Pressure",
        dialogue: {
            situation: "Parent Angry About Low Marks",
            context: [
                "Parent of Rayan is visibly upset. Tone is sharp, arms crossed.",
                "Parent: 'My son never gets marks this low. You graded him unfairly.'",
                "This is a credibility test. Rayan is sitting quietly beside them."
            ],
            script: [
                { role: "Teacher", text: "Thank you for coming. Let’s look at the paper together.", note: "seated calmly, neutral tone" },
                { role: "Teacher", text: "Here, the question required two examples. Rayan wrote one.", note: "using evidence, not labels" },
                { role: "Parent", text: "But he studied a lot!" },
                { role: "Teacher", text: "I can see he prepared. But this section needed more detail.", note: "balanced language" },
                { role: "Parent", text: "(Raised voice) It's still unfair!" },
                { role: "Teacher", text: "I understand you are concerned. My role is to apply the same marking criteria to all students.", note: "calm repetition, no sarcasm" },
                { role: "Teacher", text: "To improve next time, Rayan can practice structured answers.", note: "offering a path forward" }
            ],
            takeaways: [
                "Evidence removes emotion.",
                "Calm tone reduces escalation.",
                "Acknowledge concern without accepting blame.",
                "Offer a solution plan to shift focus forward.",
                "Maintain authority through fairness."
            ]
        },
        caseStudy: {
            title: "Parent Defending Child’s Misbehavior",
            situation: "Sami's parent claims he is 'just talkative' and that you 'target him'.",
            narrative: [
                "Sami repeatedly talks during lessons despite warnings.",
                "Parent says Sami feels targeted. Sami looks confident, expecting protection.",
                "You need to bridge the gap between 'personality' and 'classroom rules'."
            ],
            resolution: [
                "Place behavior record on the table. Facts remove 'targeting' claims.",
                "Describe events: 'On Monday, he spoke during explanation three times.'",
                "Validate parent: 'I respect his personality. However, learning time must be protected.'",
                "Look at the student directly: 'When you speak while others work, it disrupts focus.'",
                "Propose a concrete plan: 'Move to front seat and recognize positive participation.'"
            ],
            results: [
                "Separated personality from behavior",
                "Avoided emotional defense with documentation",
                "Maintained calm authority throughout confrontation",
                "Ended meeting with a structured solution"
            ]
        },
        homework: {
            title: "Parent Accuses You of Biased Punishment",
            situation: [
                "Parent of Imad storms into office without appointment, accusing you of bias.",
                "Parent: 'You always give my son lower marks! You don't like him!'",
                "Other teachers can hear. Imad stands behind silently. Pressure is high."
            ],
            prompts: [
                "What is your first sentence to an unappointed parent?",
                "How do you protect professionalism in a public space?",
                "What evidence do you present for policy adherence?",
                "When do you involve administration?"
            ],
            tasks: [
                "Write exact dialogue examples for de-escalation.",
                "Describe body language and positioning during a storm-in.",
                "Explain the method for presenting late-work policy factualy.",
                "Define a final boundary statement for the meeting's close."
            ]
        },
        bonus: {
            situation: "Parent Comparing Their Child to Others",
            response: "Set boundary firmly: 'I cannot discuss other students. Let's focus entirely on your child's progress and how we can support them.'"
        },
        coreMessage: {
            title: "Day 6 Core Principles",
            points: [
                "Never argue emotionally with parents.",
                "Always bring documentation and evidence.",
                "Speak in facts, not feelings.",
                "Acknowledge concern without accepting false accusations.",
                "Offer a path forward/improvement plan.",
                "Represent the institution with a professional tone.",
                "Calm is your power."
            ]
        }
    },
    7: {
        day: 7,
        title: "Building Long-Term Respect & Classroom Culture",
        tagline: "Preventing 70% of Problems Before They Start",
        dialogue: {
            situation: "First Day – Setting the Tone",
            context: [
                "First day of term. Students enter talking loudly.",
                "One student: 'Let’s see how strict this teacher is.'",
                "This first 15 minutes defines your authority for the semester."
            ],
            script: [
                { role: "Teacher", text: "Good morning.", note: "greeting at the door, firm but warm tone" },
                { role: "Teacher", text: "(Wait silently at the bell until noise decreases)" },
                { role: "Teacher", text: "Welcome. In this classroom, we do three things: start on time, respect speaking turns, and complete work fully." },
                { role: "Teacher", text: "When I raise my hand, you stop talking. Let's practice now.", note: "demonstrating procedure" },
                { role: "Teacher", text: "When I say begin, you begin immediately. Start with this short task.", note: "establishing signals" }
            ],
            takeaways: [
                "Model expectations immediately.",
                "Practice procedures, don't just speak rules.",
                "Establish clear non-verbal signals.",
                "Structure is built from Day 1.",
                "Consistency defines the semester."
            ]
        },
        caseStudy: {
            title: "Transforming a Noisy Class Over Time",
            situation: "Class 8B has a reputation for being 'uncontrollable'.",
            narrative: [
                "You enter as a new teacher. Constant talking, late work, and sarcasm.",
                "Instead of panicking, you build a system slowly over 4 weeks.",
                "By week 4, noise reduces by half and students respond faster."
            ],
            resolution: [
                "Week 1: Enforce small things consistently without emotion ('Sit properly').",
                "Week 2: Praise behavior, not personality ('I appreciate how this row started quickly').",
                "Week 3: Assign responsibilities (monitor, board manager, timekeeper).",
                "Week 4: Observe the culture shift where students own the structure.",
                "Consistency over empty threats is the key."
            ],
            results: [
                "Small corrections prevents big problems",
                "Clear routines reduce overall chaos",
                "Assigned responsibility builds ownership",
                "Respect is built through follow-through"
            ]
        },
        homework: {
            title: "Preventing Problems Before They Start",
            situation: [
                "Assigned a new class known for discipline struggles.",
                "First day chega, two students whisper during introduction.",
                "Another asks: 'Are you strict?' This is your defining moment."
            ],
            prompts: [
                "What are your first 10 minutes like?",
                "What exact words do you say regarding procedures?",
                "How do you demonstrate signals physically?",
                "How do you balance warmth with authority?"
            ],
            tasks: [
                "Design a 30-day culture building plan.",
                "Define specific consequences and rewards.",
                "Create a prevention strategy for common disruptions.",
                "Write a weekly adjustment plan to measure success."
            ]
        },
        bonus: {
            situation: "Dealing with Initial Skepticism ('Are you strict?')",
            response: "Calm smile. 'I am consistent. If we follow the rules, we have a great time learning. Let's begin.'"
        },
        coreMessage: {
            title: "Day 7 & Training Finale",
            points: [
                "Structure beats shouting.",
                "Routines reduce chaos.",
                "Consistency builds trust.",
                "Praise behavior you want repeated.",
                "Small corrections early prevent big corrections later.",
                "Management is about Safety and Predictability."
            ]
        }
    },
    8: {
        day: 8,
        title: "Psychological Leadership & Teacher Presence",
        tagline: "Silent Authority, Body Language & Influence",
        dialogue: {
            situation: "Using Silence as Authority",
            context: [
                "You are explaining a topic. Two students begin whispering.",
                "Then three more join. Noise level slowly increases.",
                "Instead of shouting, you use psychological presence."
            ],
            script: [
                { role: "Teacher", text: "(Stops mid-sentence, slowly closes marker, stands still, looks at center of room)" },
                { role: "Teacher", text: "(Wait 10 seconds until full silence achieved)" },
                { role: "Teacher", text: "I’ll continue.", note: "calm voice, resuming immediately" },
                { role: "Teacher", text: "(If one continues: walk slowly toward them, stand beside desk in silence)" },
                { role: "Teacher", text: "Thank you.", note: "quiet voice once they stop" }
            ],
            takeaways: [
                "Humans respond to silence shifts.",
                "Stillness creates healthy tension.",
                "Calm posture signals control.",
                "Shouting signals loss of control.",
                "Authority without noise is more powerful."
            ]
        },
        caseStudy: {
            title: "Controlling the Room Through Positioning",
            situation: "Disengagement in the back and sides of a new classroom.",
            narrative: [
                "You notice back row students are disengaged and side conversations happen near windows.",
                "You decide to use movement and proximity rather than verbal correction.",
                "You establish zones: front for instruction, middle for discussion, back for monitoring."
            ],
            resolution: [
                "Walk slowly toward the back while explaining (uninterrupted).",
                "Pause near side windows to stabilize energy.",
                "Start lessons from the middle of the room to adjust student posture.",
                "Use intentional, unpredictable movement.",
                "Stand still with grounded feet when giving important instructions."
            ],
            results: [
                "Proximity naturally reduces misbehavior",
                "Movement redirects wandering attention",
                "Stillness increases perceived importance of instructions",
                "Eye contact reinforces teacher expectations"
            ]
        },
        homework: {
            title: "Testing Your Psychological Stability",
            situation: [
                "Students are louder than normal. One smirks during instruction, another delays opening a notebook.",
                "You say: 'Open page 45.' Half comply slowly. One says: 'Why are we always doing work?'",
                "Class watches to see if you will react, shouted, or show frustration."
            ],
            prompts: [
                "Do you speak immediately or pause?",
                "Where do you position yourself in the room?",
                "What exact words do you say?",
                "What tone of voice do you use?"
            ],
            tasks: [
                "Write a response using psychological presence techniques.",
                "Describe your posture and movement strategy.",
                "Define an emotional regulation technique for this moment.",
                "Create a long-term presence-building plan."
            ]
        },
        bonus: {
            situation: "Handling 'Low-Energy' Testing (Mocking Tone)",
            response: "Maintain eye contact. Slight pause. Lower your voice. 'We do work to improve. Open the page.' No frustration shown."
        },
        coreMessage: {
            title: "Day 8 Core Principles",
            points: [
                "Silence is stronger than shouting.",
                "Slow movements signal control.",
                "Stillness increases authority.",
                "Positioning reduces disruption.",
                "Emotional self-control defines leadership.",
                "If you are calm, the room becomes calm."
            ]
        }
    },
    9: {
        day: 9,
        title: "Advanced Influence & Motivating Difficult Students",
        tagline: "Inspiring Effort Without Fear",
        dialogue: {
            situation: "“This Is Boring” Student",
            context: [
                "You are teaching. Student Ayan leans back and says loudly: 'This is boring.'",
                "Some students laugh. Others nod silently. This is an influence attempt.",
                "If ignored poorly, it spreads. You need a professional influence response."
            ],
            script: [
                { role: "Teacher", text: "(Pauses, looks at Ayan calmly)" },
                { role: "Teacher", text: "Boring or challenging?", note: "neutral tone, looking for response" },
                { role: "Ayan", text: "(Shrugs)" },
                { role: "Teacher", text: "If it’s boring, that means it’s too easy.", note: "walking closer" },
                { role: "Teacher", text: "Would you like a harder question?" },
                { role: "Ayan", text: "No..." },
                { role: "Teacher", text: "Then let’s focus.", note: "resuming lesson immediately" }
            ],
            takeaways: [
                "Do not defend content emotionally.",
                "Reframe complaint into a challenge.",
                "Avoid public power struggles.",
                "Redirect energy into accountability.",
                "Neutralize influence through logic."
            ]
        },
        caseStudy: {
            title: "Low-Confidence Student Who Gave Up",
            situation: "Tariq avoids eye contact and says 'I don't know' before thinking.",
            narrative: [
                "Tariq has repeated low scores and has stopped trying. He shows learned helplessness.",
                "Punishment will not work here. You need to build motivation strategically.",
                "You decide to create a controlled success path for him."
            ],
            resolution: [
                "Pre-prepare a success: Quietly tell him which question you'll ask later.",
                "Guide him for 1 minute before the lesson starts.",
                "Ask him the prepared question in class and give immediate, short praise.",
                "Track progress privately and give specific feedback on his improvements.",
                "Gradually increase difficulty as confidence builds."
            ],
            results: [
                "Created controlled success to bypass fear",
                "Reduced public pressure during participation",
                "Built momentum through small, consistent wins",
                "Motivation grew from tangible progress"
            ]
        },
        homework: {
            title: "Entire Class Shows Low Motivation",
            situation: [
                "It is mid-term. Energy is low, homework completion drops.",
                "Participation is weak. Students say: 'Sir, we're tired' and 'Too much work.'",
                "You sense burnout. Curriculum must continue but resistance is high."
            ],
            prompts: [
                "What do you say immediately to acknowledge the state without being soft?",
                "How do you re-energize participation through a specific activity?",
                "What short-term system can boost momentum?",
                "How do you maintain standards while appearing supportive?"
            ],
            tasks: [
                "Design a 2-week motivational reset strategy.",
                "Write dialogue examples for the initial acknowledgement.",
                "Create a motivation technique for a low-energy classroom.",
                "Define an accountability structure for the recovery phase."
            ]
        },
        bonus: {
            situation: "Student Leaning Back & Disengaged",
            response: "Walk near them. Use a small hand gesture to signal sitting up. No words needed. Presence over talk."
        },
        coreMessage: {
            title: "Day 9 Core Principles",
            points: [
                "Influence is stronger than intimidation.",
                "Reframe negativity into responsibility.",
                "Create small wins for struggling students.",
                "Give specific praise, not general praise.",
                "Avoid emotional reactions to complaints.",
                "Adjust strategy without lowering standards.",
                "Motivation grows from progress and feeling capable."
            ]
        }
    }
};
