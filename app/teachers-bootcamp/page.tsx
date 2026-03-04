import { Navbar } from "@/components/bootcamp/Navbar";
import { Hero } from "@/components/bootcamp/Hero";
import { Curriculum } from "@/components/bootcamp/Curriculum";
import { VerbsTable } from "@/components/bootcamp/VerbsTable";
import { RoleplayScenarios } from "@/components/bootcamp/RoleplayScenarios";
import { PronunciationGuide } from "@/components/bootcamp/PronunciationGuide";
import { Homework } from "@/components/bootcamp/Homework";
import { Footer } from "@/components/bootcamp/Footer";

export default function TeachersBootcampPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <Hero />
            <div className="container mx-auto px-4 space-y-24 py-24">
                <Curriculum />
                <VerbsTable />
                <RoleplayScenarios />
                <PronunciationGuide />
                <Homework />
            </div>
            <Footer />
        </main>
    );
}
