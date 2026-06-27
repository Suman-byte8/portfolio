import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export type ActiveCaseStudy = 'design' | 'advertising' | 'ecom' | 'fifa';

export function useScrollTransition() {
  // Refs for GSAP targeting
  const sectionRef = useRef<HTMLDivElement>(null);
  const designVideoRef = useRef<HTMLDivElement>(null);
  const advertisingVideoRef = useRef<HTMLDivElement>(null);
  const ecomVideoRef = useRef<HTMLDivElement>(null);
  const fifaVideoRef = useRef<HTMLDivElement>(null);
  const rightBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // State to track which case study is currently active
  const [activeCaseStudy, setActiveCaseStudy] = useState<ActiveCaseStudy>('design');

  useLayoutEffect(() => {
    if (!sectionRef.current || !designVideoRef.current || !advertisingVideoRef.current || !ecomVideoRef.current || !fifaVideoRef.current) {
      return;
    }

    const section = sectionRef.current;
    const designVideo = designVideoRef.current;
    const advertisingVideo = advertisingVideoRef.current;
    const ecomVideo = ecomVideoRef.current;
    const fifaVideo = fifaVideoRef.current;

    // Set initial positions
    gsap.set(designVideo, { y: 0, zIndex: 4 });
    gsap.set(advertisingVideo, { y: '100%', zIndex: 3 });
    gsap.set(ecomVideo, { y: '100%', zIndex: 2 });
    gsap.set(fifaVideo, { y: '100%', zIndex: 1 });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: '+=300%', // Increased scroll distance for 4 projects
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Content switching based on animation progress
          if (self.progress < 0.25) {
            setActiveCaseStudy('design');
          } else if (self.progress < 0.50) {
            setActiveCaseStudy('advertising');
          } else if (self.progress < 0.75) {
            setActiveCaseStudy('ecom');
          } else {
            setActiveCaseStudy('fifa');
          }
        },
        invalidateOnRefresh: true,
      }
    });

    // Add video transition animations to timeline
    tl
      // Design video slides up and out
      .to(designVideo, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut'
      })
      // Advertising video slides up to replace it
      .to(advertisingVideo, {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut'
      }, 0)
      // Advertising video slides up and out
      .to(advertisingVideo, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut'
      }, 1)
      // Ecom video slides up to replace it
      .to(ecomVideo, {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut'
      }, 1)
      // Ecom video slides up and out
      .to(ecomVideo, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut'
      }, 2)
      // Fifa video slides up to replace it
      .to(fifaVideo, {
        y: '0%',
        duration: 1,
        ease: 'power2.inOut'
      }, 2);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    sectionRef,
    designVideoRef,
    advertisingVideoRef,
    ecomVideoRef,
    fifaVideoRef,
    rightBarRef,
    bottomBarRef,
    activeCaseStudy,
  };
}