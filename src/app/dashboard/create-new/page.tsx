"use client";
import React, { useContext, useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { VideoDataContext } from "@/app/_context/VideoDataContext";
import { saveVideoData } from "@/app/actions/video";
import PlayerDialogue from "../_components/PlayerDialogue";

function CreateNew() {
  interface VideoScriptItem {
    ContentText: string;
    imagePrompt: string;
  }

  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const { setVideoData } = useContext(VideoDataContext);
  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState("15");

  const onHandleInputChange = (fieldName: any, fieldValue: any) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const onCreateClickHandler = async () => {
    setLoading(true);
    try {
      const scriptData = await getVideoScript();
      const audioUrl = await generateAudioFile(scriptData);
      const images = await generateImage(scriptData);
      const caption = await generateAudioCaption(audioUrl);
      
      const finalVideoData = {
        videoScript: scriptData,
        audioFileUrl: audioUrl,
        imageList: images,
        caption: caption,
      };
      
      setVideoData(finalVideoData);
      await handleSaveVideoData(finalVideoData);
    } catch (error) {
      console.error("Error in video creation process:", error);
    } finally {
      setLoading(false);
    }
  };

  const getVideoScript = async () => {
    const prompt = `Write a script to generate ${formData.duration} video on topic ${formData.topic} in style ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, no plain text.`;
    const response = await axios.post("/api/get-video-script", { prompt });
    return response.data.response;
  };

  const generateAudioFile = async (videoScriptData: VideoScriptItem[]) => {
    const script = videoScriptData.map((item) => item.ContentText).join(" ");
    const id = uuidv4();
    const response = await axios.post("/api/generate-audio", { text: script, id });
    return response.data.downloadURL;
  };

  const generateAudioCaption = async (fileUrl: string) => {
    const response = await axios.post("/api/generate-caption", { audioFileUrl: fileUrl });
    return response.data.result;
  };

  const generateImage = async (videoScriptData: VideoScriptItem[]) => {
    const imageRequests = videoScriptData.map(async (item) => {
      const response = await axios.post("/api/generate-image", { prompt: item.imagePrompt });
      return Array.isArray(response.data.result) ? response.data.result[0] : response.data.result;
    });
    return await Promise.all(imageRequests);
  };

  const handleSaveVideoData = async (videoData: any) => {
    console.log("Final video data before saving:", videoData);
  
    if (!videoData.videoScript || !videoData.audioFileUrl || !videoData.imageList) {
      console.error("Missing data fields:", videoData);
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await saveVideoData(videoData);
  
      // Ensure response is serializable
      const plainResponse = JSON.parse(JSON.stringify(response));
  
      if (!plainResponse.success) {
        console.error("Failed to save video:", plainResponse.error);
      } else {
        console.log("Video saved successfully:", plainResponse.result);
      }
      setVideoId(plainResponse.result[0].id);
      setPlayVideo(true);
    } catch (error) {
      console.error("Error saving video data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-3xl text-center">Create Your Magic ✨</h2>
      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="mt-12 w-full flex items-center justify-center" disabled={loading} onClick={onCreateClickHandler}>
          Create Video
          {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        </Button>
      </div>
      <PlayerDialogue playVideo={playVideo} videoId={videoId} />
    </div>
  );
}

export default CreateNew;
