"use client";
import React, { useState } from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { VideoDataContext } from "../_context/VideoDataContext";
import UserProvider from "./_components/UserProvider";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [videoData, setVideoData] = useState([]);
  const value = React.useMemo(() => ({ videoData, setVideoData }), [videoData]);

  return (
    <VideoDataContext.Provider value={value}>
      <UserProvider>
        {(user) => (
          <div>
            {/* Sidebar */}
            <div className="hidden md:block h-screen bg-white fixed mt-[69px]">
              <SideNav />
            </div>
            {/* Main Content */}
            <div>
              <Header user={user} />
              <div className="md:ml-64 p-10">{children}</div>
            </div>
          </div>
        )}
      </UserProvider>
    </VideoDataContext.Provider>
  );
}

export default DashboardLayout;
