import { TProduct } from './productsSlice';

export const selectProducts = (state: { products: { products: TProduct[] } }) =>
  state.products.products;

export const selectTotalProducts = (state: {
  products: { totalProducts: number };
}) => state.products.totalProducts;

export const selectLoadingStatus = (state: {
  products: { loadingStatus: string };
}) => state.products.loadingStatus;

export const selectFetchError = (state: { products: { error: null } }) =>
  state.products.error;
