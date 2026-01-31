import { NextResponse } from "next/server";
import { runScraperAgent } from "@/lib/agents/scraper";

export async function POST(request: Request) {
  const { url } = await request.json();
  
  try {
    const result = await runScraperAgent(url);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Scrape failed" }, { status: 500 });
  }
}