import { z } from 'zod';
export const bookingValidation = z.object({
  id: z.string().min(1).max(10),
  screeningId: z.number().min(1).max(50),
  seats: z.string().min(1).max(50),
  userId: z.string().min(1).max(50),
  totalPrice: z.number().min(1).max(7),
});

export type Booking = z.infer<typeof bookingValidation>;
