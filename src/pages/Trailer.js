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
import YoutubeWrapper from '../components/YoutubeWrapper'
require('es6-promise').polyfill()
require('isomorphic-fetch')

let Keys
if (process.env.production) {
  Keys = process.env
} else {
  Keys = require('../Keys.json')
}

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
  const { movies, tvShows } = useContext(UserContext)
  const [chosenTrailer, setChosenTrailer] = useState(movies[movieId])
  const [titleOf, setTitleOf] = useState(chosenTrailer.original_title)
  const [urlSearch, setUrlSearch] = useState('')

  const [inputComment, setInputComment] = useState('')
  const [commentsArray, setCommentsArray] = useState([])
  const [chosenCommentIndex, setchosenCommentIndex] = useState(null)
  const [editCommentValue, setEditCommentValue] = useState(null)

  const opts = {
    height: '394',
    width: '1000'
  }

  const { user, setUser } = useContext(UserContext)
  const urlYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${Keys.apiKeyYoutube}&q=${titleOf}%20trailer`

  useEffect(() => {
    fetch(urlYoutube)
      .then((res) => res.json())
      .then((r) => setUrlSearch(r.items[0].id.videoId))
  }, [])

  const handleAddComment = (comment) => {
    setCommentsArray([...commentsArray, comment])
    setInputComment('')
  }
  const handleAddEditedComment = (comment) => {
    const newCommentsArray = [...commentsArray]
    newCommentsArray.splice(chosenCommentIndex, 1, comment)
    setCommentsArray(newCommentsArray)
    setchosenCommentIndex(null)
  }
  const handleDeleteComment = (idx) => {
    // setCommentsArray([commentsArray.filter(comme)])
  }

  return (
    <div className={classes.root}>
      {chosenTrailer ? (
        <Card>
          <CardContent>
            <CardContent>
              <YouTube videoId={urlSearch} opts={opts} />
            </CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {chosenTrailer.overview}
            </Typography>

            <InputLabel htmlFor='filled-adornment-amount'>Add Your comment</InputLabel>
            <input

              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
            />
          </CardContent>
          <button onClick={() => handleAddComment(inputComment)}>add</button>
          <CardContent>
            {commentsArray.map((comment, index) =>
              chosenCommentIndex === index ? (
                <>
                  <input
                    id='fieke' value={editCommentValue}
                    onChange={(e) => setEditCommentValue(e.target.value)}
                  />
                  <button onClick={() => {
                    handleAddEditedComment(editCommentValue)
                  }}
                  >add
                  </button>
                </>
              ) : (
                <div>
                  <li
                    key={index} onDoubleClick={() => {
                      setEditCommentValue(commentsArray[index])
                      setchosenCommentIndex(index)
                    }}
                  >
                    {comment}
                  </li>
                  <button onClick={() => {
                    handleDeleteComment(index)
                  }}
                  >x
                  </button>
                </div>
              )
            )}
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}
export default Trailer
