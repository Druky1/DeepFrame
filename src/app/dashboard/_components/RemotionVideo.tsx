import React, { useEffect } from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

function RemotionVideo({
  script,
  imageList,
  audioFileUrl,
  caption,
  setDurationInFrame,
}: any) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Calculate total duration in frames (ONLY ONCE)
  useEffect(() => {
    if (caption?.length > 0) {
      const totalFrames = (caption[caption.length - 1].end / 1000) * fps;
      setDurationInFrame(totalFrames);
    }
  }, [caption, fps, setDurationInFrame]);

  const getCurrentCaption = () => {
    const currentTime = (frame / 30) * 1000; // Convert frame to milliseconds
    const currentCaption = caption.find(
      (item: any) => currentTime >= item.start && currentTime <= item.end
    );
    return currentCaption ? currentCaption.text : "";
  };

  return (
    script && (
      <AbsoluteFill className="bg-black">
        {imageList.map((item: any, index: number) => {
          const startTime = (index * (caption[caption.length - 1].end / 1000) * fps) / imageList.length;
          const duration = (caption[caption.length - 1].end / 1000) * fps;
          const scale = interpolate(
            frame,
            [startTime, startTime + duration / 2, startTime + duration],
            [1, 1.2, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          return (
            <Sequence key={index} from={startTime} durationInFrames={duration}>
              <Img
                src={item}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  transform: `scale(${scale})`,
                  borderRadius: "10px",
                }}
              />
              <AbsoluteFill className="text-white flex justify-center items-center top-100 bottom-0 h-[200px] w-full">
                <p className="text-2xl font-semibold">{getCurrentCaption()}</p>
              </AbsoluteFill>
            </Sequence>
          );
        })}
        <Audio src={audioFileUrl} />
      </AbsoluteFill>
    )
  );
}

export default RemotionVideo;
