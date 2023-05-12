import { Router } from 'express';
import {
  getMovieBySearchQueryController,
  getMovieDetailsController,
  getNowPlayingMoviesController,
} from '../controllers/movies.controllers';
import { validate } from '../middleware/validateResource';

const router = Router();

//@route GET /api/1.0/movies/?searchQuery
//@desc Get movie by search query
//@access Public

router.get('/search', getMovieBySearchQueryController);

//@route GET /api/1.0/movies/:movieId
//@desc Get movie details
//@access Public

router.get('/:movieId', getMovieDetailsController);

//@route GET /api/1.0/movies/now-playing
//@desc Get movie in general
//@access Public

router.get('/', getNowPlayingMoviesController);

export default router;
