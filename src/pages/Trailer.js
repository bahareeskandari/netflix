import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Comments from '../components/Comments'
import { UserContext } from '../components/UserContext'

const Trailer = ({ match }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const { movies, setMovies } = useContext(UserContext)

  const postComment = () => {
    setComments([comment, ...comments])
    setComments('')
  }
  console.log('match', match)
  console.log('movies', movies)
  return (
    <div>
      <h3>Trailer</h3>
      <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={postComment()}>Submit</button>
      <Comments comments={comments} />
    </div>
  )
}
export default Trailer
