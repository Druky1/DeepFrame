import { chatSession } from "@/config/model";
import { NextRequest, NextResponse } from "next/server";


// Send Request to GEMINI API
export async function POST(req: NextRequest) {
  try {
    const {prompt} = await req.json();
    console.log(prompt);

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return NextResponse.json({'response': JSON.parse(result.response.text())});

  } catch (error) {
    return NextResponse.json({'error': error});
  }
  
}
