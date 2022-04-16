const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class FavoritesService {
  static getFavorites = async (user_guid) => {
    const animes = [];
    const movies = [];
    const series = [];

    const userAnimes = await prisma.userAnimeLikes.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const animeFavorites = userAnimes.filter((f) => f.favorite);

    for (const anime of animeFavorites) {
      const video = await prisma.animes.findUnique({
        where: {
          guid: anime.anime_guid
        }
      })

      if (video) animes.push(video);
    }

    const userMovies = await prisma.userMovieLikes.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const movieFavorites = userMovies.filter((f) => f.favorite);

    for (const movie of movieFavorites) {
      const video = await prisma.movies.findUnique({
        where: {
          guid: movie.movie_guid
        }
      })

      if (video) movies.push(video);
    }

    const userSeries = await prisma.userSerieLikes.findMany({
      where: {
        user_guid: user_guid,
      }
    });

    const serieFavorites = userSeries.filter((f) => f.favorite);

    for (const serie of serieFavorites) {
      const video = await prisma.series.findUnique({
        where: {
          guid: serie.serie_guid
        }
      })

      if (video) series.push(video);
    }

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
}

module.exports = FavoritesService;
