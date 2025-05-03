import useData from "./useData";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = (selectedPlatform: Platforms| null) =>
  useData<Platforms>("/platforms/lists/parents");


export default usePlatforms