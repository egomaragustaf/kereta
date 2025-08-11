import { useQuery } from "@tanstack/react-query";
import getRouteMap from "../services/map";

export const useGetRouteMap = () => {
  return useQuery({
    queryKey: ["map"],
    queryFn: getRouteMap,
    staleTime: 1000 * 60 * 10,
  });
};
