import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { UserContext } from '../components/UserContext'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80
  },
  root: {
    maxWidth: 245,
    height: 420,
    transition: 'all 0.325s',
    '&:hover': {
      maxWidth: 445,
      transition: 'all 0.325s'
    }
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  img: {
    cursor: 'pointer'
  },
  heart: {
    cursor: 'pointer',
    fontSize: '25px',
    margin: '70',
    textDecoration: 'none',
    color: '#5f6368',
    '&:hover': {
      color: '#222'
    }
  },
  youtube: {
    cursor: 'pointer',
    fontSize: '25px',
    margin: '0 90px 0 0',
    textDecoration: 'none',
    color: '#5f6368',
    '&:hover': {
      color: '#222'
    }
  },
  links: {
    color: '#5f6368',
    textDecoration: 'none',
    '&:hover': {
      color: '#222'
    }
  },
  p: {
    fontSize: '14px',
    color: '#5f6368',
    textDecoration: 'none',
    '&:hover': {
      color: '#222'
    }
  }

}))

const Media = ({ product, handleOpen, idx }) => {
  const classes = useStyles()
  const imageFirstPart = 'https://image.tmdb.org/t/p/w200/'
  const { movies, setMovies, setMyList } = useContext(UserContext)

  const AddToMyList = (product) => {
    const copyMovies = [...movies]
    copyMovies[product].valueOf = !copyMovies[product].valueOf
    setMovies(copyMovies)
    setMyList(movies.filter(movie => movie.valueOf))
  }

  return (

    <Grid item xs={3} className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.img}
          component='img'
          alt='Contemplative Reptile'
          height='340'
          image={imageFirstPart + product.poster_path}
          title='Contemplative Reptile'
          onClick={() => handleOpen(product)}
        />
        <Typography variant='p' component='p' className={classes.p}>
          {product.original_title}
        </Typography>
        <CardActions className={classes.links}>
          <Link className={classes.youtube} to={`/Movies/${idx}`}>Trailer<i className='fab fa-youtube' /></Link>
          <Typography className={classes.heart} variant='h6' component='h6' onClick={() => AddToMyList(idx)}>
            {product.valueOf ? (<i className='fas fa-heart' />) : (<i className='far fa-heart' />)}

          </Typography>
        </CardActions>

        <CardActions className={classes.links} />

      </Card>
    </Grid>

  )
}
export default Media
