import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../index';

export const getCities = createAsyncThunk('cities/fetchCities', async () => {
  const response = await fetch(`${baseUrl}/cities`);
  return await response.json();
});
