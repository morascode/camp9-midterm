import { Request, Response, NextFunction } from 'express';
import { SignupUser } from '../validate/uservalidation';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const signupController = async (
  req: Request<{}, {}, SignupUser>,
  res: Response,
  next: NextFunction
) => {
  const checkEmail = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (checkEmail) {
    return res.status(422).send('Email already exists');
  }

  const newUser = await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    include: {
      bookings: true,
    },
  });
  console.log(req.body);
  res.send(newUser.email);
};
