"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';


function CreateNew() {

  interface VideoScriptItem {
    ContentText: string;
    imagePrompt: string;
  }

  const [formData, setFormData] = useState<Record<string, any>>({});

  const [loading, setLoading] = useState(false);

  const [audioFileUrl, setAudioFileUrl] = useState("");

  const [caption, setCaption] = useState('');

  const [videoScript, setVideoScript] = useState<VideoScriptItem[]>([]);

  const onHandleInputChange = (fieldName: any, fieldValue: any) => {
    console.log(fieldName, fieldValue);
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  // On create button click this runs
  const onCreateClickHandler = () => {
    getVideoScript();
  }

  // Getting the video script
  const getVideoScript = async () => {
    setLoading(true); // Start loading
    try {
      const prompt = `Write a script to generate ${formData.duration} video on topic ${formData.topic} in style ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, no plain text`;
      console.log(prompt);
      const response = await axios.post('/api/get-video-script', {
        prompt: prompt
      });
      console.log(response.data);
      setVideoScript(response.data.response);
      generateAudioFile(response.data.response);
    } catch (error) {
      console.error("Error fetching video script:", error);
    } finally {
      setLoading(false); // Stop loading after request completion
    }
  };

  // Generating the audio file from the video script
  const generateAudioFile = async (videoScriptData: any) => {
    setLoading(true);
    let script = "";
    const id = uuidv4();
  
    videoScriptData.forEach((item: any) => {
      script += item.ContentText + " ";
    });
  
    const response = await axios.post("/api/generate-audio", {
      text: script,
      id: id,
    });
  
    console.log(response.data);
  
    const newAudioUrl = response.data.downloadURL; // Store the new URL in a variable
    setAudioFileUrl(newAudioUrl);
  
    generateAudioCaption(newAudioUrl); // Use the latest value directly
  
    setLoading(false);
  };

  // Generating the caption from the audio file
  const generateAudioCaption = async (fileUrl : any) => {
    setLoading(true);
    const response = await axios.post('/api/generate-caption', {
      audioFileUrl: fileUrl
    })
    console.log(response.data);
    setCaption(response?.data?.result);
    setLoading(false);
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-3xl text-center'>Create Your Magic ✨</h2>

      <div className='mt-10 shadow-md p-10'>
        <SelectTopic onUserSelect={onHandleInputChange}/>
        <SelectStyle onUserSelect={onHandleInputChange}/>
        <SelectDuration onUserSelect={onHandleInputChange}/>
        <Button className='mt-12 w-full flex items-center justify-center' disabled={loading} onClick={onCreateClickHandler}>
          Create Video
          {loading && <Loader2 className='mr-2 h-5 w-5 animate-spin'/>}
          </Button>
      </div>
    </div>
  )
}

export default CreateNew