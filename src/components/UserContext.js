import React, { useState, createContext } from 'react'

export const UserContext = createContext(true)

export const UserProvider = (props) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [user, setUser] = useState(null)

  return <UserContext.Provider value={{ movies, setMovies, tvShows, setTvShows, user, setUser }}>{props.children}</UserContext.Provider>
}
