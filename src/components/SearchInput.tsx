import { Input, InputGroup } from "@chakra-ui/react";

const searchInput = () => {
  return (
    <InputGroup>
      <Input
        borderRadius={20}
        placeholder="serach games.."
        variant={"outline"}
        padding={5}
        marginTop={1}
        width="95%"
      />
    </InputGroup>
  );
};

export default searchInput;
