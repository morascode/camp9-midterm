import { Request, Response, NextFunction } from 'express';
import { SignupUser } from '../validate/uservalidation';

export const loginController = (
  req: Request<{}, {}, SignupUser>,
  res: Response,
  next: NextFunction
) => {
  // hashing password
  // Save user to database
  console.log(req.body);
  res.send('signup');
};
