import { getTopMoviesUrl } from '../Util/Constants'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchMovies = async (page) => {
  const topRatedMoviesUrl = getTopMoviesUrl(page)
  const topRatedMovies = await fetch(topRatedMoviesUrl)
  const topRatedMoviesData = await topRatedMovies.json()

  const topRated = await topRatedMoviesData.results.map((movie) => {
    return {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview,
      valueOf: false
    }
  })
  return { topRated }
}
