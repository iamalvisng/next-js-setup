import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: ({ email, password }) => {
        const bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);

        return {
          method: 'POST',
          url: 'loginweb',
          body: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data' },
        };
      },
    }),
  }),
});

export const { useLoginQuery, useLazyLoginQuery } = authApi;
