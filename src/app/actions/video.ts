"use server";

import { db } from "@/db";
import { VideoData } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

export const saveVideoData = async (videoData: any) => {
  try {
    const { userId } = await auth(); 

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const insertedVideo = await db.insert(VideoData).values({
      script: videoData.videoScript,
      audioFileUrl: videoData.audioFileUrl,
      caption: videoData.caption,
      imageList: videoData.imageList,
      createdBy: userId, 
    }).returning();

    return { 
      success: true, 
      result: insertedVideo.map(video => ({
        id: video.id, // Include only serializable fields
        script: video.script,
        audioFileUrl: video.audioFileUrl,
        caption: video.caption,
        imageList: video.imageList,
        createdBy: video.createdBy,
      }))
    };
  } catch (error : any) {
    console.error("Error saving video data:", error);
    return { success: false, error: error.message };
  }
};
