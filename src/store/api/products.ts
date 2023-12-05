import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiPath = 'http://localhost:3001/products';

export interface IProduct {
  id: number;
  title: string;
  price: string;
  favorite: boolean;
  category: string;
  description: string;
  image: string;
}

interface IProductsResponse {
  products: IProduct[];
  totalCount: number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiPath }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<IProductsResponse, string>({
      query: (params) => ({
        url: apiPath,
        params: { ...params },
      }),
      transformResponse: (response: IProduct[], meta) => {
        return {
          products: response,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
        };
      },
      providesTags: ['Product'],
    }),
    getFavoriteProducts: build.query<IProductsResponse, string>({
      query: (params) => ({
        url: apiPath,
        params: { ...params },
      }),
      transformResponse: (response: IProduct[], meta) => {
        return {
          products: response,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
        };
      },
    }),
    updateProduct: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted(
        { id, ...patch },
        { dispatch, queryFulfilled, getState }
      ) {
        const params = getState().products.params;

        const patchResult = dispatch(
          api.util.updateQueryData('getProducts', params, (draft) => {
            const { products } = draft;
            const index = products.findIndex((product) => product.id === id);

            products[index].favorite = patch.favorite;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
        queryFulfilled.catch(patchResult.undo);
      },
    }),
    removeFavoriteProduct: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled, getState }) {
        const params = getState().favProducts.params;

        const patchResult = dispatch(
          api.util.updateQueryData('getFavoriteProducts', params, (draft) => {
            const { products } = draft;
            const index = products.findIndex((product) => product.id === id);

            products.splice(index, 1);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
        queryFulfilled.catch(patchResult.undo);
      },
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFavoriteProductsQuery,
  useLazyGetFavoriteProductsQuery,
  useUpdateProductMutation,
  useRemoveFavoriteProductMutation,
} = api;
