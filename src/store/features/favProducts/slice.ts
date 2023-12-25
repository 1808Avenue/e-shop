import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  params: {
    _page: '1',
    _limit: '10',
    favorite_like: true,
    category_like: '',
  },
  sidebar: {
    isOpen: false,
  },
};

const favProductsSlice = createSlice({
  name: 'favProducts',
  initialState,
  reducers: {
    //params
    changeFavProductsPageParams(state, { payload }) {
      state.params._page = payload;
    },
    changeFavProductsLimitParams(state, { payload }) {
      state.params._limit = payload;
    },
    changeFavProductsFilterParams(state, { payload }) {
      const { value } = payload;

      state.params.category_like = value;
    },
    // sidebar
    toggleFavProductsSidebar(state) {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },
  },
});

export const {
  changeFavProductsPageParams,
  changeFavProductsLimitParams,
  changeFavProductsFilterParams,
  toggleFavProductsSidebar,
} = favProductsSlice.actions;
export default favProductsSlice.reducer;
