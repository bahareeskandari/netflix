import React, { useContext, useEffect } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { popularMoviesUrl, topRatedMoviesUrl } from '../Util/Constants'

const Movies = () => {
  const { movies, setMovies } = useContext(UserContext)

  useEffect(() => {
    // todo: hade varit finare om fetchMovies var i en handlers/apiHander.js. Svar: försökte men setMovies som kallas inuti skopen kommer ej att vara definerat i den andra filen

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
          overview: movie.overview
        }
      })

      const topRated = await topRatedMoviesData.results.map((movie) => {
        return {
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          id: movie.id,
          overview: movie.overview
        }
      })
      await setMovies(topRated.concat(popular))
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
