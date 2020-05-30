import React, { useContext, useEffect } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { popularMoviesUrl, topRatedMoviesUrl } from '../Util/Constants'

const Movies = () => {
  const { movies, setMovies } = useContext(UserContext)

  useEffect(() => {
    // todo: hade varit finare om fetchMovies var i en handlers/apiHander.js

    // todo skapa en Util/constants.js som innehåller dessa URLer, importera dem.
    const fetchMovies = async () => {
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
          valueOfHeart: false,
          rating: null,
          comments: []
        }
      })

      const topRated = await topRatedMoviesData.results.map((movie) => {
        return {
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          id: movie.id,
          overview: movie.overview,
          valueOfHeart: false,
          rating: null,
          comments: []
        }
      })

      // TODO: bugg: movies sparas inte.  Svar: den sparas efter async funktionen, alltså om jag loggar precis ovanför retrun
      await setMovies(topRated.concat(popular))

      // setTimeout(() => {
      //   // TODO: Undersök varför movies blir en tom array här
      //   console.log('movies', movies)
      // }, 5000)
    }
    fetchMovies()
  }, [])

  return (
    <div>
      <MediaDisplayer media={movies} />
    </div>
  )
}
export default Movies
