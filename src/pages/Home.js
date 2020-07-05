import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import imageProfile from '../components/profile.jpg'

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
    fontSize: '25px'
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
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
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
                <a href='https://github.com/bahareeskandari'><i className='fab fa-github' /></a>
              </Typography>
            </Typography>
            <img src={imageProfile} alt='hh' style={{ width: '100px' }} />
            <CardActions />
            <Typography variant='h6'>
              Projects on github
            </Typography>
            <Typography className={classes.links} variant='h6'>
              <a className={classes.links} href='https://github.com/bahareeskandari/netflix'> Netflix trailers </a>
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
