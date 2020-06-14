import { popularMoviesUrl, topRatedMoviesUrl } from '../Util/Constants'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchMovies = async () => {
  const popularMovies = await fetch(popularMoviesUrl)
  const topRatedMovies = await fetch(topRatedMoviesUrl)

  const popularMoviesData = await popularMovies.json()
  const topRatedMoviesData = await topRatedMovies.json()

  const popular = await popularMoviesData.results.map((movie) => {
    return {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview,
      valueOf: false
    }
  })

  const topRated = await topRatedMoviesData.results.map((movie) => {
    return {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview,
      valueOf: false
    }
  })
  return { topRated, popular }
}
