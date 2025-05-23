import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface gameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: gameHeadingProps) => {
  if (!gameQuery.genre && !gameQuery.platform && !gameQuery.typedSearchText) {
    return null;
  }

  return (
    <>
      <div>
        <Heading marginLeft={5}>
          Results For: {gameQuery.genre?.name} {gameQuery.platform?.name}{" "}
          {gameQuery.typedSearchText} Games
        </Heading>
      </div>
    </>
  );
};

export default GameHeading;
