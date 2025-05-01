import { Game } from "./hooks/useGames";
import { Card, Image, Text, Button, Heading } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root padding={2} overflow="hidden" margin={3}>
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2">
        <Card.Title>
          <Heading>{game.name}</Heading>
        </Card.Title>
        <Card.Description>
          <b> Release Date: </b> {game.released} <br />
          <b> Rating: </b>
          {game.rating} / 5
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
