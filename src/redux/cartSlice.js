import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  medicines: [],
  user: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const medicineInCart = payload;
      state.medicines.push(medicineInCart);
    },
    delFromCart: (state, { payload }) => {
      const medicineInCart = payload;
      state.medicines = state.medicines.filter(medicine => medicine._id !== medicineInCart._id);
    },
    updateUser: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
    resetUser: state => {
      state.user = initialState.user;
    },
  },
});

const cartConfig = {
  key: 'cart',
  storage,
  whitelist: ['user', 'medicines'],
};

export const { addToCart, delFromCart, updateUser, resetUser } = cartSlice.actions;

export const cartReducer = persistReducer(cartConfig, cartSlice.reducer);
