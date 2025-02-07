"use client"
import { ChevronFirst, ChevronLast, CircleUser, FileVideo, PanelLeft, ShieldPlus, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

function SideNav() {
  const MenuOptions = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelLeft,
    },
    {
      id: 2,
      name: "Create",
      path: "/dashboard/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUser,
    },
  ];

  const [expanded, setExpanded] = React.useState(true);

  return (
    <div className={`h-full shadow-md border-r flex flex-col bg-white transition-all overflow-hidden ${expanded ? "w-64" : "w-16"}`}>
      <div className="p-4 mb-3 flex justify-between items-center border-b">
      {expanded && (
          <Link href="/dashboard" className="p-1 rounded-lg bg-black">
            <Sparkles style={{ color: "white" }} />
          </Link>
        )}
        <button onClick={() => setExpanded(prev => !prev)}className="p-1 rounded-lg ml-auto">
          {expanded ? <ChevronFirst size={22}/> : <ChevronLast size={22}/>}
        </button>
      </div>
      <div className="grid gap-3 mx-2">
        {MenuOptions.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              key={item.id}
              className={`flex items-center gap-3 p-3 hover:bg-primary cursor-pointer hover:text-white rounded-md `}
            >
              <item.icon size={24} />
              <span className={`${expanded ? "text-sm font-medium" : "hidden"}`}>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
