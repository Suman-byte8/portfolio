import { create } from 'zustand';

// Mapping from desktop section IDs to navigation item names
const DESKTOP_SECTION_TO_NAV_MAP = {
  'home': "Home",
  'how-i-work': "How I Work",
  'case-studies': "Case Studies",
  'skills': "Skills",
  'about-me': "About me",
};

// Mapping from mobile section IDs to navigation item names
const MOBILE_SECTION_TO_NAV_MAP = {
  'home-mobile': "Home",
  'how-i-work-mobile': "How I Work",
  'case-studies-mobile': "Case Studies",
  'skills-mobile': "Skills",
  'about-me-mobile': "About me",
};

// Helper function to detect if we're on mobile
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const useNavigationStore = create((set, get) => ({
  activeSection: null,
  isNavigating: false,
  
  setActiveSection: (sectionId) => {
    set({ activeSection: sectionId });
  },
  
  setIsNavigating: (navigating) => {
    console.log(`🧭 Navigation state: ${navigating ? 'START' : 'END'}`);
    set({ isNavigating: navigating });
  },
  
  getActiveNavigationItem: () => {
    const { activeSection } = get();
    if (!activeSection) return null;
    
    // Check if it's a mobile section
    if (activeSection.includes('-mobile')) {
      return MOBILE_SECTION_TO_NAV_MAP[activeSection] || null;
    }
    
    // Otherwise it's a desktop section
    return DESKTOP_SECTION_TO_NAV_MAP[activeSection] || null;
  },
}));

// Export mappings and helper functions for use in other components
export { 
  DESKTOP_SECTION_TO_NAV_MAP, 
  MOBILE_SECTION_TO_NAV_MAP,
  isMobile
};