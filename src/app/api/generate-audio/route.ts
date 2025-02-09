import { NextRequest, NextResponse } from "next/server";
import textToSpeech, {protos} from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {firebaseStorage} from "../../../config/firebase-config";

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_TEXT_TO_SPEECH_API_KEY!
});

export async function POST(req: NextRequest) {

  const {text, id} = await req.json();

  const storageRef = ref(firebaseStorage, 'deep-frame-audio/' + id + '.mp3');

  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: { languageCode: "en-US", ssmlGender: protos.google.cloud.texttospeech.v1.SsmlVoiceGender.NEUTRAL },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);
  
  if (!response.audioContent) {
    return NextResponse.json({ success: false, error: "No audio content generated" });
  }

  const audioBuffer = Buffer.from(response.audioContent);
  await uploadBytes(storageRef, audioBuffer, { contentType: 'audio/mp3' });
  const downloadURL = await getDownloadURL(storageRef);

  return NextResponse.json({ success: true, downloadURL });
  
}