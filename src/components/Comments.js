import React from 'react'
import Comment from './Comment'

const Comments = ({comments}) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  )
}
export default Comments
