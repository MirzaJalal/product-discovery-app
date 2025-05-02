import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        // Ignore the error if it's a cancellation error
        if (error.name === "CanceledError") return; 
        // Handle actual errors
        setError(error.message);
        setLoading(false);
      });

      // Cleanup function to abort the request if the component unmounts    
      return () => controller.abort(); 
  }, dependencies ? [...dependencies] : []);

  return {data, error, loading};

}

export default useData