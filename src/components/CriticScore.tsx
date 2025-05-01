import { Badge } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";

interface CriticScoreProps {
  metacriticScore: number;
}

const CriticScore = ({ metacriticScore }: CriticScoreProps) => {
  let color = metacriticScore > 85 ? "green" : "red";

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Badge fontSize="14px" padding={2} borderRadius={4} color={color}>
          {metacriticScore}
        </Badge>
      </div>
    </>
  );
};

export default CriticScore;
