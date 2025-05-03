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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platforms | null) => 
  useData<Game>("/games", 
  {
    params: 
    {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id
    }
  }, 
  [
    selectedGenre?.id,
    selectedPlatform?.id
  ]
);


export default useGames