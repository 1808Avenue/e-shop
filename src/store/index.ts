import { configureStore } from '@reduxjs/toolkit';

import paginationReducer from './features/pagination/slice.ts';
import productsReducer from './features/products/slice.ts';
import sidebarReducer from './features/sidebar/slice.ts';

const store = configureStore({
  reducer: {
    products: productsReducer,
    pagination: paginationReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
