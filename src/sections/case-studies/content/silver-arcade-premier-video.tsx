import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function AdvertisingPlatformVideo() {
  return (
    <CustomVideoPlayer
      imageUrl={`${import.meta.env.BASE_URL}sap.png`}
      className="w-full h-full overflow-hidden"
    />
  );
}
