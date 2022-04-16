const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class FavoritesService {
  static getFavorites = async (user_guid) => {
    const animes = [];
    const movies = [];
    const series = [];

    /** Find in user_likes */
    const userAnimes = await prisma.userAnimeLikes.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const userMovies = await prisma.userMovieLikes.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const userSeries = await prisma.userSerieLikes.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    /** Functions to find in video tables */
    await this.videoFavorites(userAnimes, animes, 'anime');

    await this.videoFavorites(userMovies, movies, 'movie');

    await this.videoFavorites(userSeries, series, 'serie');

    /** New Array with type video */
    const animesFavorite = animes.map((a) => ({
      ...a,
      type: 'anime'
    }))

    const moviesFavorite = movies.map((a) => ({
      ...a,
      type: 'movie'
    }))

    const seriesFavorite = series.map((a) => ({
      ...a,
      type: 'serie'
    }))

    return [...animesFavorite, ...moviesFavorite, ...seriesFavorite];
  };

  static videoFavorites = async (findPrisma, array, type) => {
    const videoFavorite = findPrisma.filter((f) => f.favorite);

    for (const video of videoFavorite) {
      const value = (
        type === 'anime' ? await prisma.animes.findUnique({
          where: {
            guid: video.anime_guid
          }
        }) :
          type === 'movie' ? await prisma.movies.findUnique({
            where: {
              guid: video.movie_guid
            }
          }) : await prisma.series.findUnique({
            where: {
              guid: video.serie_guid
            }
          }))

      if (value) array.push(value);
    }
  }
}

module.exports = FavoritesService;
