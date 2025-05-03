import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "../searchInput";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize="50px" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text>Navbar</Text>
        <ColorModeButton />
      </div>

      <SearchInput />
    </HStack>
  );
};

export default Navbar;
