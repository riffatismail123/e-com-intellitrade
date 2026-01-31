"use client";
import { useEffect, useState } from "react";

const logs = [
  "Initialize Aether-OS...",
  "Status: Agent-01 Synchronized",
  "Scraping global_market_index...",
  "Price Shift Detected: SKU-402 (+4.2%)",
  "Adjusting local inventory pricing...",
  "LLM: Regenerating SEO Metadata for 'Smart-Hub v2'",
  "Vector DB: Vectorizing 42 new product images...",
  "Success: Pipeline stabilized."
];

export default function Terminal() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        if (prev.length >= logs.length) return [logs[0]];
        return [...prev, logs[prev.length]];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-xl border border-white/10 bg-black overflow-hidden font-mono text-xs shadow-2xl">
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-slate-500 lowercase">agent_stream.sh</span>
      </div>
      <div className="p-6 h-64 overflow-y-auto relative">
        <div className="scanline" />
        {visibleLogs.map((log, i) => (
          <div key={i} className="mb-2 flex gap-3">
            <span className="text-cyan-500/50">[{new Date().toLocaleTimeString()}]</span>
            <span className="text-slate-300 tracking-tight">{log}</span>
          </div>
        ))}
        <div className="animate-pulse inline-block w-2 h-4 bg-cyan-500 ml-1" />
      </div>
    </div>
  );
}