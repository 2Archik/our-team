import { useEffect, useState } from "react";

export const useAxios = (axiosFunction, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        const result = await axiosFunction(params);
        setData(result.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [axiosFunction, stringParams]);

  return { data, error };
};
