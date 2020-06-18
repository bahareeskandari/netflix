import React, { useContext, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'

const MyList = () => {
  const { movies, setMovies, myList } = useContext(UserContext)

  return (
    <MediaDisplayer media={myList} />
  )
}
export default MyList
