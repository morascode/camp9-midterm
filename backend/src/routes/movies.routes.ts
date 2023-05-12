import { Router } from 'express';
import {
  getAllmovies,
  getMovieBySearchQueryController,
  getMovieDetailsController,
  getNowPlayingMoviesController,
} from '../controllers/movies.controllers';

const router = Router();

//@route GET /api/1.0/movies/:movieId
//@desc Get movie details
//@access Public

//router.get('/:movieId', getMovieDetailsController);

//  write a route and controller to get movie by search Query (search input)

//@route GET /api/1.0/movies/?searchQuery
//@desc Get movie by search query
//@access Public

router.get('/search', getMovieBySearchQueryController);

//@route GET /api/1.0/movies/now-playing
//@desc Get movie in general
//@access Public

router.get('/', getNowPlayingMoviesController);

//@route GET /api/1.0/movies/allmovies
//@desc Get all movies
//@access Public

router.get('/allmovies', getAllmovies);

export default router;
