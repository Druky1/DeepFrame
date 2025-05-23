import { firebaseStorage } from "@/config/firebase-config";
import { ConvertImage } from "@/utility/convertImage";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log("Received prompt:", prompt);

    const replicate = new Replicate({
      auth:process.env.REPLICATE_API_TOKEN!,
    });

    const input = {
      prompt: prompt,
      height: 1280,
      width: 1024,
      num_outputs: 1,
    };
    
    const output = await replicate.run(
      "bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
      { input }
    );
    console.log(output);

    if (!Array.isArray(output) || output.length === 0) {
      return NextResponse.json({ result: [], message: "No images generated by Replicate" }, { status: 200 });
    }
    
    // Extract the first image URL (if only one output is requested)
    const imageUrl = output[0];

    // Saving To Firebase
    const base64Image = "data:image/png;base64," + await ConvertImage(imageUrl);
    const fileName = "deep-frame-audio/"+Date.now()+".png";
    const storageRef = ref(firebaseStorage, fileName);

    await uploadString(storageRef,base64Image, 'data_url');

    const downloadUrl = await getDownloadURL(storageRef);

    console.log("Image saved to Firebase:", downloadUrl);
    
    return NextResponse.json({ result: downloadUrl}, { status: 200 });

  } catch (error: any) {
    console.error("Error in generate-image API:", error.message);
    return NextResponse.json({ result: "error", message: error.message }, { status: 500 });
  }
}
