import { create } from 'zustand';  // Use named import for 'create'

const useAuthStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
