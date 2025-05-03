import { Button, Menu, Portal } from "@chakra-ui/react";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  chosenOrder: string;
}

const SortSelector = ({
  onSelectSortOrder,
  chosenOrder,
}: SortSelectorProps) => {
  const sortingOptions = [
    { value: "", label: "None" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {chosenOrder
            ? "Order By: " +
              sortingOptions.find((option) => option.value === chosenOrder)
                ?.label
            : "Order By"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortingOptions.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
