import { VideoContainer } from './shared/video-container';
import { RightBar } from './shared/right-bar';
import { BottomBar } from './shared/bottom-bar';
import { cabBookingSystemData } from './content/cab-booking-system-data';
import { silverArcadePremierData } from './content/silver-arcade-premier-data';
import { ecommerceData } from './content/e-commerce-data';
import { fifaPredictorData } from './content/fifa-worldcup-predictor-data';
import { useScrollTransition } from './useScrollTransition';

export function TransitionLayout() {
  const {
    sectionRef,
    designVideoRef,
    advertisingVideoRef,
    ecomVideoRef,
    fifaVideoRef,
    rightBarRef,
    bottomBarRef,
    activeCaseStudy,
  } = useScrollTransition();

  // Get the current data based on active case study
  const currentData =
    activeCaseStudy === 'design' ? cabBookingSystemData :
      activeCaseStudy === 'advertising' ? silverArcadePremierData :
        activeCaseStudy === 'ecom' ? ecommerceData :
          fifaPredictorData;

  return (
    <div
      ref={sectionRef}
      className="flex flex-col gap-16"
    >
      {/* Content Container */}
      <div className="w-full h-[700px]">
        <div className="grid grid-cols-1 [@media(min-width:1390px)]:grid-cols-3 grid-rows-[1fr_auto] [@media(min-width:1390px)]:grid-rows-none gap-2 [@media(min-width:1390px)]:gap-6 h-full">
          {/* Left side - Overlapping Videos and BottomBar */}
          <div className="[@media(min-width:1390px)]:col-span-2 flex flex-col gap-6 h-full">
            {/* Video Container - Takes most height on small screens, flex-[3] on large screens */}
            <div className="bento-square flex-[4] [@media(min-width:1390px)]:flex-[3] relative overflow-hidden">
              {/* Design Platform Video */}
              <div
                ref={designVideoRef}
                className="absolute inset-0 w-full h-full"
              >
                <VideoContainer activeVideo="design" />
              </div>

              {/* Advertising Platform Video */}
              <div
                ref={advertisingVideoRef}
                className="absolute inset-0 w-full h-full"
              >
                <VideoContainer activeVideo="advertising" />
              </div>

              {/* E-commerce Platform Video */}
              <div
                ref={ecomVideoRef}
                className="absolute inset-0 w-full h-full"
              >
                <VideoContainer activeVideo="ecom" />
              </div>

              {/* FIFA Predictor Video */}
              <div
                ref={fifaVideoRef}
                className="absolute inset-0 w-full h-full"
              >
                <VideoContainer activeVideo="fifa" />
              </div>
            </div>

            {/* Bottom Bar - Minimal height on small screens, flex-1 on large screens */}
            <div
              ref={bottomBarRef}
              className="bg-black border border-[#353739] rounded-[2rem] p-4 [@media(min-width:1390px)]:p-8[@media(min-width:1390px)]:h-auto [@media(min-width:1390px)]:min-h-[200px] transition-all duration-300 ease-in-out hover:border-[#555759] hover:-translate-y-0.5 flex-none [@media(min-width:1390px)]:flex-1 [@media(min-width:1390px)]:mb-0 mb-3"
            >
              <BottomBar techStack={currentData.techStack} />
            </div>
          </div>

          {/* Right side - RightBar with conditional bento-square styling and minimal height on small screens */}
          <div
            ref={rightBarRef}
            className="[@media(min-width:1390px)]:h-auto [@media(min-width:1390px)]:bg-black [@media(min-width:1390px)]:border [@media(min-width:1390px)]:border-[#353739] [@media(min-width:1390px)]:rounded-[2rem] [@media(min-width:1390px)]:p-8 [@media(min-width:1390px)]:min-h-[200px] [@media(min-width:1390px)]:transition-all [@media(min-width:1390px)]:duration-300 [@media(min-width:1390px)]:ease-in-out [@media(min-width:1390px)]:hover:border-[#555759] [@media(min-width:1390px)]:hover:-translate-y-0.5 flex-none"
          >
            <RightBar projectData={currentData.projectData} />
          </div>
        </div>
      </div>
    </div>
  );
}