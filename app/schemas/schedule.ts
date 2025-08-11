import z from "zod/v4";

export const scheduleParamsSchema = z.object({
  stationid: z.string(),
  timefrom: z.string(),
  timeto: z.string(),
});

export const scheduleSchema = z.object({
  train_id: z.string(),
  ka_name: z.string(),
  route_name: z.string(),
  dest: z.string(),
  time_est: z.string(),
  color: z.string(),
  dest_time: z.string(),
});

export const scheduleResponseSchema = z.object({
  status: z.number(),
  data: z.array(
    z.object({
      train_id: z.string(),
      ka_name: z.string(),
      route_name: z.string(),
      dest: z.string(),
      time_est: z.string(),
      color: z.string(),
      dest_time: z.string(),
    })
  ),
});

export type ScheduleParams = z.infer<typeof scheduleParamsSchema>;
export type Schedule = z.infer<typeof scheduleSchema>;
export type ScheduleResponse = z.infer<typeof scheduleResponseSchema>;
