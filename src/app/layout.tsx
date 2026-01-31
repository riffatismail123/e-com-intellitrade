import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Aether OS | Agentic Automation",
  description: "Autonomous E-commerce Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable} ${mono.variable} antialiased 
          bg-[#020203] text-white overflow-x-hidden
          bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] 
          bg-size-[40px_40px]
        `}
      >
        {/* Progress Bar Emulation */}
        <div className="fixed top-0 left-0 h-px bg-cyan-500 z-110 w-full opacity-20" />
        
        <Navbar />
        
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>

        <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-sm font-mono text-slate-200">
             © 2026 <span className="text-white uppercase">Aether_Labs</span> 
             <span className="mx-2 text-slate-200">/</span> 
            POWERED BY <span className="text-cyan-500 font-bold uppercase tracking-wider">riffat.ismail</span>
           <span className="ml-2 text-[10px] px-1.5 py-0.5 border border-green-500/20 text-green-500 rounded bg-green-500/5">
          SYSTEM_STABLE
           </span>
              </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-cyan-500 transition">GitHub</a>
              <a href="#" className="hover:text-cyan-500 transition">Docs</a>
              <a href="#" className="hover:text-cyan-500 transition">Status</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}