import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LoginRequest, RegisterRequest} from '../../utils';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://4d72-103-156-86-77.ngrok-free.app',
    timeout: 6000,
  }),
  tagTypes: ['AUTH'],
  endpoints: builder => ({
    register: builder.mutation<any, RegisterRequest>({
      query: payload => ({
        url: '/users/register',
        method: 'POST',
        body: payload,
      }),
    }),
    login: builder.mutation<any, LoginRequest>({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {useRegisterMutation, useLoginMutation} = userApi;
