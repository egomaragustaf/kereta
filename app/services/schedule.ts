import { baseUrl } from "@/lib/base-url";
import { ScheduleParams, scheduleResponseSchema } from "../schemas/schedule";

export default async function getSchedule({
  stationid,
  timefrom,
  timeto,
}: ScheduleParams) {
  try {
    const response = await fetch(
      `${baseUrl}/schedule?stationid=${stationid}&timefrom=${timefrom}&timeto=${timeto}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const result = await response.json();

    const validatedData = scheduleResponseSchema.safeParse(result);

    if (!validatedData.success) {
      console.error("Validation error:", validatedData.error);
    }

    return validatedData.data;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    throw new Error("Failed to fetch schedule");
  }
}
