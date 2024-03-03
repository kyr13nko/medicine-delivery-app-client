import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const medicineInCart = payload;
      state.items.push(medicineInCart);
    },
    delFromCart: (state, { payload }) => {
      const medicineInCart = payload;
      state.items = state.items.filter(medicine => medicine._id !== medicineInCart._id);
    },
  },
});

const cartConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

export const { addToCart, delFromCart } = cartSlice.actions;

export const cartReducer = persistReducer(cartConfig, cartSlice.reducer);
