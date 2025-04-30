import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";

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
    </>
  );
}

export default App;
