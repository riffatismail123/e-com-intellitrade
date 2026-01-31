import { ReactNode } from "react";

interface AgentCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent: string; // Tailwind color like 'cyan' or 'purple'
}

export default function AgentCard({ icon, title, description, accent }: AgentCardProps) {
  const accentColors: any = {
    cyan: "group-hover:text-cyan-400 group-hover:border-cyan-500/50",
    purple: "group-hover:text-purple-400 group-hover:border-purple-500/50",
    green: "group-hover:text-green-400 group-hover:border-green-500/50",
  };

  return (
    <div className={`p-8 bg-black border border-white/5 rounded-3xl transition-all duration-500 group cursor-pointer ${accentColors[accent]}`}>
      <div className={`mb-6 transition-colors duration-500 ${accentColors[accent].split(' ')[0]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      <div className="mt-6 h-1 w-0 group-hover:w-full bg-current transition-all duration-500 opacity-20" />
    </div>
  );
}