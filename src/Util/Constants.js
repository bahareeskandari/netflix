
let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = process.env
} else {
  Keys = require('../Keys.json')
}

// const { movieKey } = Keys
export const getTopMoviesUrl = (page) => `https://api.themoviedb.org/3/movie/top_rated?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
// export const popularTvsShows = `https://api.themoviedb.org/3/tv/popular?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`
// export const topRatedTvShows = `https://api.themoviedb.org/3/tv/top_rated?api_key=${Keys.REACT_APP_MOVIEKEY}&language=en-US&page=${page}`

// skapa todo pagination
