import React, { useContext, useEffect, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { fetchTVshows } from '../handlers/ApiHandlers'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import InfiniteScroll from 'react-infinite-scroll-component'

const useStyles = makeStyles((theme) => ({
  searchBar: {
    left: '0',
    right: '0',
    position: 'absolute'
  }
}))

const TVShows = () => {
  const classes = useStyles()
  const { tvShows, setTvShows, loading, setLoading } = useContext(UserContext)
  const [hasMore, setHasMore] = useState(true)
  const [tvShowsPage, setTvShowsPage] = useState(1)

  const getTVShows = async () => {
    const { topRatedTv } = await fetchTVshows(tvShowsPage)
    setTvShowsPage(tvShowsPage + 1)
    await setTvShows([...tvShows, ...topRatedTv])
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getTVShows()
  }, [])

  const fetchMoreData = () => {
    if (tvShows.length >= 200) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      getTVShows()
    }, 1500) // takes 1500 sec to upload the infinite scroll pagination
  }

  return (
    <div>
      (
      <Container maxWidth='lg'>
        <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
          {loading ? <CircularProgress disableShrink /> : (
            <InfiniteScroll
              dataLength={tvShows.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<CircularProgress disableShrink />}
              endMessage={
                <p>No more tv shows</p>
              }
            >
              <MediaDisplayer media={tvShows} />
            </InfiniteScroll>
          )}
        </Grid>
      </Container>
      )
    </div>
  )
}
export default TVShows
