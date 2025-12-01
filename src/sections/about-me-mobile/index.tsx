import { AchievementCard } from '../about-me/achievement-card';
import { ProfileSection } from '../about-me/profile-section';
import { FeatureCard } from '../about-me/feature-card';
import { SimpleTextCard } from '../about-me/simple-text-card';
import { TrustIndicator } from '../about-me/trust-indicator';
import { QuoteCard } from '../about-me/quote-card';

// Import SVG assets
import zapIcon from '../../assets/zapIcon.svg';
import rocketIcon from '../../assets/rocketIcon.svg';
import { ExperienceMobile } from './experience-mobile';

export function AboutMeMobile() {
  return (
    <section 
      id="about-me-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Top row: 2 achievement cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AchievementCard 
            title={<>Full-Stack Dev<br />Internship<br />2024</>}
            description="Next24Tech Technology & Services"
          />
          <AchievementCard 
            title={<>Hackathon<br />Performer<br />2023</>}
            description="Recognized for MERN-based project"
          />
        </div>

        {/* Bottom row: 1 achievement card */}
        <div className="grid grid-cols-1 mb-4">
          <AchievementCard 
            title={<>10+ Projects Built Across Web</>}
            description="MERN • Next.js • GSAP • APIs"
          />
        </div>

        {/* Profile Section */}
        <div className="w-full mb-4">
          <ProfileSection />
        </div>

        {/* Feature Cards - stacked on small screens, side by side on 663px+ */}
        <div className="grid grid-cols-1 [@media(min-width:663px)]:grid-cols-2 gap-4 mb-4">
          <FeatureCard 
            icon={rocketIcon} 
            text={<>Idea<br className="[@media(min-width:477px)]:hidden" /> to Production</>}
            altText="Idea to Production"
            variant="text-right-icon-left"
          />
          <FeatureCard 
            icon={zapIcon} 
            text={<>Scalable<br className="[@media(min-width:477px)]:hidden" /> Solutions</>}
            altText="Scalable solutions"
            variant="text-left-icon-right"
          />
        </div>

        {/* Simple Text Card */}
        <div className="w-full mb-4">
          <SimpleTextCard text="Compliance Standards" />
        </div>

        {/* First row: SimpleTextCard and TrustIndicator */}
        <div className="grid grid-cols-1 [@media(min-width:510px)]:grid-cols-2 gap-4 mb-4">
          {/* <TrustIndicator /> */}
          <SimpleTextCard text="Creative Delivery" />
        </div>

        {/* Second row: QuoteCard */}
        <div className="w-full mb-4">
          <QuoteCard />
        </div>

        {/* Experience Section */}
        <div className="bento-square w-full">
          <ExperienceMobile />
        </div>
      </div>
    </section>
  );
}