import { getTopMoviesUrl, getTopRatedTvShowsUrl } from '../Util/Constants'
// import InfiniteScroll from 'react-infinite-scroll-component'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchMovies = async (page) => {
  const topRatedMoviesUrl = getTopMoviesUrl(page)
  const topRatedMovies = await window.fetch(topRatedMoviesUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

  })
  const topRatedMoviesData = await topRatedMovies.json()

  const topRated = await topRatedMoviesData.results.map((movie) => {
    return {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview
    }
  })

  return { topRated }
}

export const fetchTVshows = async (page) => {
  const topRatedTvShowsUrl = getTopRatedTvShowsUrl(page)
  const topRatedTvShows = await window.fetch(topRatedTvShowsUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

  })
  const topRatedTvShowsData = await topRatedTvShows.json()

  const topRatedTv = await topRatedTvShowsData.results.map((show) => {
    console.log(show)
    return {
      original_title: show.original_name,
      poster_path: show.poster_path,
      id: show.id,
      overview: show.overview
    }
  })

  return { topRatedTv }
}
