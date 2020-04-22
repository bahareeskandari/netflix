import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import {createGlobalStyles} from './Util/GlobalStyles'

const useStyles = makeStyles((theme) => ({
  grow: {
    backgroundColor: 'orange',
    display: 'flex',
  },
  footer: {
    backgroundColor: theme.palette.common.black,
    color: 'white',
  },
}))

const Footer = () => {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()
  return (
    <div className={classesGlobal.container}>
      <Container maxWidth="xl">
        <footer>
          <Typography variant="h6" align="center" gutterBottom>
            Footer FOOTER
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Typography variant="subtitle1" align="center">
            Copyright ©
          </Typography>
        </footer>
      </Container>
    </div>
  )
}
export default Footer
