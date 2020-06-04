import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '80px'
  },
  root: {

    maxWidth: 445
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  links: {
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

  return (
    <>
      <Grid item xs={3} className={classes.container}>
        <Card className={classes.root}>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='340'
            image={imageFirstPart + product.poster_path}
            title='Contemplative Reptile'
            onClick={() => handleOpen(product)}
          />

          <CardActions className={classes.links}>
            <Link className={classes.links} to={`/Movies/${idx}`}>{product.original_title}</Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}
export default Media
