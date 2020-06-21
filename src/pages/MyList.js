import React, { useContext } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'

const MyList = () => {
  const { myList } = useContext(UserContext)

  return (
    <MediaDisplayer media={myList} />
  )
}
export default MyList
