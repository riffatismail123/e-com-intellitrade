import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-100 border-b border-white/5 bg-[#020203]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-gray-300 tracking-tighter text-xl">
          AETHER<span className="text-cyan-500">.OS</span>
        </Link>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Link href="/" className="hover:text-white transition">Dashboard</Link>
          <Link href="/logistics" className="hover:text-white transition">Agent Logs</Link>
          <Link href="#" className="px-4 py-2 bg-white text-black rounded hover:bg-cyan-500 transition">Deploy Agent</Link>
        </div>
      </div>
    </nav>
  );
}