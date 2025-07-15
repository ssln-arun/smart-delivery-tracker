import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type LatLng = { lat: number; lng: number };
interface LocationState { current?: LatLng; queue: LatLng[]; synced: boolean; }

const initialState: LocationState = { queue: [], synced: true };

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<LatLng>) => {
      state.current = action.payload;
    },
    enqueueLocation: (state, action: PayloadAction<LatLng>) => {
      state.queue.push(action.payload);
      state.synced = false;
    },
    clearQueue: (state) => {
      state.queue = [];
      state.synced = true;
    },
  },
});

export const { setCurrent, enqueueLocation, clearQueue } = locationSlice.actions;
export default locationSlice.reducer;