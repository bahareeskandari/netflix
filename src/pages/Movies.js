import React, { useContext, useEffect, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { fetchMovies } from '../handlers/ApiHandlers'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import InfiniteScroll from 'react-infinite-scroll-component'

const Movies = () => {
  const { movies, setMovies, loading, setLoading } = useContext(UserContext)
  const [hasMore, setHasMore] = useState(true)
  const [moviePage, setMoviePage] = useState(1)

  const getMovies = async () => {
    const { topRated } = await fetchMovies(moviePage)
    setMoviePage(moviePage + 1)
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
    setTimeout(() => {
      getMovies()
    }, 1300) // takes 1200 sec to upload the infinite scroll pagination
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
                <p>No more tv shows</p>
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
