import { baseUrl } from "@/lib/base-url";
import { mapResponseSchema } from "../schemas/map";

export default async function getRouteMap() {
  try {
    const response = await fetch(`${baseUrl}/routemap`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    const result = await response.json();

    const validatedData = mapResponseSchema.safeParse(result);

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
