import { useEffect, useState } from "react";

interface AxiosFunction<P, T> {
  (params?: P): Promise<T>;
}

interface UseAxiosResult<T> {
  data: T | null | undefined;
  error: Error | null;
}

export const useAxios = <T, P>(
  axiosFunction: AxiosFunction<P, T>,
  params?: P
): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        const result = await axiosFunction(params);
        setData(result);
      } catch (error) {
        setError(error as Error);
      }
    })();
  }, [axiosFunction, stringParams]);

  return { data, error };
};
