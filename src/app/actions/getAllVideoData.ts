"use server";

import { db } from "@/db";
import { VideoData } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export const getAllVideoData = async () => {
  try {
    const { userId } = await auth();

    if (!userId) {
      console.error("No user ID found. Returning empty data.");
      return [];
    }
    
    const result = await db.select().from(VideoData).where(eq(VideoData.createdBy, userId));
    return result;
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
};