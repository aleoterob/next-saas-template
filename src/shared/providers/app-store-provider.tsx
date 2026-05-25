'use client';

import { createContext, useContext, useState } from 'react';
import { useStore } from 'zustand';

import {
  createAppStore,
  defaultAppStoreState,
  type AppStore,
  type AppStoreState,
} from '@/shared/stores/app-store';

type AppStoreApi = ReturnType<typeof createAppStore>;

const AppStoreContext = createContext<AppStoreApi | null>(null);

type AppStoreProviderProps = {
  children: React.ReactNode;
  initialState?: AppStoreState;
};

export function AppStoreProvider({
  children,
  initialState = defaultAppStoreState,
}: AppStoreProviderProps) {
  const [store] = useState(() => createAppStore(initialState));

  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore<T>(selector: (store: AppStore) => T): T {
  const store = useContext(AppStoreContext);

  if (!store) {
    throw new Error('useAppStore must be used within AppStoreProvider.');
  }

  return useStore(store, selector);
}
