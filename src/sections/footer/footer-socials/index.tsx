import { GithubIcon } from '@/components/icons/socials/github-icon';
import { InstagramIcon } from '@/components/icons/socials/instagram-icon';


export function FooterSocials() {
  const handleGithubClick = () => {
    window.open('https://github.com/Suman-byte8', '_blank', 'noopener,noreferrer');
  };

const handleInstagramClick = () => {
    window.open('https://www.instagram.com/sum4.an/', '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="flex items-center gap-6">
      <button 
        onClick={handleGithubClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit GitHub profile"
      >
        <GithubIcon className="w-4 h-4" />
        Github
      </button>
      <button 
        onClick={handleInstagramClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit LinkedIn profile"
      >
        <InstagramIcon className="h-5 w-5 fill-current" />
        Instagram
      </button>
    </div>
  );
}