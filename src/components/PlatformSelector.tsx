import { Button, Menu, Portal } from "@chakra-ui/react";
import usePlatforms, { Platform } from "./hooks/usePlatforms";

interface PlatformSelectorProps {
  chosenPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  chosenPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatform?.name ? selectedPlatform.name : "Select Platform"}{" "}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => chosenPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
