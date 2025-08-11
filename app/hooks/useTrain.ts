import { useQuery } from "@tanstack/react-query";
import getTrainSchedule from "../services/train";

export const useGetTrainSchedule = (trainId: string) => {
  return useQuery({
    queryKey: ["trainSchedule", trainId],
    queryFn: () => getTrainSchedule(trainId),
    staleTime: 1000 * 60 * 10,
  });
};
