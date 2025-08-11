import z from "zod/v4";

export const ticketParamsSchema = z.object({
  stationfrom: z.string(),
  stationto: z.string(),
});

export const ticketSchema = z.object({
  sta_code_from: z.string(),
  sta_name_from: z.string(),
  sta_code_to: z.string(),
  sta_name_to: z.string(),
  fare: z.number(),
  distance: z.string(),
});

export const ticketResponseSchema = z.object({
  status: z.number(),
  data: z.array(ticketSchema),
});

export type TicketParams = z.infer<typeof ticketParamsSchema>;
export type Ticket = z.infer<typeof ticketSchema>;
export type TicketResponse = z.infer<typeof ticketResponseSchema>;
