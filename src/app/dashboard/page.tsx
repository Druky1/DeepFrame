"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import EmptyState from "./_components/EmptyState";
import Link from "next/link";
import { getAllVideoData } from "@/app/actions/getAllVideoData";
import VideoList from "./_components/VideoList";
import { Loader2 } from "lucide-react";

function Dashboard() {
  const [videoList, setVideoList] = useState<any[]>([]);
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    console.log("📡 Fetching video data...");
    setLoading(true);

    try {
      const response = await getAllVideoData();
      console.log("🎥 Received response:", response);

      if (response && Array.isArray(response)) {
        setVideoList(response);
        console.log("✅ Updated videoList state:", response);
      } else {
        console.error("Invalid data format received:", response);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Render the content based on the videoList state
  const renderContent = () => {
    if (videoList.length === 0) {
      return <EmptyState />;
    } else {
      return <VideoList videoList={videoList} />;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">Dashboard</h2>
        <Link href="/dashboard/create-new">
          <Button>Create New</Button>
        </Link>
      </div>
      {loading ? (
        <Loader2 className="h-10 w-10 mt-10 animate-spin" />
      ) : renderContent()
    }
    </div>
  );
}

export default Dashboard;
