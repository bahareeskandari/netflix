import React, { useContext, useEffect, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { fetchMovies } from '../handlers/ApiHandlers'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import InfiniteScroll from 'react-infinite-scroll-component'

const useStyles = makeStyles((theme) => ({
  searchBar: {
    left: '0',
    right: '0',
    position: 'absolute'
  }
}))

const Movies = () => {
  const classes = useStyles()
  const { movies, setMovies, loading, setLoading } = useContext(UserContext)
  const [hasMore, setHasMore] = useState(true)
  const [moviePage, setMoviePage] = useState(1)

  const getMovies = async () => {
    const { topRated } = await fetchMovies(moviePage)
    await setMovies([...movies, ...topRated])
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getMovies()
  }, [])

  const fetchMoreData = () => {
    if (movies.length >= 200) {
      setHasMore(false)
      return
    }
    setMoviePage(moviePage + 1)
    setTimeout(() => {
      getMovies()
    }, 1500) // takes 1500 sec to upload the infinite scroll pagination
  }

  return (
    <div>
      (
      <Container maxWidth='lg'>
        <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
          {loading ? <CircularProgress disableShrink /> : (
            <InfiniteScroll
              dataLength={movies.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<CircularProgress disableShrink />}
              endMessage={
                <Typography variant='body2' color='textSecondary' component='p'>
                  no more
                </Typography>
              }
            >
              <MediaDisplayer media={movies} />
            </InfiniteScroll>
          )}
        </Grid>
      </Container>
      )
    </div>
  )
}
export default Movies
