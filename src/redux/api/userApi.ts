import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
  SignUpAddressRequest,
  getUserResponse,
} from '../../utils';
import {config} from './config';
import {prepareHeaders} from './prepareHeaders';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.url,
    timeout: 6000,
    prepareHeaders,
  }),
  tagTypes: ['AUTH'],
  endpoints: builder => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: payload => ({
        url: '/users/register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['AUTH'],
    }),
    login: builder.mutation<any, LoginRequest>({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['AUTH'],
    }),
    SignUpAddress: builder.mutation<any, SignUpAddressRequest>({
      query: payload => ({
        url: '/users/address',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['AUTH'],
    }),
    getUser: builder.query<getUserResponse, undefined>({
      query: () => '/users',
      providesTags: [{type: 'AUTH', id: 'LIST'}],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSignUpAddressMutation,
  useLazyGetUserQuery,
} = userApi;
