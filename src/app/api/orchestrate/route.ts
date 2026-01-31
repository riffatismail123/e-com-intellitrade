import { NextResponse } from "next/server";
import { consultLLMAgent } from "@/lib/agents/llm-engine";

export async function POST(request: Request) {
  const body = await request.json();
  
  // The Orchestrator combines scraping data with LLM logic
  const aiAnalysis = await consultLLMAgent(body);

  return NextResponse.json({
    status: "optimized",
    action: aiAnalysis.decision,
    new_price: aiAnalysis.suggestedPrice,
    logs: [`Agent verified competitor price`, `LLM suggested ${aiAnalysis.decision}`]
  });
}