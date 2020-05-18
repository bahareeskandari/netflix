// @flow
import React, { useState, useEffect } from 'react'
import MediaList from './MediaList'
import Container from '@material-ui/core/Container'
import { createGlobalStyles } from '../Util/GlobalStyles'
import Popup from './Popup'
import Grid from '@material-ui/core/Grid'

// API Key: 45c558de41ced2373b930108825d0ef8

export default function MediaDisplayer ({ fetchMedia, media }) {
  const classesGlobal = createGlobalStyles()
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(undefined)

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
      <Container maxWidth='lg'>
        <Grid container direction='row' justify='flex-end' alignItems='center' spacing={3}>
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
