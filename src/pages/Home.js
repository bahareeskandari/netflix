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
          <h1>Bahare Eskandari</h1>
          <h2>Front-end developer</h2>
          <p>After a four year career as a pharmacist, working hard to reach a manager position, I come to realise that this was not something that I wanted to continue to do for the rest of my life.

            Over two years ago I decided to reassess my career trajectory and start focusing on something more forward looking that I’m more excited about. I wanted to tap into my problem solving skills and eye for details and that’s how I began my journey as a frontend developer.
          </p>
          <h3>Contact</h3>
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
