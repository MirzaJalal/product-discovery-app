import { useEffect, useState } from "react";
import { Game } from "./services/rawg-service";
import apiClient from "./services/api-client";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <ul>
      {games &&
        games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} />
            <p>Rating: {game.rating}</p>
            <p>Released: {game.released}</p>
          </li>
        ))}
    </ul>
  );
};

export default GameGrid;
