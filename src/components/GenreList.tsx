import { Game } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import useData from "./hooks/useData";
import { ListItem, Image, HStack, List, Text } from "@chakra-ui/react";

interface GenreListProps {
  game: Game;
}

const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" listStyleType="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
