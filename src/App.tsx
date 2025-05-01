import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Navbar />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        {/* <Show above="lg"> */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
        {/* </Show> */}
        <GridItem area="main" bg="dodgerblue"></GridItem>
        <GameGrid />
      </Grid>
    </>
  );
}

export default App;
