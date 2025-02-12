"use server";

import { db } from "@/db";
import { VideoData } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getVideoData = async (videoId: string) => {
  try {
    const result = await db
      .select()
      .from(VideoData)
      .where(eq(VideoData.id, Number(videoId)));

    return result[0] || null; // Return the video data or null if not found
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
};
