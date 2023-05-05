import { Router } from 'express';
import { signupController } from '../controllers/user.controllers';
import { z } from 'zod';
import { validate } from '../middleware/validateResource';
import { userValidation } from '../validate/uservalidation';
import { loginValidation } from '../validate/loginvalidation';
import { loginController } from '../controllers/login.controller';
import { bookingController } from '../controllers/booking.controller';
import { bookingValidation } from '../validate/bookingvalidation';
const router = Router();

//@route POST /api/1.0/user/signup
//@desc Register user
//@access Public

router.post('/signup', validate(userValidation), signupController);

//@route POST /api/1.0/user/login
//@desc Login user
//@access Public

router.post('/login', validate(loginValidation), loginController);

//@route POST /api/1.0/user/login
//@desc Login user
//@access Public

router.post('/booking', validate(bookingValidation), bookingController);

export default router;
