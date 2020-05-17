import React, { useState, useContext } from 'react'
import { createGlobalStyles } from '../Util/GlobalStyles'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'

const Movies = () => {
  const classesGlobal = createGlobalStyles()
  const { movies, setMovies } = useContext(UserContext)

  const fetchMovies = async () => {
    const popularMovies = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
    )
    const topRatedMovies = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
    )

    const popularMoviesData = await popularMovies.json()
    const topRatedMoviesData = await topRatedMovies.json()

    const popular = popularMoviesData.results.map((movie) => {
      console.log(movie)
      return {
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        id: movie.id,
        overview: movie.overview,
        rating: null,
        comments: []
      }
    })

    const topRated = topRatedMoviesData.results.map((movie) => {
      return {
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        id: movie.id,
        overview: movie.overview,
        rating: null,
        comments: []
      }
    })
    console.log(movies)

    // TODO: bugg: movies sparas inte.
    setMovies(topRated.concat(popular))

    setTimeout(() => {
      // TODO: Undersök varför movies blir en tom array här
      console.log('movies', movies)
    }, 5000)
  }

  return <MediaDisplayer fetchMedia={fetchMovies} media={movies} />
}
export default Movies
