import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { carsReducer } from './carsSlice';
import { favoritesReducer } from './favoritesSlice';
import { filterReducer } from './filterSlice';

import { pharmacyReducer } from './pharmacySlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
    pharmacies: pharmacyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
