export function generateHourlyTimes(): string[] {
  const times: string[] = [];

  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = hour.toString().padStart(2, "0");
    times.push(`${formattedHour}:00`);
  }

  return times;
}
