import useGenres, { Genre } from "./hooks/useGenres";
import {
  Image,
  HStack,
  List,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface GenreListProps {
  chosenGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ chosenGenre, selectedGenre }: GenreListProps) => {
  const { data, loading } = useGenres();

  if (loading) return <Spinner />;
  return (
    <List.Root>
      <Heading fontSize={25} marginBottom={3}>
        Genre
      </Heading>
      {data.map((genre: any) => (
        <List.Item key={genre.id} paddingY="5px" listStyleType="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Button
              fontStyle={selectedGenre?.id == genre.id ? "italic" : "normal"}
              fontVariant={
                selectedGenre?.id == genre.id ? "small-caps" : "normal"
              }
              fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
              variant="ghost"
              onClick={() => chosenGenre(genre)}
            >
              <Text fontSize="lg">{genre.name}</Text>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
