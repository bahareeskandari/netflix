import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import StarRating from './StarRating'
import Button from '@material-ui/core/Button'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Trailer from '../pages/Trailer'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Media = ({product, handleOpen}) => {
  const classes = useStyles()
  const imageFirstPart = 'https://image.tmdb.org/t/p/w200/'

  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={imageFirstPart + product.poster_path}
            title="Contemplative Reptile"
            onClick={() => handleOpen(product)}
          />
          <CardContent>
            <StarRating />
          </CardContent>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Link exact to={`/Movies/${product.id}`}>
              {product.original_title}
            </Link>
          </ButtonGroup>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
export default Media