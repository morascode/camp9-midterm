import { Request, Response, NextFunction } from 'express';
import { SignupUser } from '../validate/uservalidation';
import { LoginUser } from '../validate/loginvalidation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const loginController = (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  //user authentication
  console.log(req.body);
  res.send({ token: 'jwt' });
};
