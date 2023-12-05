import { RootState } from '../..';

// query params
export const selectFavProductsQueryParams = (state: RootState) =>
  state.favProducts.params;

//   sidebar
export const selectFavProductsSidebarStatus = (state: RootState) =>
  state.favProducts.sidebar.isOpen;
