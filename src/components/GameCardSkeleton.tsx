import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card.Root width={300} padding={2} overflow="hidden" margin={3}>
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
