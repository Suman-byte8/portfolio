import { FifaPredictorVideo } from "../../case-studies/content/fifa-worldcup-predictor-video";
import { BottomBar } from "../../case-studies/shared/bottom-bar";
import { RightBar } from "../../case-studies/shared/right-bar";
import { fifaPredictorData } from "../../case-studies/content/fifa-worldcup-predictor-data";

export function FifaPredictorPlatform() {
  return (
    <div className="w-full space-y-6">
      <div className="text-left">
        <h3 className="font-heading text-lg text-foreground">
          FIFA World Cup Predictor
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          AI/ML prediction model | Data Science | Python & FastAPI
        </p>
      </div>
      
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <FifaPredictorVideo />
      </div>
      
      <div className="bg-black border border-[#353739] rounded-2xl p-4">
        <BottomBar techStack={fifaPredictorData.techStack} />
      </div>
      
      <div className="w-full">
        <RightBar projectData={fifaPredictorData.projectData} />
      </div>
    </div>
  );
}
