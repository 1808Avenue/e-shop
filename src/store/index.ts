import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/products.ts';
import favProductsReducer from './features/favProducts/slice.ts';
import productsReducer from './features/products/slice.ts';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productsReducer,
    favProducts: favProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
