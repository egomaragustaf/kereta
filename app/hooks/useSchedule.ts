import { useMutation } from "@tanstack/react-query";
import getSchedule from "../services/schedule";
import { toast } from "sonner";

export const useGetSchedule = () => {
  return useMutation({
    mutationKey: ["schedule"],
    mutationFn: getSchedule,
    onError: (error) => {
      toast.error(`Error fetching schedule: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Schedule fetched successfully");
    },
  });
};
