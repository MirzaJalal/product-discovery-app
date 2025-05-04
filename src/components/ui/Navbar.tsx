import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "../SearchInput";

interface NavbarProps {
  onSearch: (text: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize="50px" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text>Navbar</Text>
        <ColorModeButton />
      </div>

      <SearchInput searchText={onSearch} />
    </HStack>
  );
};

export default Navbar;
