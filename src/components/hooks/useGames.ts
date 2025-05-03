import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platforms } from "./usePlatforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
    parent_platforms: [{
    platform: Platform;
    }];
    metacritic: number;
}


const useGames = (gamQuery : GameQuery) => 
  useData<Game>("/games", 
  {
    params: 
    {
      genres: gamQuery.genre?.id, 
      platforms: gamQuery.platform?.id,
      ordering: gamQuery.sortOrder
    }
  }, 
  [
    gamQuery
  ]
);


export default useGames