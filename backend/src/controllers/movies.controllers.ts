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
  runtime: number;
  voteAverage: number;
  overview: string;
};

export const getNowPlayingMoviesController = async (
  req: Request<{}, {}, Movie>,
  res: Response,
  next: NextFunction
) => {
  // const genreIds = req.query.genres.split('-').map(id => Number(id));
  // const movies = await prisma.movie.findMany({
  //   //skip
  //   take: 20,
  //   where: {
  //     genres: {
  //       some: {
  //         id: {
  //           in: genreIds,
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     genres: true, // Include Genres in response
  //   },
  // });

  const genreIds = req.query.genres as string;
  const genreArray = genreIds.split('-').map(id => Number(id));

  if (genreArray[0] === 0) {
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
    //pageparam that sends back 20 movies

    res.send(movies);
  }
};
