import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface NetworkState { status: 'online' | 'offline' | 'slow' | 'unknown'; }
const initialState: NetworkState = { status: 'unknown' };

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<NetworkState['status']>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = networkSlice.actions;
export default networkSlice.reducer;