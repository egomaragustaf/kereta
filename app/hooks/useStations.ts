import { useQuery } from "@tanstack/react-query";
import getStations from "../services/stations";

export const useGetStations = () => {
  return useQuery({
    queryKey: ["stations"],
    queryFn: getStations,
    staleTime: 1000 * 60 * 10,
  });
};
