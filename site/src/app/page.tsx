import SkillStrip from "@/components/SkillStrip";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neon selection:text-background">
      <SkillStrip />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Work />
        <CTA />
      </main>
      <Footer />
      
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-neon/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-neon/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>
    </div>
  );
}
