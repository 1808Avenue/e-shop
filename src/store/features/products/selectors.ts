import { RootState } from '../..';

export const selectProducts = (state: RootState) => state.products.products;

export const selectTotalProducts = (state: RootState) =>
  state.products.totalProducts;

export const selectLoadingStatus = (state: RootState) =>
  state.products.loadingStatus;

export const selectFetchError = (state: RootState) => state.products.error;
