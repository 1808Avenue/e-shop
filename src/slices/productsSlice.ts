import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

export type TProduct = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type TGetProductsResponse = {
  data: TProduct[];
};

type TProductsState = {
  products: TProduct[];
  loadingStatus: string;
  error: null;
};

type TLoadingProcess = {
  IDLE: string;
  LOADING: string;
  FAILING: string;
};

export const loadingProcess: TLoadingProcess = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  FAILING: 'FAILING',
};

const initialState: TProductsState = {
  products: [],
  loadingStatus: loadingProcess.IDLE,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get<TGetProductsResponse>(
      routes.api.productsPath()
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // addProducts(state, action: PayloadAction<TProduct[]>) {
    //   const products = action.payload;
    //   state.products = [...products];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loadingStatus = loadingProcess.LOADING;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.loadingStatus = loadingProcess.IDLE;
        state.products = [...payload];
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loadingStatus = loadingProcess.FAILING;
        state.error = action.error;
      });
  },
});

export const selectProducts = (state: { products: { products: TProduct[] } }) =>
  state.products.products;
export const selectLoadingStatus = (state: {
  products: { loadingStatus: string };
}) => state.products.loadingStatus;
export const selectFetchError = (state: { products: { error: null } }) =>
  state.products.error;

// export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
