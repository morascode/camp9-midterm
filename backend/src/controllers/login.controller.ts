import { Request, Response, NextFunction } from 'express';
import { SignupUser } from '../validate/uservalidation';
import { LoginUser } from '../validate/loginvalidation';

export const loginController = (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  //authenticating user
  console.log(req.body);
  res.send('login');
};
