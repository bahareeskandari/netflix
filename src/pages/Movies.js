import React, { useContext, useEffect, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { fetchMovies } from '../handlers/ApiHandlers'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

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
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    async function getMovies () {
      const { topRated } = await fetchMovies()
      await setMovies(topRated)
      fetchMovies(page)
      setLoading(false)
    }
    getMovies()
  }, [])

  return (
    <div>
      {loading ? (
        <Container maxWidth='lg'>
          <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
            <CircularProgress disableShrink />
          </Grid>
        </Container>
      ) : (
        <MediaDisplayer media={movies} />
      )}
    </div>
  )
}
export default Movies
