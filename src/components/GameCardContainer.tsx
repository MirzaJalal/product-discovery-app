import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width={300} padding={2} overflow="hidden" margin={3}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
