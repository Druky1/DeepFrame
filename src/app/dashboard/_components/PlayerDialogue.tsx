import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RemotionVideo from "./RemotionVideo";
import { Button } from "@/components/ui/button";
import { getVideoData } from "@/app/actions/getVideoData";
import { Loader2 } from "lucide-react";

function PlayerDialogue({ playVideo, videoId }: any) {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [videoData, setVideoData] = useState<any>(null);
  const [durationInFrame, setDurationInFrame] = useState(100);

  useEffect(() => {
    if (playVideo && videoId) {
      setOpenDialogue(true);
      fetchVideoData();
    }
  }, [playVideo, videoId]);

  const fetchVideoData = async () => {
    const result = await getVideoData(videoId);
    console.log(result);
    setVideoData(result);
  };

  return (
    <Dialog open={openDialogue} onOpenChange={(isOpen) => setOpenDialogue(isOpen)}>
      <DialogContent className="bg-white flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold my-5">
            Your video is ready!
          </DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground">
          {videoData ? (
            <Player
            className="rounded-lg"
              component={RemotionVideo}
              durationInFrames={Number(durationInFrame.toFixed(0))}
              compositionWidth={300}
              compositionHeight={450}
              fps={30}
              controls={true}
              inputProps={{
                ...videoData,
                setDurationInFrame: (frameValue: any) =>
                  setDurationInFrame(frameValue),
              }}
            />
          ) : (
            <Loader2 className="h-10 w-10 animate-spin" />
          )}
        </div>
        <div className="flex justify-around gap-10 mt-5">
          <Button variant="ghost" onClick={() => setOpenDialogue(false)}>
            Cancel
          </Button>
          <Button variant="default">Export</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PlayerDialogue;
