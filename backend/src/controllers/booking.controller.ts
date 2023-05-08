import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { Booking } from '../validate/bookingvalidation';

const prisma = new PrismaClient();

export const bookingController = async (
  req: Request<{}, {}, Booking>,
  res: Response,
  next: NextFunction
) => {
  /// hola
  prisma.screening.findUnique({}).then(data => {});

  const booking = await prisma.booking.create({
    data: {
      screening: req.body.screening,
      seats: req.body.seats,
      userId: req.body.userId,
      totalPrice: req.body.totalPrice,
    },
  });
  res.send(booking);
};
