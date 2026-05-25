import { createStore } from 'zustand/vanilla';

export type AppStoreState = {
  sidebarOpen: boolean;
};

export type AppStoreActions = {
  setSidebarOpen: (sidebarOpen: boolean) => void;
  toggleSidebar: () => void;
};

export type AppStore = AppStoreState & AppStoreActions;

export const defaultAppStoreState: AppStoreState = {
  sidebarOpen: true,
};

export function createAppStore(
  initialState: AppStoreState = defaultAppStoreState,
) {
  return createStore<AppStore>()((set) => ({
    ...initialState,
    setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
    toggleSidebar: () =>
      set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  }));
}
