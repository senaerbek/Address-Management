import {createSlice} from '@reduxjs/toolkit';
import {City} from '../../models/city.ts';
import {getCities} from '../../api/services/city-service.ts';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    cities: [] as City[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCities.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.loading = false;
    });
    builder.addCase(getCities.rejected, state => {
      state.loading = false;
    });
  },
});

export default addressSlice.reducer;
