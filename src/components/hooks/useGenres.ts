import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
    
        apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((response) => {
            console.log(response.data.results)
            setGenres(response.data.results);
            setLoading(false);
        })
        .catch((error) => {
            // Ignore the error if it's a cancellation error
            if (error instanceof CanceledError) return;
            // Handle actual errors
            setError(error.message);
            setLoading(false);
        });
    
        // Cleanup function to abort the request if the component unmounts
        return () => controller.abort();
    }, []);
    
    return { genres, error, loading, setGenres, setError, setLoading };
}

export default useGenres;