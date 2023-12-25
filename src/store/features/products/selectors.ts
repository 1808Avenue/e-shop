import { RootState } from '../..';

// query params
export const selectProductsQueryParams = (state: RootState) =>
  state.products.params;

//   sidebar
export const selectProductsSidebarStatus = (state: RootState) =>
  state.products.sidebar.isOpen;
