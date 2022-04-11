const AnimeService = require('./anime.service');
const MovieService = require('./movie.service');
const SerieService = require('./serie.service');

class ComingSoonService {
  static getComingSoons = async () => {
    const animes = await AnimeService.getAllAnimes();
    const movies = await MovieService.getAllMovies();
    const series = await SerieService.getAllSeries();

    const animeFilter = animes.filter((af) => af.comming_soon);
    const movieFilter = movies.filter((mf) => mf.comming_soon);
    const serieFilter = series.filter((sf) => sf.comming_soon);

    const animeData = animeFilter.map((ad) => ({
      ...ad,
      type: 'anime',
    }))

    const movieData = movieFilter.map((md) => ({
      ...md,
      type: 'movie',
    }))

    const serieData = serieFilter.map((sd) => ({
      ...sd,
      type: 'serie',
    }))

    const comingSoons = [...animeData, ...movieData, ...serieData];

    return comingSoons;
  };
}

module.exports = ComingSoonService;
