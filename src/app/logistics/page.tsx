export default function LogisticsPage() {
  const logs = [
    { time: "14:02:11", event: "Competitor Price Check", status: "Done" },
    { time: "14:05:45", event: "Adjusted Price for SKU-99", status: "-5%" },
    { time: "14:10:02", event: "LLM Description Generated", status: "Live" },
  ];

  return (
    <div className="min-h-screen bg-[#020203] text-white pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">Automation Control Center</h2>
          <p className="text-slate-300 mt-2 font-mono">Viewing Agentic Pipeline: v2.04</p>
        </header>

        {/* Real-time Agent Logs UI */}
        <div className="rounded-xl border border-white/40 bg-black overflow-hidden font-mono text-sm">
          <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/30">
            <span className="text-[10px] text-slate-500">terminal@aether-os</span>
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" /></div>
          </div>
          <div className="p-6 space-y-4">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-4 border-b border-white/10 pb-2">
                <span className="text-cyan-600">[{log.time}]</span>
                <span className="text-slate-300">{log.event}</span>
                <span className="ml-auto text-green-400">{log.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Next.js 16", "LangChain", "Redis", "Pinecone", "Stripe", "PostgreSQL", "Tailwind", "OpenAI"].map(tech => (
            <div key={tech} className="py-4 border border-white/30 rounded-lg text-center font-mono text-xs hover:bg-white hover:text-black transition cursor-crosshair">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}