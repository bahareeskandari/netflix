import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../components/UserContext'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import CardMedia from '@material-ui/core/CardMedia'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import YouTube from 'react-youtube'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '25ch'
  },
  root: {
    maxWidth: 1000,
    backgroundColor: 'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const Trailer = ({ movieId }) => {
  const classes = useStyles()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const { movies, tvShows } = useContext(UserContext)
  const [chosenTrailer, setChosenTrailer] = useState([])
  const [expanded, setExpanded] = React.useState(false)
  const imageFirstPart = 'https://image.tmdb.org/t/p/w200/'
  const { user, setUser } = useContext(UserContext)
  /**
  // todo: skapa en keys.json och lägg in denna där.
  {
    "apiKeyYoutube": "AIzaSyAfWZGuXaHJDi2HXN8c9j_W1nATC6JI8nM"
  }
  sen importera keys och skriv keys.apiKeyYoutube för att få värdet
  lägg till keys.json högst upp i din .gitignore
   */
  const apiKeyYoutube = 'AIzaSyAfWZGuXaHJDi2HXN8c9j_W1nATC6JI8nM'

  useEffect(() => {
    setChosenTrailer(movies.filter((movie) => movie.id == movieId))
  }, [movieId, movies])

  const postComment = (comment) => {
    setComments([...comments, comment])
    setComment('')
  }
  // TODO: bättre att söka upp filmens ID med array.find här inne istället.

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <div className={classes.root}>
      {chosenTrailer.map((movie) => (
        <Card key={movie.id}>
          <CardMedia
            className={classes.media}
            image={imageFirstPart + movie.poster_path}
            title={movie.original_title}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {movie.overview}
            </Typography>

            <InputLabel htmlFor='filled-adornment-amount'>something</InputLabel>
            <FilledInput
              id='filled-adornment-amount'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={() => postComment(comment)}
            />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <ul>
                {comments.map((comment, idx) => (
                  <li key={idx}>{comment}</li>
                ))}
              </ul>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  )
}
export default Trailer
