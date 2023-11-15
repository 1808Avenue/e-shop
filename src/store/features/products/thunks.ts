import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TProduct } from './slice';
import routes from '../../../routes';

type TGetTotalCountProductsResponse = {
  count: number;
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

export const fetchTotalQtyProducts = createAsyncThunk(
  'products/fetchTotalQtyProducts',
  async () => {
    const response = await axios.get<TGetTotalCountProductsResponse>(
      routes.api.productsTotalCount()
    );

    return response.data;
  }
);

export const fetchFilterProducts = createAsyncThunk(
  'products/fetchFilterProducts',
  async ({
    key,
    inputValue,
    pageSize,
  }: {
    key: string;
    inputValue: string;
    pageSize: number;
  }) => {
    const response = await axios.get<TProduct[]>(
      routes.api.productsFilterPath(key, inputValue, pageSize)
    );
    return response.data;
  }
);
