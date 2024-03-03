import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// import { favoritesReducer } from './favoritesSlice';
// import { filterReducer } from './filterSlice';

import { pharmacyReducer } from './pharmacySlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: {
    // favorites: favoritesReducer,
    // filter: filterReducer,
    pharmacies: pharmacyReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
