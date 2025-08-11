import { baseUrl } from "@/lib/base-url";
import { stationsResponseSchema } from "../schemas/stations";

export default async function getStations() {
  try {
    const response = await fetch(`${baseUrl}/krl-station`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    const validatedData = stationsResponseSchema.safeParse(result);

    if (!validatedData.success) {
      console.error("Validation error:", validatedData.error);
      return [];
    }

    return validatedData.data.data;
  } catch (error) {
    console.error("Error fetching stations:", error);
    throw new Error("Failed to fetch stations");
  }
}
