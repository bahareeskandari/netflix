import React, { useContext, useEffect, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
import { fetchTVshows } from '../handlers/ApiHandlers'
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

const TVShows = () => {
  const classes = useStyles()
  const { tvShows, setTvShows, loading, setLoading } = useContext(UserContext)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    async function getTVShows () {
      const { topRatedTv } = await fetchTVshows()
      await setTvShows(topRatedTv)
      fetchTVshows(page)
      setLoading(false)
    }
    getTVShows()
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
        <MediaDisplayer media={tvShows} />
      )}
    </div>
  )
}
export default TVShows
