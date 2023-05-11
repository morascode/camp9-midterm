import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { Bookmark } from '../validate/bookmarkValidation';

const prisma = new PrismaClient();

export const getBookmarksController = async (
  req: Request,
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

export const createBookmarkController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.movie.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        bookmarkedBy: {
          connect: {
            id: res.locals.userId,
          },
        },
      },
    });
    res
      .status(201)
      .send(`Movie with the id ${req.params.id} added to bookmarks.`);
  } catch (err) {
    res
      .status(400)
      .send(
        `Cannot create the bookmark. Movie with the id ${req.params.id} not found.`
      );
  }
};

export const deleteBookmarkController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.movie.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        bookmarkedBy: {
          disconnect: {
            id: res.locals.userId,
          },
        },
      },
    });
    res
      .status(200)
      .send(`Movie with the id ${req.params.id} removed from bookmarks.`);
  } catch (err) {
    res
      .status(400)
      .send(
        `Cannot delete the bookmark. Movie with the id ${req.params.id} not found.`
      );
  }
};
