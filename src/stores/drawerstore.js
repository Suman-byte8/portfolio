import { create } from 'zustand';

export const useDrawerStore = create((set) => ({
  isOpen: false,
  
  open: () => {
    console.log('🎨 Opening global drawer');
    set({ isOpen: true });
  },
  
  close: () => {
    console.log('🎨 Closing global drawer');
    set({ isOpen: false });
  },
}));