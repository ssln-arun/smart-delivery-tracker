import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import networkReducer from './slices/networkSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    network: networkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;