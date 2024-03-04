import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.baseURL = 'https://medicine-delivery-app-server.onrender.com/api';

export const sendOrder = createAsyncThunk('orders/fetchAll', async (order, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/orders', order);

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
