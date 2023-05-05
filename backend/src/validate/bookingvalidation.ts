import { z } from 'zod';
export const bookingValidation = z.object({
  movieTitle: z.string().min(1).max(30),
  time: z.number().min(1).max(10),
  seats: z.number().min(1).max(50),
  price: z.number().min(1).max(50),
  user: z.string().min(1).max(50),
});

export type Booking = z.infer<typeof bookingValidation>;
