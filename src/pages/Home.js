import React from 'react'
import minipic from '../components/assets/minipic.jpg'
import '../App.css'

const Home = () => {
  return (
    <div className='body'>
      <div className='center'>
        <div className='avatar'>
          <img src={minipic} alt='backgroundimg' />
        </div>

        <div className='content'>
          <h1 className='h1'>Bahare Eskandari</h1>
          <h2 className='h2'>Javascript developer</h2>
          <p className='p'>
            Tech Geek | Travel Enthusias
          </p>
          <p className='p'>
            This page is something I was working on at the same time as I was doing my internship. Used firebase to store data and login user. Fetched api from youtube and moviedb. Navigate to movies/series, click like to add to your list or click to see the trailer of your chosen serie/movie. Also added scroll pagination and search/filter a specific movie/serie you're looking for.
          </p>
          <h3 className='h3'>Contact</h3>
        </div>
        <div className='social'>
          <a href='https://github.com/bahareeskandari'><i className='fab fa-github' /></a>
          <a href='https://linkedin.com/in/bahare-eskandari-50b033195'><i className='fab fa-linkedin' /></a>
          <a href='https://www.facebook.com/bahare.eskandari.9/'><i className='fab fa-facebook-f' /></a>
          <a href='https://www.dropbox.com/s/t1ccsznoc6jaxnz/Bahare%20CV%20update.pdf?dl=0'>CV</a>
        </div>
      </div>
    </div>
  )
}
export default Home
/*
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

*/
