import { Game } from "./hooks/useGames";
import { Card, Image, Text, Button, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface GameCardProps {
  game: Game;
}

// GameCard component to display game information
// No logic is present in this component, it is purely presentational
const GameCard = ({ game }: GameCardProps) => {
  const imageSource = game.background_image ? game.background_image : noImage;
  return (
    <Card.Root>
      <Image src={imageSource} alt={game.name} />
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
        <HStack justifyContent={"space-between"} mt="2">
          <Text fontSize="sm" color="gray.500" mt="1">
            <PlatformIconList
              platform={
                game.parent_platforms != undefined
                  ? game.parent_platforms.map(({ platform }) => platform)
                  : []
              }
            />
          </Text>
          <CriticScore metacriticScore={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
