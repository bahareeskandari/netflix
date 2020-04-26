import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

const Movie = ({movie, handleOpen}) => {
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
            image={imageFirstPart + movie.poster_path}
            title="Contemplative Reptile"
            onClick={() => handleOpen(movie)}
          />
          <CardContent></CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
export default Movie
