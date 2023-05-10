import { Router } from 'express';
import {
  checkAuthController,
  loginController,
  signupController,
} from '../controllers/user.controllers';
import { validate } from '../middleware/validateResource';
import { userValidation } from '../validate/userValidation';
import { loginValidation } from '../validate/loginValidation';
import { bookmarkValidation } from '../validate/bookmarkValidation';
import { isAuth } from '../middleware/isAuth';
import { getBookmarksController } from '../controllers/bookmark.controllers';

const router = Router();

//@route POST /api/1.0/user/signup
//@desc Register user
//@access Public

router.post('/signup', validate(userValidation), signupController);

//@route POST /api/1.0/user/login
//@desc Login user
//@access Public

router.post('/login', validate(loginValidation), loginController);

//@route GET /api/1.0/user/checkauth
//@desc check if user is authenticated
//@access Public

router.get('/checkauth', checkAuthController);

//@route GET /api/1.0/user/bookmarks
//@desc fetches all the bookmarks for the currently logged in userß
//@access Public

router.get('/bookmarks', isAuth, getBookmarksController);

export default router;
