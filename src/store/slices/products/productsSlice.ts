import { createSlice, SerializedError } from '@reduxjs/toolkit';
import LoadingStatus from '../../../utils/LoadingStatus';
import {
  fetchFilterProducts,
  fetchProducts,
  fetchTotalQtyProducts,
} from './thunks';

export type TProduct = {
  id: number;
  title: string;
  price: string;
  favorite: boolean;
  category: string;
  description: string;
  image: string;
};

type TProductsState = {
  products: TProduct[];
  totalProducts: number;
  loadingStatus: string;
  error: null | SerializedError;
};

const initialState: TProductsState = {
  products: [],
  totalProducts: 0,
  loadingStatus: LoadingStatus.Idle,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
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
      .addCase(fetchTotalQtyProducts.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
        state.error = null;
      })
      .addCase(fetchTotalQtyProducts.fulfilled, (state, { payload }) => {
        state.totalProducts = payload.count;
      })
      .addCase(fetchTotalQtyProducts.rejected, (state, action) => {
        state.loadingStatus = LoadingStatus.Failing;
        state.error = action.error;
      })
      .addCase(fetchFilterProducts.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
        state.error = null;
      })
      .addCase(
        fetchFilterProducts.fulfilled,
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
      .addCase(fetchFilterProducts.rejected, (state, action) => {
        state.loadingStatus = LoadingStatus.Failing;
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
