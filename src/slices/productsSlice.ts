import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import LoadingStatus from '../utils/LoadingStatus';

export type TProduct = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type TGetTotalCountProductsResponse = {
  count: number;
};

type TProductsState = {
  products: TProduct[];
  totalProducts: number;
  pageSize: number;
  currentPage: number;
  loadingStatus: string;
  error: null | SerializedError;
};

const initialState: TProductsState = {
  products: [],
  totalProducts: 0,
  pageSize: 10,
  currentPage: 1,
  loadingStatus: LoadingStatus.Idle,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({
    currentPage,
    productsPerPage,
  }: {
    currentPage: number;
    productsPerPage: number;
  }) => {
    const response = await axios.get<TProduct[]>(
      routes.api.productsPath(currentPage, productsPerPage)
    );

    return response.data;
  }
);

export const fetchTotalCountProducts = createAsyncThunk(
  'products/fetchTotalCountProducts',
  async () => {
    const response = await axios.get<TGetTotalCountProductsResponse>(
      routes.api.productsTotalCount()
    );

    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changePageSize(state, { payload }) {
      state.pageSize = payload;
    },
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (
          state,
          {
            payload,
          }: {
            payload: TProduct[];
          }
        ) => {
          state.products = [...payload];
          state.loadingStatus = LoadingStatus.Idle;
          state.error = null;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loadingStatus = LoadingStatus.Failing;
        state.error = action.error;
      })
      .addCase(fetchTotalCountProducts.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
        state.error = null;
      })
      .addCase(fetchTotalCountProducts.fulfilled, (state, { payload }) => {
        state.totalProducts = payload.count;
      })
      .addCase(fetchTotalCountProducts.rejected, (state, action) => {
        state.loadingStatus = LoadingStatus.Failing;
        state.error = action.error;
      });
  },
});

export const selectProducts = (state: { products: { products: TProduct[] } }) =>
  state.products.products;

export const selectTotalProducts = (state: {
  products: { totalProducts: number };
}) => state.products.totalProducts;

export const selectPageSize = (state: { products: { pageSize: number } }) =>
  state.products.pageSize;

export const selectCurrentPage = (state: {
  products: { currentPage: number };
}) => state.products.currentPage;

export const selectLoadingStatus = (state: {
  products: { loadingStatus: string };
}) => state.products.loadingStatus;

export const selectFetchError = (state: { products: { error: null } }) =>
  state.products.error;

export const { changePageSize, changeCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
