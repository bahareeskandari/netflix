import React, { useState, createContext } from 'react'

export const UserContext = createContext(true)

export const UserProvider = (props) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])

  return <UserContext.Provider value={{ movies, setMovies, tvShows, setTvShows }}>{props.children}</UserContext.Provider>
}
