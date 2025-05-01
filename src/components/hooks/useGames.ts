import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
    parent_platforms: [{
    platform: Platform;
    }];
    metacritic: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        // Ignore the error if it's a cancellation error
        if (error.name === "CanceledError") return; 
        // Handle actual errors
        setError(error.message);
      });

      // Cleanup function to abort the request if the component unmounts    
      return () => controller.abort(); 
  }, []);

  return {games, error, loading, setGames, setError, setLoading};

}

export default useGames;