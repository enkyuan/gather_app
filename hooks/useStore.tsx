import { create } from 'zustand';

const useStore = create(set => ({
  isSignUp: false,
  setIsSignUp: (value: boolean) => set({ isSignUp: value }),
}));

export default useStore;
