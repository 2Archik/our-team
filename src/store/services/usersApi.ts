import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IUsersApiResponse,
  ICardApiResponse,
  IRegisterApiResponse,
  IForm,
} from "../../interfaces";

const BASE_URL = "https://reqres.in/api/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUsersApiResponse, null>({
      query: () => {
        return {
          url: "users",
        };
      },
    }),
    getCard: builder.query<ICardApiResponse, string | undefined>({
      query: (params) => {
        return {
          url: `users/${params}`,
        };
      },
    }),
    setRegister: builder.mutation<IRegisterApiResponse, IForm>({
      query: (body) => {
        return {
          url: "register",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetCardQuery, useSetRegisterMutation } =
  usersApi;
