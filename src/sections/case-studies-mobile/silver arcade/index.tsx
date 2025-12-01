import { AdvertisingPlatformVideo } from "../../case-studies/content/silver-arcade-premier-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { silverArcadePremierData } from "../../case-studies/content/silver-arcade-premier-data";

export function AdvertisingMobile() {
  return (
    <div className="w-full space-y-6">
      {/* Title and Description */}
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          Silver Arcade Premier Advertising Platform
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          An all-in-one advertising platform designed to streamline ad
        </p>
      </div>
      
      {/* Video Container without bento-square class - 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <AdvertisingPlatformVideo />
      </div>
      
      {/* Bottom Bar with tech stack */}
      <div className="bg-black border border-[#353739] rounded-2xl p-4">
        <BottomBar techStack={silverArcadePremierData.techStack} />
      </div>
      
      {/* Right Bar with buttons */}
      <div className="w-full">
        <RightBar projectData={silverArcadePremierData.projectData} />
      </div>
    </div>
  );
}