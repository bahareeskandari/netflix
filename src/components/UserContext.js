import React, {useState} from 'react'

export const UserContext = React.createContext(true)

export const UserProvider = (props) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])

  return <UserContext.Provider value={{movies, setMovies}}>{props.children}</UserContext.Provider>
}
