import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../components/UserContext'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import Youtube from '../components/Youtube'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import YouTube from 'react-youtube'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import FirebaseContext from '../Firebase/FirebaseContext'
require('es6-promise').polyfill()
require('isomorphic-fetch')

let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = process.env
} else {
  Keys = require('../Keys.json')
}

const useStyles = makeStyles((theme) => ({
  button: {
    width: '10px',
    padding: '1px'
  },
  youtube: {
    fontSize: '20px'

  },
  li: {
    fontSize: '22px',
    listStyle: 'none'
  },
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
    maxWidth: 520,
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
    border: '0px solid transparent',
    marginLeft: '15px',
    borderRadius: '0.25px'
  },
  p: {
    fontSize: '10px',
    opacity: '0.5'
  }
}))

const Trailer = ({ movieId }) => {
  const classes = useStyles()
  const { movies, tvShows } = useContext(UserContext)
  const together = movies.concat(tvShows)
  const [chosenTrailer, setChosenTrailer] = useState(together.find(movi => movi.id == movieId))
  const [titleOf, setTitleOf] = useState(chosenTrailer ? (chosenTrailer.original_title).replace(/\s/g, '%20') : (<Youtube />)) // replace white space with %20 for yuotube
  const [urlSearch, setUrlSearch] = useState('')
  const [inputComment, setInputComment] = useState('')
  const [commentsArray, setCommentsArray] = useState([])
  const [chosenCommentIndex, setchosenCommentIndex] = useState(null)
  const [editCommentValue, setEditCommentValue] = useState(null)
  const [expanded, setExpanded] = React.useState(false)
  const db = useContext(FirebaseContext)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const opts = {
    height: '394',
    width: '500'
  }

  const { user, setUser } = useContext(UserContext)
  const urlYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${Keys.REACT_APP_APIKEYYOUTUBE}&q=${titleOf}%20trailer`

  // const fetchYoutube = () => {
  //   fetch(urlYoutube)
  //     .then((res) => res.json())
  //     .then((r) => setUrlSearch(r.items[0].id.videoId))
  // }

  useEffect(() => {
    fetch(urlYoutube, {
      headers: {
        'Content-Type': 'application/json'

      }
    }).then(r => r.json())
      .then((r) => {
        setUrlSearch(r.items[0].id.videoId)
      }).catch(error => console.log(error))
    getComments()
  }, [])

  const handleAddComment = (comment) => {
    if (user) {
      if (inputComment) {
        setCommentsArray([...commentsArray, comment])
        setInputComment('')
        // add comment to firebase
        setCommentToFirebase(comment)
      }
    } else {
      alert('You need to login first')
    }
  }
  const handleAddEditedComment = (comment) => {
    const newCommentsArray = [...commentsArray]
    newCommentsArray.splice(chosenCommentIndex, 1, comment)
    setCommentsArray(newCommentsArray)
    setchosenCommentIndex(null)
  }
  const handleDeleteComment = (idx) => {
    setCommentsArray(commentsArray.filter((comment, index) => index !== idx))
  }

  const getComments = () => {
    const commentsRef = db.collection('Comments')
    const docRef = commentsRef.doc(movieId)

    docRef.get().then(function (doc) {
      if (doc.exists) {
        const data = doc.data()
        const emailsComments = Object.keys(data)
        const commentsFromDb = emailsComments.map(email => {
          return {
            user: email,
            comment: data[email]
          }
        })
        setCommentsArray([...commentsArray, ...commentsFromDb])
      } else {
      // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
  }

  const setCommentToFirebase = (comment) => {
    const commentsRef = db.collection('Comments')
    const docRef = commentsRef.doc(movieId)
    docRef.set({
      [user.email]: comment
    }, { merge: true })
  }

  if (!titleOf) {
    return <p>not found</p>
  }
  return (
    <div className={classes.root}>
      {chosenTrailer ? (
        <Card>
          <CardContent>
            <YouTube videoId={urlSearch} opts={opts} />
          </CardContent>

          <CardActions>
            <CardContent>
              {' '}
              <Typography variant='body2' color='textSecondary' component='p'>
                {chosenTrailer.overview}
              </Typography>
              <br />
              <br />
              <InputLabel htmlFor='standard-adornment-password'>Add Your comment</InputLabel>
              <FilledInput
                id='component-filled'
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}
              />
              <Button
                variant='outlined'
                className={classes.addBtn}
                color='primary'
                onClick={() => handleAddComment(inputComment)}
              >
                Add
              </Button>
            </CardContent>
            <Typography variant='h6' className={classes.youtube} component='h6'>
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
            </Typography>

          </CardActions>

          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              {commentsArray.map((comment, index) =>
                chosenCommentIndex === index ? (
                  <>
                    <FilledInput
                      id='component-filled'
                      value={editCommentValue}
                      onChange={(e) => setEditCommentValue(e.target.value)}
                    />
                    <Button
                      variant='outlined'
                      color='primary'
                      onClick={() => {
                        handleAddEditedComment(editCommentValue)
                      }}
                    >
                      Add
                    </Button>
                  </>
                ) : (
                  <div>
                    <li className={classes.li} key={index}>
                      <p className={classes.p}>{comment.user || null}</p>
                      {console.log(comment)}
                      {comment.comment}
                      <IconButton
                        aria-label='delete'
                        onClick={() => {
                          handleDeleteComment(index)
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <Button
                        onClick={() => {
                          setEditCommentValue(commentsArray[index])
                          setchosenCommentIndex(index)
                        }}
                        className={classes.button}
                        variant='contained'
                      >
                        Edit
                      </Button>
                      <br />
                      <br />
                    </li>
                  </div>
                )
              )}
            </CardContent>
          </Collapse>
        </Card>
      ) : (<Youtube />)}
    </div>
  )
}
export default Trailer
