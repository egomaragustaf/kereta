import { baseUrl } from "@/lib/base-url";
import { trainResponseSchema } from "../schemas/train";

export default async function getTrainSchedule(traindId: string) {
  try {
    const response = await fetch(
      `${baseUrl}/schedule-train?trainid=${traindId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const result = await response.json();

    const validatedData = trainResponseSchema.safeParse(result);

    if (!validatedData.success) {
      console.error("Validation error:", validatedData.error);
      throw new Error("Invalid train schedule data");
    }

    return validatedData.data.data;
  } catch (error) {
    console.error("Error fetching train schedule:", error);
    throw new Error("Failed to fetch train schedule");
  }
}
