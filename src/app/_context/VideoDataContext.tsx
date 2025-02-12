import { createContext } from "react";

export const VideoDataContext = createContext({videoData: [], setVideoData: (data: any) => {}});