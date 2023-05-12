import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

export const getMovieDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieId = req.params.movieId;
  const movie = await prisma.movie.findUnique({
    where: { id: Number(movieId) },
  });
  res.send(movie);
};

export const getMovieBySearchQueryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const searchQuery = req.query.searchQuery;
  const movies = await prisma.movie.findMany({
    where: {
      title: {
        contains: String(searchQuery),
        mode: 'insensitive',
      },
    },
  });
  res.send(movies);
};

type Movie = {
  id: number;
  tmdbId: number;
  title: string;
  releaseDate: Date;
  backdropPath: string;
  posterPath: string;
  runtime: number;
  voteAverage: number;
  overview: string;
};

export const getNowPlayingMoviesController = async (
  req: Request<{}, {}, Movie>,
  res: Response,
  next: NextFunction
) => {
  const genreIds = req.query.genres as string;
  const genreArray = genreIds.split('-').map(id => Number(id));
  console.log(genreArray);
  if (genreArray[0] === 0 && genreArray.length === 1) {
    const movies = await prisma.movie.findMany({
      take: 20,
      include: {
        genres: true,
      },
    });
    res.send(movies);
  } else {
    const movies = await prisma.movie.findMany({
      take: 20,
      include: {
        genres: true,
      },
      where: {
        genres: {
          some: {
            id: {
              in: genreArray,
            },
          },
        },
      },
    });
    res.send(movies);
  }
};
