import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { Booking } from '../validate/bookingvalidation';

const prisma = new PrismaClient();

export const bookingController = async (
  req: Request<{}, {}, Booking>,
  res: Response,
  next: NextFunction
) => {
  const booking = await prisma.booking.create({
    data: {
      bookingId: req.body.bookingId,
      userId: req.body.userId,
      movieId: req.body.movieId,
      dateAndTime: req.body.dateAndTime,
      seats: req.body.seats,
      price: req.body.price,
    },
  });
  res.send(booking);
};
