class Favorites {
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

module.exports = Favorites;
