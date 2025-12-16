import React from 'react';
import { RootStore } from './RootStore.ts';

export const store = RootStore.create({
  meters: [],
  areas: {},
});

export const StoreContext = React.createContext(store);

export const useStore = () => React.useContext(StoreContext);
