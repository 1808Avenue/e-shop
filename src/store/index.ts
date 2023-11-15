import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/slice.ts';
import paginationReducer from './features/pagination/slice.ts';

const store = configureStore({
  reducer: {
    products: productsReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
