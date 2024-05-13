import {createSlice} from '@reduxjs/toolkit';
import {Address} from '../../models/address.ts';
import {getAddresses} from '../../api/services/address-service.ts';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [] as Address[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAddresses.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAddresses.fulfilled, (state, action) => {
      state.addresses = action.payload;
      state.loading = false;
    });
    builder.addCase(getAddresses.rejected, state => {
      state.loading = false;
    });
  },
});

export default addressSlice.reducer;
