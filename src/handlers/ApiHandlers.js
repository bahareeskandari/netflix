import { getTopMoviesUrl, getTopRatedTvShowsUrl } from '../Util/Constants'
// import InfiniteScroll from 'react-infinite-scroll-component'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchMovies = async (page) => {
  const topRatedMoviesUrl = getTopMoviesUrl(page)
  const topRatedMovies = await fetch(topRatedMoviesUrl)
  const topRatedMoviesData = await topRatedMovies.json()

  const topRatedTvShowsUrl = getTopRatedTvShowsUrl(page)
  const topRatedTvShows = await fetch(topRatedTvShowsUrl)
  const topRatedTvShowsData = await topRatedTvShows.json()

  const topRated = await topRatedMoviesData.results.map((movie) => {
    return {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview,
      valueOf: false
    }
  })

  const topRatedTv = await topRatedTvShowsData.results.map((show) => {
    return {
      original_title: show.original_name,
      poster_path: show.poster_path,
      id: show.id,
      overview: show.overview,
      valueOf: false
    }
  })

  return { topRated, topRatedTv }
}
