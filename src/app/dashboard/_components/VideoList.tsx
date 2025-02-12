import React, { useState } from 'react';
import { Thumbnail } from '@remotion/player';
import RemotionVideo from './RemotionVideo';
import PlayerDialogue from './PlayerDialogue';

interface Video {
  id: number;
  script: any[];
  audioFileUrl: string;
  caption: any[];
  imageList: string[];
  createdBy: string;
}

interface VideoListProps {
  readonly videoList: ReadonlyArray<Video>;
}

function VideoList({ videoList }: VideoListProps) {
    const [openPlayDialogue, setOpenPlayDialogue] = useState(0);
    const [videoId, setVideoId] = useState<number | null>(null);
  
  if (!videoList || videoList.length === 0) { 
    return <p className="mt-4 text-gray-500">No videos available</p>;
  }

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videoList.map((video) => (
        <div key={video.id} className="cursor-pointer bg-black w-[200px] h-[360px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
        onClick={() => {
          setVideoId(video.id);
          setOpenPlayDialogue(Date.now());
        }}
        >
          <Thumbnail
            className='rounded-lg'
            component={RemotionVideo}
            compositionWidth={200}
            compositionHeight={360}
            frameToDisplay={30}
            durationInFrames={120}
            fps={30}
            inputProps={{
              ...video,
              setDurationInFrame: (frameValue: any) => console.log(frameValue)
            }}
          />
        </div>
      ))}
      <PlayerDialogue playVideo={openPlayDialogue} videoId={videoId} />
    </div>
  );
}

export default VideoList;