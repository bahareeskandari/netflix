import { getTopMoviesUrl, getTopRatedTvShowsUrl } from '../Util/Constants'
// import InfiniteScroll from 'react-infinite-scroll-component'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchMovies = async (page) => {
  const topRatedMoviesUrl = getTopMoviesUrl(page)

  const topRatedMovies = await window.fetch(topRatedMoviesUrl)
  console.log('topRatedMoviesUrl BEFORE JSON', topRatedMoviesUrl) // remove later
  console.log('topRatedMovies', topRatedMovies)

  const topRatedMoviesData = await topRatedMovies.body.json()
  console.log('topRatedMoviesDataAfterJSON', topRatedMoviesData) // DOESNT SHOW THIS EITHER remove later

  const topRated = await topRatedMoviesData.results.map((movie) => {
    return {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview
    }
  })

  console.log('toprated, in the end ', topRated) // DOESNT COME HERE
  return { topRated }
}

export const fetchTVshows = async (page) => {
  const topRatedTvShowsUrl = getTopRatedTvShowsUrl(page)
  const topRatedTvShows = await window.fetch(topRatedTvShowsUrl)
  const topRatedTvShowsData = await topRatedTvShows.json()

  const topRatedTv = await topRatedTvShowsData.results.map((show) => {
    return {
      original_title: show.original_name,
      poster_path: show.poster_path,
      id: show.id,
      overview: show.overview
    }
  })

  return { topRatedTv }
}
