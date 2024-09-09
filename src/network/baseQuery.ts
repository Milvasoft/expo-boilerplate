import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import {
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { RootState } from "@store/index";
import { LoggedOut, setAuthToken } from "@modules/app/redux/appSlice";
import type { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

/**
 * Configuration object for the base query used in network requests.
 */
const FetchBaseQueryArgs: FetchBaseQueryArgs = {
  baseUrl: "/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).AppReducer.authToken;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  responseHandler: (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  },
};

/**
 * A function that represents the base query for network requests.
 *
 * @param args - The arguments for the base query.
 * @returns The result of the base query.
 */
export const baseQuery = fetchBaseQuery(FetchBaseQueryArgs);

/**
 * A custom base query function that automatically handles reauthentication.
 *
 * @param args - The query arguments.
 * @param api - The API object provided by RTK Query.
 * @param extraOptions - Extra options for the base query.
 * @returns The result of the base query.
 */
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
    if (refreshResult.data) {
      // store the new token
      api.dispatch(setAuthToken(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(LoggedOut());
    }
  }
  return result;
};
