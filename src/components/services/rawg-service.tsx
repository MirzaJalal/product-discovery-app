import create from "./http-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
}

const rawgService = create("/posts");

export default rawgService;
