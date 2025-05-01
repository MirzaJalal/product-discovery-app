import { Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();
  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
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
    </>
  );
};

export default GameGrid;
