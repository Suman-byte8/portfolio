import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function EcommerceVideo() {
    return (
        <div className="w-full h-full overflow-hidden">
            <CustomVideoPlayer
                imageUrl="/ecom.png"
                className="w-full h-full [&>img]:w-full [&>img]:h-full"
            />
        </div>
    );
}
