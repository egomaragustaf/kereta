import z from "zod/v4";

export const trainSchema = z.object({
  train_id: z.string(),
  ka_name: z.string(),
  station_id: z.string(),
  station_name: z.string(),
  time_est: z.string(),
  transit_station: z.boolean(),
  color: z.string(),
  transit: z.union([z.string(), z.array(z.string())]),
});

export const trainResponseSchema = z.object({
  status: z.number(),
  data: z.array(trainSchema),
});

export type Train = z.infer<typeof trainSchema>;
export type TrainResponse = z.infer<typeof trainResponseSchema>;
