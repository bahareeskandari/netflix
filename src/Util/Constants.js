let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = process.env
} else {
  Keys = require('../Keys.json')
}

export const getTopMoviesUrl = (page) => `https://api.themoviedb.org/3/movie/top_rated?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
export const getTopRatedTvShowsUrl = (page) => `https://api.themoviedb.org/3/tv/popular?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
export const imageFirstPart = 'https://image.tmdb.org/t/p/w200/'
