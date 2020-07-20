let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = process.env
} else {
  Keys = require('../Keys.json')
}

export const getTopMoviesUrl = (page) => `https://netflixtrailers.herokuapp.com/api/Movies?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
export const getTopRatedTvShowsUrl = (page) => `https://netflixtrailers.herokuapp.com/api/TVShows?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
export const imageFirstPart = 'https://image.tmdb.org/t/p/w200/'

// export const getTopMoviesUrl = (page) => `http://localhost:9000/movies?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
// export const getTopRatedTvShowsUrl = (page) => `https://api.themoviedb.org/3/tv/popular?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
// "http://localhost:9000/players?key=${Keys.REACT_APP_MOVIEKEY}"
