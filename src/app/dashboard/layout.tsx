"use client";
import React, { useState } from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { VideoDataContext } from "../_context/VideoDataContext";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const [videoData, setVideoData] = useState([]);
  const value = React.useMemo(() => ({ videoData, setVideoData }), [videoData]);
  return (
    <VideoDataContext.Provider value={value}>
      <div>
        <div className="hidden md:block h-screen bg-white fixed mt-[69px]">
          <SideNav />
        </div>
        <div>
          <Header />
          <div className="md:ml-64 p-10">{children}</div>
        </div>
      </div>
    </VideoDataContext.Provider>
  );
}

export default DashboardLayout;
