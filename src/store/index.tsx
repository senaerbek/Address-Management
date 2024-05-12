import {configureStore} from '@reduxjs/toolkit';
import addressSlice from './address/addressSlice.ts';

export const store = configureStore({
  reducer: {
    addresses: addressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
