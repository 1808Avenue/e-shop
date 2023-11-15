import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/products/productsSlice.ts';
import paginationReducer from './slices/pagination/paginationSlice.ts';

const store = configureStore({
  reducer: {
    products: productsReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
