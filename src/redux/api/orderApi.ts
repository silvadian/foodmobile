import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CreateOrderRequest} from '../../utils';
import {config} from './config';
import {prepareHeaders} from './prepareHeaders';

export const ordersApi = createApi({
  reducerPath: 'OrdersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.url,
    timeout: 6000,
    prepareHeaders,
  }),
  tagTypes: ['ORDER'],
  endpoints: builder => ({
    createOrder: builder.mutation<any, CreateOrderRequest>({
      query: payload => ({
        url: '/order',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['ORDER'],
    }),
    getOrder : builder.query<any, any>({
      query: params => `/order${params ? params: ""}`,
      providesTags: [{type: 'ORDER', id: 'LIST'}],
    })
  }),
});

export const {useCreateOrderMutation, useGetOrderQuery} = ordersApi;
