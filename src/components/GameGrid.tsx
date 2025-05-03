import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, loading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap="3">
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data &&
          data.map((game: any) => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
