import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  // @ts-expect-error random ahh bug
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then(res => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres }
  });
}

export default useGenres;