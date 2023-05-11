import { z } from 'zod';
export const bookmarkValidation = z.number().int();
export type Bookmark = z.infer<typeof bookmarkValidation>;
