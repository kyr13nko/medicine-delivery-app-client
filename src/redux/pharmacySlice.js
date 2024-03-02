import { createSlice } from '@reduxjs/toolkit';

import { fetchPharmacy } from './pharmacyOperations';

import { handleFulfilled, handlePending, handleRejected } from './pharmacyHelpers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPharmacy.pending, handlePending)
      .addCase(fetchPharmacy.fulfilled, handleFulfilled)
      .addCase(fetchPharmacy.rejected, handleRejected);
  },
});

export const pharmacyReducer = pharmacySlice.reducer;
