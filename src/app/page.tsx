import Image from "next/image";
import Terminal from "@/components/Terminal";
import AgentCard from "@/components/AgentCard";
import { Cpu, Terminal as TermIcon, ShieldCheck } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen pt-20 px-6">
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center mb-32">
        {/* Left: Content */}
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 italic">
            intelli-trade  <br /> 
          </h1>
           <p className="text-5xl font-black uppercase tracking-tighter mb-8 italic">
            <span className="text-cyan-500"> Agentic Automation</span>
          </p>
          <p className="text-slate-400 text-lg mb-8 max-w-md">
            Full-stack e-commerce architecture powered by autonomous LLM agents and real-time scrapers.
          </p>
          <Terminal />
        </div>

        {/* Right: Bouncing Frame */}
        <div className="relative">
          <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full" />
          <div className="relative w-100 h-125 mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-bounce-landing">
            <Image 
              src="/syst-prev.jpg" 
              alt="System Preview" 
              fill 
            className="object-contain"
            priority
             unoptimized={true}
              
            />
          </div>
        </div>
      </section>

      {/* Grid: Agent Layers */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 pb-20">
        <AgentCard 
          icon={<TermIcon size={32} />} 
          title="Scraper Node" 
          description="Distributed scraping network built with Playwright to monitor 24/7 pricing."
          accent="cyan"
        />
        <AgentCard 
          icon={<Cpu size={32} />} 
          title="Logic Layer" 
          description="LangGraph orchestrators that handle inventory and auto-discount triggers."
          accent="purple"
        />
        <AgentCard 
          icon={<ShieldCheck size={32} />} 
          title="Verified SEO" 
          description="Agent-led content generation with human-in-the-loop verification."
          accent="green"
        />
      </section>
    </main>
  );
}