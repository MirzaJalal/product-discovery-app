import { Input, InputGroup } from "@chakra-ui/react";

interface searchInputProps {
  searchText: (text: string) => void;
}

const searchInput = ({ searchText }: searchInputProps) => {
  return (
    <InputGroup>
      <Input
        borderRadius={20}
        placeholder="serach games.."
        onChange={(event) => searchText(event.target.value)}
        variant={"outline"}
        padding={5}
        marginTop={1}
        width="95%"
      />
    </InputGroup>
  );
};

export default searchInput;
