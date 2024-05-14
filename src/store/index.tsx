import {configureStore} from '@reduxjs/toolkit';
import addressSlice from './address/addressSlice.ts';
import citySlice from './city/citySlice.ts';

export const store = configureStore({
  reducer: {
    addresses: addressSlice,
    cities: citySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
