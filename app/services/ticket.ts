import { baseUrl } from "@/lib/base-url";
import { TicketParams, ticketResponseSchema } from "../schemas/ticket";

export default async function getTicketPrice({
  stationfrom,
  stationto,
}: TicketParams) {
  try {
    const response = await fetch(
      `${baseUrl}/fare?stationfrom=${stationfrom}&stationto=${stationto}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const result = await response.json();

    const validatedData = ticketResponseSchema.safeParse(result);

    if (!validatedData.success) {
      console.error("Validation error:", validatedData.error);
    }

    return validatedData.data;
  } catch (error) {
    console.error("Error fetching fare:", error);
    throw new Error("Failed to fetch fare");
  }
}
