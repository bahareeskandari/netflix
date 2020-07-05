import React, { useState } from 'react'
import MediaList from './MediaList'
import Container from '@material-ui/core/Container'
import Popup from './Popup'
import Grid from '@material-ui/core/Grid'

export default function MediaDisplayer ({ media = {} }) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(undefined)

  const handleOpen = (movie) => {
    setSelectedMovie(movie)
    setOpenModal(true)
  }

  const handleClose = () => {
    setSelectedMovie(undefined)
    setOpenModal(false)
  }

  return (

    <Container maxWidth='lg'>
      <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
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

  )
}
