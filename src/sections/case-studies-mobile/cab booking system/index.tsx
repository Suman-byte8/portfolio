import { DesignPlatformVideo } from "../../case-studies/content/cab-booking-system-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { cabBookingSystemData } from "../../case-studies/content/cab-booking-system-data";

export function DesignMobile() {
  return (
    <div className="w-full space-y-6">
      {/* Title and Description */}
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          Design Backend Architecture for a Cab Booking System
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Developed a robust backend architecture to support a scalable cab
        </p>
      </div>
      
      {/* Video Container without bento-square class - 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <DesignPlatformVideo />
      </div>
      
      {/* Bottom Bar with tech stack */}
      <div className="bg-black border border-[#353739] rounded-2xl p-4">
        <BottomBar techStack={cabBookingSystemData.techStack} />
      </div>
      
      {/* Right Bar with buttons */}
      <div className="w-full">
        <RightBar projectData={cabBookingSystemData.projectData} />
      </div>
    </div>
  );
}