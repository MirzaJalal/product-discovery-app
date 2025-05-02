import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
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
  }, []);

  return {data, error, loading};

}

export default useData