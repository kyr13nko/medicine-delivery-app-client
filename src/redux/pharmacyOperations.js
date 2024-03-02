import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://medicine-delivery-app-server.onrender.com/api';

export const fetchPharmacy = createAsyncThunk(
  'pharmacies/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/pharmacies');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
