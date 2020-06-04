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
import { apiKeyYoutube } from '../Keys.json'
import YoutubeWrapper from '../components/YoutubeWrapper'
import { keyYoutube } from '../Util/Constants'

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
  const [chosenComment, setChosenComment] = useState(null)
  const opts = {
    height: '394',
    width: '1000'
  }

  const { user, setUser } = useContext(UserContext)
  const urlYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keyYoutube}&q=${titleOf}%20trailer`

  useEffect(() => {
    fetch(urlYoutube)
      .then((res) => res.json())
      .then((r) => setUrlSearch(r.items[0].id.videoId))
  }, [])

  const handleAddComment = (comment) => {
    setCommentsArray([...commentsArray, comment])
    setInputComment('')
  } /*
                   ( <li key={index} onDoubleClick={() => setChosenComment(index)}>{comment}</li>) :
                  ( <li key={index} onDoubleClick={() => setChosenComment(index)}>{comment}</li>)
  */

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
              !chosenComment ? ( // om chosencomment är falsk

                <li key={index} onDoubleClick={() => setChosenComment(index)}>
                  {comment}
                </li>
              ) : (

                <input id='fieke' value={commentsArray[chosenComment]} />
              )
            )}
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}
export default Trailer

// TODO: bättre att söka upp filmens ID med array.find här inne istället.

/*
dubbelklick
input med value som är den man har klickat på, med den senaste kommentaren

redigera
klickar på knapp som dyker upp
-------

vid dubbelklick spara index på kommentaren jag har dubbelklickat på . setEditComment(integer)
value = comments[editcomment]
skapa input med value = comments[editcomment]
onchange ny editingComment state
editingComment('')
setEditComment(null)
postComment()
gå till indexet som finns i editComment och ta texten i editingComment sen sätt comment till
if editingCoemment är tom string så ta bort comment med det indexet,

*/

/*
     <div className={classes.root}>
      {console.log('after return')}
      {chosenTrailer.map((movie) => (
        <Card key={movie.id}>

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
            <button className={classes.addBtn} onClick={() => postComment(comment)}>
              add
            </button>
            </CardContent>

            <CardContent>
          {comments.map((comment, idx) => {
                return !editComment || editComment !== 0 ? (
                  <div>
                    <p className={classes.userName}>{user.displayName}</p>
                    <FilledInput
                      type='text'
                      value={editComment.input}
                      onChange={(e) => setEditComment({ input: e.target.value, editMode: false })}
                    />
                    <button
                      className={classes.addBtn}
                      onClick={() => {
                        comment.editMode = false
                        // setComments(comments.filter((com, id) => id !== idx))
                        postComment(editComment)
                      }}
                    >
                      done editing comment
                    </button>
                  </div>
                ) : (
                  <div onDoubleClick={() => handleEditComment(idx)} key={idx}>
                    <p className={classes.userName}>{user.displayName}</p>
                    {comment.input}
                  </div>
                )
              })}
            </CardContent>
          </Card>
        ))}
      </div>
 */
