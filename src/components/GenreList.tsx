import { Badge } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import useGenres from "./hooks/useGenres";

interface GenreListProps {
  game: Game;
}

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
