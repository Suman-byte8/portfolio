import { EcommerceVideo } from "../../case-studies/content/e-commerce-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { ecommerceData } from "../../case-studies/content/e-commerce-data";

export function ECommercePlatform() {
  return (
    <div className="w-full space-y-6">
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          Sayan Digital Store
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Full-stack E-commerce platform | MERN stack | Redux Toolkit
        </p>
      </div>
      
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <EcommerceVideo />
      </div>
      
      <div className="bg-black border border-[#353739] rounded-2xl p-4">
        <BottomBar techStack={ecommerceData.techStack} />
      </div>
      
      <div className="w-full">
        <RightBar projectData={ecommerceData.projectData} />
      </div>
    </div>
  );
}
