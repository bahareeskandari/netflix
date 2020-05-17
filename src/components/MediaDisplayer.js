import React, {useState, useContext, useEffect} from 'react'
import MediaList from './MediaList'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import {createGlobalStyles} from '../Util/GlobalStyles'
import Popup from './Popup'
import Grid from '@material-ui/core/Grid'
import {UserContext} from './UserContext'

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    backgroundColor: '#141414',
  },
}))
//API Key: 45c558de41ced2373b930108825d0ef8

export default function MediaDisplayer({fetchMedia, media}) {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()

  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(undefined)
  const [input, setInput] = useState('')
  const user = useContext(UserContext)

  useEffect(() => {
    fetchMedia()
  }, [])

  const handleOpen = (movie) => {
    setSelectedMovie(movie)
    setOpenModal(true)
  }

  const handleClose = () => {
    setSelectedMovie(undefined)
    setOpenModal(false)
  }

  return (
    <div className={classesGlobal.container}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="flex-end" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Popup openModal={openModal} movie={selectedMovie} handleClose={handleClose} />
            <MediaList
              handleClose={handleClose}
              handleOpen={handleOpen}
              openModal={openModal}
              entertainments={media}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
