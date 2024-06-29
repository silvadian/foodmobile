import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getFoodResponse, getFoodsResponse} from '../../utils';
import {config} from './config';
import {prepareHeaders} from './prepareHeaders';

export const foodApi = createApi({
  reducerPath: 'foddApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.url,
    timeout: 6000,
    prepareHeaders,
  }),
  tagTypes: ['FOOD'],
  endpoints: builder => ({
    getFoods: builder.query<getFoodsResponse, string| undefined>({
      query: params => `/foods${params ? params: ""}`,
      providesTags: [{type: 'FOOD', id: 'LIST'}],
    }),
    getFood: builder.query<getFoodResponse, number>({
      query: params => `/foods/${params}`,
      providesTags: [{type: 'FOOD', id: 'LIST'}],
    }),
    createFood: builder.mutation<any, any>({
      query: payload => ({
        url: '/foods',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['FOOD'],
    }),
    deleteFood: builder.mutation<any, {id: number}>({
      query: ({id}) => ({
        url: `/foods/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['FOOD'],
    }),
  }),
});

export const {
  useGetFoodsQuery,
  useGetFoodQuery,
  useCreateFoodMutation,
  useDeleteFoodMutation,
} = foodApi;
