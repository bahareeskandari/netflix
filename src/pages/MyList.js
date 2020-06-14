import React, { useContext, useState } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'

const MyList = () => {
  const { movies, setMovies, myList } = useContext(UserContext)
  // const [myList, setMyList] = useState(movies.filter(movie => movie.valueOf))

  return (
    <MediaDisplayer media={myList} />
  )
}
export default MyList
