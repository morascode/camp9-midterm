import { z } from 'zod';
export const bookingValidation = z.object({
  bookingId: z.string().min(1).max(10),
  user: z.string().min(6).max(15),
  userId: z.string().min(1).max(50),
  movieId: z.string().min(1).max(50),
  dateAndTime: z.string().min(2).max(10),
  seats: z.string().min(1).max(50),
  price: z.string().min(1).max(50),
});

export type Booking = z.infer<typeof bookingValidation>;
