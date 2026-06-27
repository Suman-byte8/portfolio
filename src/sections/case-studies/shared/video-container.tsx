import { DesignPlatformVideo } from "../content/cab-booking-system-video";
import { AdvertisingPlatformVideo } from "../content/silver-arcade-premier-video";
import { EcommerceVideo } from "../content/e-commerce-video";
import { FifaPredictorVideo } from "../content/fifa-worldcup-predictor-video";

interface VideoContainerProps {
  activeVideo: 'design' | 'advertising' | 'ecom' | 'fifa';
}

export function VideoContainer({ activeVideo }: VideoContainerProps) {
  return (
    <div className="w-full h-full relative">
      {/* For now, just render the active video */}
      {activeVideo === 'design' && <DesignPlatformVideo />}
      {activeVideo === 'advertising' && <AdvertisingPlatformVideo />}
      {activeVideo === 'ecom' && <EcommerceVideo />}
      {activeVideo === 'fifa' && <FifaPredictorVideo />}
    </div>
  );
}