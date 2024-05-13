import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../index';
import {Address} from '../../models/address.ts';

export const getAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async () => {
    const response = await fetch(`${baseUrl}/addresses`);
    return await response.json();
  },
);

export const addAddress = createAsyncThunk(
  'addresses/addAddress',
  async (address: Partial<Address>) => {
    console.log(address);
    const response = await fetch(`${baseUrl}/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(address),
    });
    console.log(response);
    return await response.json();
  },
);
