import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["parent_platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 100,
    initialData: { count: platforms.length, results: platforms }
  });
};

export default usePlatforms;