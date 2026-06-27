import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function FifaPredictorVideo() {
  return (
    <div className="w-full h-full overflow-hidden">
      <CustomVideoPlayer
        imageUrl="https://res.cloudinary.com/dvoreldfc/image/upload/v1782581344/ChatGPT_Image_Jun_27_2026_10_58_31_PM_p9lk4q.png"
        className="w-full h-full [&>img]:w-full [&>img]:h-full"
      />
    </div>
  );
}
