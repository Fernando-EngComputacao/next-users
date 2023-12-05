import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { HTTPResponse, RequestError } from "@/client/requests";

export const useCustomQuery = <
  TQueryFnData = unknown,
  TError = RequestError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  customOptions: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "initialData"> & {
    initialData?: () => undefined;
    custom: {
      queryKey: () => TQueryKey;
      queryFn: () => Promise<HTTPResponse<TQueryFnData>>;
    };
  },
) => {
  const { custom } = customOptions;
  const { queryKey, queryFn } = custom;

  return useQuery<TQueryFnData, TError, TData, TQueryKey>({
    queryKey: queryKey(),
    queryFn: () => queryFn().then((response) => response.data as TQueryFnData),
  });
};
