import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { Bookmark } from '../validate/bookmarkValidation';

const prisma = new PrismaClient();

export const getBookmarksController = async (
  req: Request<{}, {}, Bookmark>,
  res: Response,
  next: NextFunction
) => {
  const user = await prisma.user.findFirst({
    where: {
      id: res.locals.userId,
    },
    include: {
      bookmarks: true,
    },
  });
  res.status(200).send(user?.bookmarks);
};
