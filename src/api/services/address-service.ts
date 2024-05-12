import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../index';

export const getAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async () => {
    const response = await fetch(`${baseUrl}/addresses`);
    return await response.json();
  },
);
