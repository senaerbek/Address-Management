import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../index';
import {Address} from '../../models/address.ts';

export const getAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async () => {
    const response = await fetch(`${baseUrl}/addressList`);
    return await response.json();
  },
);

export const addAddress = createAsyncThunk(
  'addresses/addAddress',
  async (address: Partial<Address>) => {
    const response = await fetch(`${baseUrl}/addressList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(address),
    });
    return await response.json();
  },
);
