import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {red} from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  youtube: {
    fontSize: '20px',
    color: 'rgba(0, 0, 0, 0.7)',
    transition: '0.4s',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      color: '#222',
    },
    '&:focus': {
      color: '#222',
    },
  },
  root: {
    maxWidth: 1000,
    backgroundColor: 'white',
  },
}))

const Youtube = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Go back
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Click to navigate to
          <Link className={classes.youtube} to="/Movies">
            TRAILERS <i className="fab fa-youtube" />
          </Link>
        </Typography>
      </Container>
    </div>
  )
}
export default Youtube
