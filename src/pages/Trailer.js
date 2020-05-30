import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../components/UserContext'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
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
  },
  userName: {
    opacity: '0.5',
    fontSize: '10px'
  },
  addBtn: {
    backgroundColor: 'gray',
    width: '120px',
    height: '30px',
    border: '0px solid transparent',
    marginLeft: '5px',
    borderRadius: '0.25px'

  }
}))

const Trailer = ({ movieId }) => {
  const classes = useStyles()
  const [comment, setComment] = useState({
    input: '',
    val: false
  })
  const [editComment, setEditComment] = useState({
    input: '',
    val: false
  })
  const [comments, setComments] = useState([])
  const { movies, tvShows } = useContext(UserContext)
  const [chosenTrailer, setChosenTrailer] = useState([])

  const imageFirstPart = 'https://image.tmdb.org/t/p/w200/'
  const { user, setUser } = useContext(UserContext)
  /**
  // todo: skapa en keys.json och lägg in denna där.
  {
    "apiKeyYoutube": "AIzaSyAfWZGuXaHJDi2HXN8c9j_W1nATC6JI8nM"
  }
  sen importera keys och skriv keys.apiKeyYoutube för att få värdet
*/

  const apiKeyYoutube = 'AIzaSyAfWZGuXaHJDi2HXN8c9j_W1nATC6JI8nM'

  useEffect(() => {
    setChosenTrailer(movies.filter((movie) => movie.id == movieId))
  }, [movieId, movies])

  const postComment = (comment) => {
    setEditComment({ input: '', editMode: false })
    setComments([comment, ...comments])
    setComment({ input: '', editMode: false })
  }
  // TODO: bättre att söka upp filmens ID med array.find här inne istället.

  const handleEditComment = (theComment) => {
    theComment.editMode = true
    setEditComment({ input: theComment.input, editMode: false })
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

            <InputLabel htmlFor='filled-adornment-amount'>Add Your comment</InputLabel>
            <FilledInput
              id='filled-adornment-amount'
              value={comment.input}
              onChange={(e) => setComment({ input: e.target.value, editMode: false })}
            />
            <button className={classes.addBtn} onClick={() => postComment(comment)}>add</button>
          </CardContent>

          <CardContent>
            {comments.map((comment, idx) => {
              return (comment.editMode) ? (
                <div>
                  <p className={classes.userName}>{user.displayName}</p>
                  <FilledInput type='text' value={editComment.input} onChange={(e) => setEditComment({ input: e.target.value, editMode: false })} />
                  <button
                    className={classes.addBtn} onClick={() => {
                      comment.editMode = false

                      postComment(editComment)
                    }}
                  >done editing comment
                  </button>

                </div>
              ) : (
                <div

                  onDoubleClick={() => handleEditComment(comment)}
                  key={idx}
                >
                  <p className={classes.userName}>{user.displayName}</p>
                  {comment.input}

                </div>
              )
            })}

          </CardContent>
        </Card>
      ))}
    </div>
  )
}
export default Trailer
