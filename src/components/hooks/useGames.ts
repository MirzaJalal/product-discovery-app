import useData from "./useData";

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


const useGames = () => {
  useData<Game>("/game");
}

export default useGames