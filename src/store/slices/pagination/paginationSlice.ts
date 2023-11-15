import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageSize: 10,
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePageSize(state, { payload }) {
      state.pageSize = payload;
    },
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

export const { changePageSize, changeCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
