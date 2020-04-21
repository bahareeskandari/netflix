import React from 'react'
import {createGlobalStyles} from '../Util/GlobalStyles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Movies = () => {
  const classesGlobal = createGlobalStyles()
  return (
    <div className={classesGlobal.containerImage}>
      <Container maxWidth="xl">
        <Typography component="div">
          Movies COMPONENT
          <br />
        </Typography>
      </Container>
    </div>
  )
}
export default Movies
