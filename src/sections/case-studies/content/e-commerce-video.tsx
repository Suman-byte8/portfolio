import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function EcommerceVideo() {
  return (
    <div className="w-full h-full overflow-hidden">
      <CustomVideoPlayer
        imageUrl="https://res.cloudinary.com/dvoreldfc/image/upload/v1782581242/ChatGPT_Image_Jun_27_2026_10_56_21_PM_c41ecr.png"
        className="w-full h-full [&>img]:w-full [&>img]:h-full"
      />
    </div>
  );
}
