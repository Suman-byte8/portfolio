import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function DesignPlatformVideo() {
  return (
    <div className="w-full h-full overflow-hidden">
      <CustomVideoPlayer
        imageUrl="/cab.png"
        className="w-full h-full [&>img]:w-full [&>img]:h-full"
      />
    </div>
  );
}