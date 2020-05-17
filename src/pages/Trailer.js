import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Comments from '../components/Comments'
import { UserContext } from '../components/UserContext'

const Trailer = ({ movieId }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const { movies, setMovies } = useContext(UserContext)

  const postComment = () => {
    setComments([comment, ...comments])
    setComments('')
  }
  // TODO: bättre att söka upp filmens ID med array.find här inne istället.
  console.log('movieId', movieId)
  return (
    <div>
      <h3>Trailer</h3>
      <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
      {/* TODO: Du har en infinite loop någonstans här under. Undersök vad som är fel:)  */}
      {/* <button onClick={postComment()}>Submit</button>
      <Comments comments={comments} /> */}
    </div>
  )
}
export default Trailer
