import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiPath = 'http://localhost:3001/products';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  favorite: boolean;
  category: string;
  description: string;
  image: string;
  count: number;
  totalCount: number;
  selected: boolean;
}

interface IProductsResponse {
  products: IProduct[];
  totalCount: number;
}

interface IQueryParams {
  _page: string;
  _limit: string;
  q: string;
  category_like: string;
  _sort: string;
  _order: string;
}

interface IFavQueryParams {
  _page: string;
  _limit: string;
  favorite_like: boolean;
  category_like: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiPath }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<IProductsResponse, IQueryParams>({
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
    getFavoriteProducts: build.query<IProductsResponse, IFavQueryParams>({
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
        const params: IQueryParams = getState().products.params;
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
        const params: IFavQueryParams = getState().favProducts.params;
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
