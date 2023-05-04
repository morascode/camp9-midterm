import { Router } from 'express';
import { signupController } from '../controllers/user.controllers';
import { z } from 'zod';
import { validate } from '../middleware/validateResource';
import { userValidation } from '../validate/uservalidation';
import { loginValidation } from '../validate/loginvalidation';
import { loginController } from '../controllers/login.controller';

const router = Router();

//@route POST /api/1.0/user/signup
//@desc Register user
//@access Public

router.post('/signup', validate(userValidation), signupController);

//@route POST /api/1.0/user/login
//@desc Login user
//@access Public

router.post('/login', validate(loginValidation), loginController);

export default router;
