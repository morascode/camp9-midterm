import { z } from 'zod';
export const bookmarkValidation = z.object({
  movieId: z.number().int(),
});
export type Bookmark = z.infer<typeof bookmarkValidation>;
