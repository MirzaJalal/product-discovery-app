import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

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
            <GenreList />
          </GridItem>
        )}
        <GridItem area="main" padding="2" borderRadius="md">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
