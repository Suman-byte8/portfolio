import { XIcon } from '@/components/icons/socials/x-icon';
import { GithubIcon } from '../../../components/icons/socials/github-icon';
import { InstagramIcon } from '@/components/icons/socials/instagram-icon';
import { ThreadsIcon } from '@/components/icons/socials/threads-icon';
// import { LinkedinIcon } from '../../../components/icons/socials/linkedin-icon';

export function SocialLinks() {
  const handleGithubClick = () => {
    window.open('https://github.com/Suman-byte8', '_blank', 'noopener,noreferrer');
  };

  const handleTwitterClick = () => {
    window.open('https://x.com/Dev_Suman07', '_blank', 'noopener,noreferrer');
  };


  const handleThreadsClick = () => {
    window.open('https://www.threads.com/@sum4.an?xmt=AQF0ZEHpJz3K2TpppqM-9UNoYuWoI0OaoKZZ_SgRgV-6P1I', '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/sum4.an/', '_blank', 'noopener,noreferrer');
  };

  // const handleLinkedInClick = () => {
  //   window.open('https://www.linkedin.com/in/stav-symeonidis/', '_blank', 'noopener,noreferrer');
  // };

  return (
    <div className="flex gap-3">
      <button 
        onClick={handleGithubClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit GitHub profile"
      >
        <GithubIcon className="w-6 h-6" />
      </button>
      {/* <button 
        onClick={handleLinkedInClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit LinkedIn profile"
      >
        <LinkedinIcon className="w-6 h-6" />
      </button> */}
          <button 
        onClick={handleTwitterClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit GitHub profile"
      >
        <XIcon className="w-6 h-6" />
      </button>

      <button 
        onClick={handleInstagramClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit GitHub profile"
      >
        <InstagramIcon className="w-6 h-6"  />
      </button>

      <button 
        onClick={handleThreadsClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit GitHub profile"
      >
        <ThreadsIcon className="w-6 h-6" />
      </button>
    </div>
  );
}