import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function EcommerceVideo() {
  return (
    <div className="w-full h-full overflow-hidden">
      <CustomVideoPlayer
        imageUrl={`${import.meta.env.BASE_URL}ecom.png`}
        className="w-full h-full [&>img]:w-full [&>img]:h-full"
      />
    </div>
  );
}
