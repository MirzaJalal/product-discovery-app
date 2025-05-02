import { Game } from "./hooks/useGames";
import useGenres, { Genre } from "./hooks/useGenres";
import useData from "./hooks/useData";
import { Image, HStack, List, Text, Spinner, Button } from "@chakra-ui/react";
import { link } from "framer-motion/client";

interface GenreListProps {
  chosenGenre: (genre: Genre) => void;
}

const GenreList = ({ chosenGenre }: GenreListProps) => {
  const { data, loading } = useGenres();

  if (loading) return <Spinner />;
  return (
    <List.Root>
      {data.map((genre: any) => (
        <List.Item key={genre.id} paddingY="5px" listStyleType="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Button variant="ghost" onClick={() => chosenGenre(genre)}>
              <Text fontSize="lg">{genre.name}</Text>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
