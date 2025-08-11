import z from "zod/v4";

export const stationsSchema = z.object({
  sta_id: z.string(),
  sta_name: z.string(),
  group_wil: z.number(),
  fg_enable: z.number(),
});

export const stationsResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
  data: z.array(stationsSchema),
});

export type Stations = z.infer<typeof stationsSchema>;
export type StationsResponse = z.infer<typeof stationsResponseSchema>;
