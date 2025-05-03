import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./components/hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  typedSearchText: string | null;
}

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Navbar
        onSearch={(typedSearchText) =>
          setGameQuery({ ...gameQuery, typedSearchText })
        }
      />
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
        gap={4}
        p={4}
      >
        {showAside && (
          <GridItem area="aside" paddingX={5} borderRadius="md">
            <GenreList
              chosenGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        )}
        <GridItem area="main" padding="2" borderRadius="md">
          <HStack padding={5}>
            <PlatformSelector
              chosenPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              chosenOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameHeading gameQuery={gameQuery} />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
