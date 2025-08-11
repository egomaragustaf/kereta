import z from "zod/v4";

export const mapSchema = z.object({
  area: z.number(),
  permalink: z.string(),
});

export const mapResponseSchema = z.object({
  status: z.number(),
  data: z.array(
    z.object({
      area: z.number(),
      permalink: z.string(),
    })
  ),
});

export type Map = z.infer<typeof mapSchema>;
export type MapResponse = z.infer<typeof mapResponseSchema>;
