
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Transaction, UserDetailsType } from '../types/responseTypes';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: String(import.meta.env.VITE_API_URL) }),
    endpoints: (builder) => ({
        getUser: builder.query<UserDetailsType, void>({
            query: () => '/user',
        }),
        getUserWallet: builder.query({
            query: () => '/wallet',
        }),
        getUserTransactions: builder.query<Transaction[], void>({
            query: () => '/transactions',
        }),
     
    }),
});

export const { useGetUserQuery, useGetUserTransactionsQuery, useGetUserWalletQuery } = api;
