/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithoutToken } from './baseQuery';

export const SerialService = createApi({
    reducerPath: 'SerialService',
    baseQuery: baseQueryWithoutToken,
    endpoints: (builder) => ({
      checkSerial: builder.mutation<any, any>({
        query: (body) => ({
          url: '/auth/serial',
          method: 'POST',
          body
        })
      })
    })
});
  
export const { useCheckSerialMutation } = SerialService;