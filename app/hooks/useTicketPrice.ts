import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import getTicketPrice from "../services/ticket";

export const useTicketPrice = () => {
  return useMutation({
    mutationKey: ["fare"],
    mutationFn: getTicketPrice,
    onError: (error) => {
      toast.error(`Error fetching fare: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Fare fetched successfully");
    },
  });
};
