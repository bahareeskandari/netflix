import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import {createGlobalStyles} from './Util/GlobalStyles'

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="text.disabled">
      {'Copyright © '}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  grow: {
    backgroundColor: 'orange',
    display: 'flex',
  },
  footer: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(6),
    color: 'red',
  },
}))

const Footer = () => {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()
  return (
    <div className={classesGlobal.container}>
      <Container maxWidth="xl">
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer FOOTER
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
      </Container>
    </div>
  )
}
export default Footer
