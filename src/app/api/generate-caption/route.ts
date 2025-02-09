import { NextRequest, NextResponse } from "next/server";
import { AssemblyAI } from "assemblyai";

export async function POST(req: NextRequest) {
  try {
    const { audioFileUrl } = await req.json();
    console.log(audioFileUrl);

    const client = new AssemblyAI({
      apiKey: process.env.ASSEMBLY_AI_API_KEY!,
    });

    const FILE_URL = audioFileUrl;

    const data = {
      audio: FILE_URL,
    };

    const transcript = await client.transcripts.transcribe(data);
    return NextResponse.json({success: true, 'result': transcript.words});
  } catch (error) {

    return NextResponse.json({
      success: false,
      error: "Error in transcribing audio",
    });
  }
}
