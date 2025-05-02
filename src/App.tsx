import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  console.log("selectedGenre: ", selectedGenre);

  return (
    <>
      <Navbar />
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
            <GenreList chosenGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        )}
        <GridItem area="main" padding="2" borderRadius="md">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
