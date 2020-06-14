import React, { useContext, useEffect } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { fetchMovies } from '../handlers/ApiHandlers'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  searchBar: {
    left: '0',
    right: '0',
    position: 'absolute'
  }
}))

const Movies = () => {
  const classes = useStyles()
  const { movies, setMovies } = useContext(UserContext)

  useEffect(() => {
    // todo: hade varit finare om fetchMovies var i en handlers/apiHander.js. Svar: försökte men setMovies som kallas inuti skopen kommer ej att vara definerat i den andra filen

    async function getMovies () {
      const { topRated, popular } = await fetchMovies()
      await setMovies(topRated.concat(popular))
      fetchMovies()
    }
    getMovies()
  }, [])

  return (
    <div>

      <MediaDisplayer media={movies} />

    </div>
  )
}
export default Movies
