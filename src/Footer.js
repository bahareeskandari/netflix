import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { createGlobalStyles } from './Util/GlobalStyles'

const Footer = () => {
  const classesGlobal = createGlobalStyles()
  return (
    <div className={classesGlobal.footer}>
      <Container maxWidth='xl'>
        <footer>
          <Typography variant='subtitle1' align='center'>
            ©Bahare Eskandari | 2020. All rights reserved.
          </Typography>
        </footer>
      </Container>
    </div>
  )
}
export default Footer
