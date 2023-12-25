import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  params: {
    _page: '1',
    _limit: '10',
    q: '',
    category_like: '',
    _sort: '',
    _order: '',
  },
  sidebar: {
    isOpen: false,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    //params
    changeProductsPageParams(state, { payload }) {
      state.params._page = payload;
    },
    changeProductsLimitParams(state, { payload }) {
      state.params._limit = payload;
    },
    changeProductsSearchParams(state, { payload }) {
      state.params.q = payload;
    },
    changeProductsFilterParams(state, { payload }) {
      const { value } = payload;
      state.params.category_like = value;
    },
    changeProductsSortParams(state, { payload }) {
      const { key, order } = payload;
      state.params._sort = key;
      state.params._order = order;
    },
    // sidebar
    toggleProductsSidebar(state) {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },
  },
});

export const {
  changeProductsPageParams,
  changeProductsLimitParams,
  changeProductsSearchParams,
  changeProductsFilterParams,
  changeProductsSortParams,
  toggleProductsSidebar,
} = productsSlice.actions;
export default productsSlice.reducer;
