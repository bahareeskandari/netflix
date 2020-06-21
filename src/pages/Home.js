import React, { useContext } from 'react'
import { UserContext } from '../components/UserContext'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    height: '400px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    fontSize: '45px'
  },
  icons: {
    padding: 15,
    display: 'inline-block',
    cursor: 'pointer'
  },
  links: {
    textDecoration: 'none',
    fontSize: '14px',
    '&:hover': {
      color: 'gray'
    }
  },
  iconsContainer: {
    marginTop: '100px',
    marginLeft: '360px'

  }
})

const Home = () => {
  const { movies, user, tvShows } = useContext(UserContext)
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
              Welcome!
            </Typography>
            <Typography variant='h5' className={classes.pos} component='h2'>
              Hi, I'm Bahare Eskandari
            </Typography>

            <Typography className={classes.title} color='textSecondary' gutterBottom>

              <Typography className={classes.icons} variant='h5' component='h2'>
                <a href='https://linkedin.com/in/bahare-eskandari-50b033195'><i className='fab fa-linkedin' /></a>
              </Typography>
              <Typography className={classes.icons} variant='h5' component='h2'>
                <a href='https://www.facebook.com/bahare.eskandari.9/'><i className='fab fa-facebook-f' /></a>
              </Typography>
              <Typography className={classes.icons} variant='h5' component='h2'>
                <a href='https://linkedin.com/in/bahare-eskandari-50b033195'><i className='fab fa-github' /></a>
              </Typography>
              <Typography className={classes.icons} variant='h5' component='h2'>
                <a href='https://linkedin.com/in/bahare-eskandari-50b033195'><i className='fab fa-twitter' /></a>
              </Typography>
            </Typography>
            <CardActions>
              <Button variant='outlined'>CV</Button>
            </CardActions>
          </CardContent>
          <CardContent>
            <Typography variant='h6'>
              See my projects on github
            </Typography>
            <Typography className={classes.links} variant='h6'>
              <a className={classes.links} href='https://github.com/bahareeskandari/Ravenous-Using-Hooks'> Ravenous-app </a>
            </Typography>
            <Typography className={classes.links} variant='h6'>
              <a className={classes.links} href='https://github.com/bahareeskandari/calculator'> Calculator-app </a>
            </Typography>
            <Typography className={classes.links} variant='h6'>
              <a className={classes.links} href='https://github.com/bahareeskandari/Jammming-react-hooks'> Music-app </a>
            </Typography>
            <Typography className={classes.links} variant='h6'>
              <a className={classes.links} href='https://github.com/bahareeskandari/Fancy-todo-app'> Todo-app </a>
            </Typography>
            <Typography className={classes.links} variant='h6'>
              <a className={classes.links} href='https://github.com/bahareeskandari/Queue-app'> Queue-app </a>
            </Typography>
          </CardContent>

        </Card>
      </Container>
    </Container>
  )
}
export default Home
