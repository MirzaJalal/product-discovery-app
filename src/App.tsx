import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Game } from "./components/services/rawg-service";
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
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>

      <GameGrid />
    </>
  );
}

export default App;
