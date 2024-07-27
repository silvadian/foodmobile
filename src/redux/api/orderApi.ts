import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  CreateOrderRequest,
  getOrderResponse,
  UpdateOrderRequest,
} from '../../utils';
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
    getOrder: builder.query<
      getOrderResponse,
      {status: 'Completed' | 'Canceled' | 'Pending'}
    >({
      query: ({status}) => {
        return {
          url: `/order`,
          params: {status},
        };
      },
      providesTags: [{type: 'ORDER', id: 'LIST'}],
    }),
    updateOrder: builder.mutation<any, UpdateOrderRequest>({
      query: ({id, status}) => ({
        url: `/order/${id}`,
        method: 'PUT',
        body: {status},
      }),
      invalidatesTags: ['ORDER'],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
} = ordersApi;
