export const selectPageSize = (state: { pagination: { pageSize: number } }) =>
  state.pagination.pageSize;

export const selectCurrentPage = (state: {
  pagination: { currentPage: number };
}) => state.pagination.currentPage;
