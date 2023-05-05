import { Request, Response, NextFunction } from 'express';
import { SignupUser } from '../validate/uservalidation';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const bookingController = async (
  req: Request<{}, {}, SignupUser>,
  res: Response,
  next: NextFunction
) => {
  const booking = await prisma.booking.create({
    data: {
      // movieTitle: req.body.movieTitle,
      // data: req.body.data,
      // time: req.body.time,
      // seats: req.body.seats,
      // price: req.body.price,
      // user: req.body.user,
    },
  });
};
