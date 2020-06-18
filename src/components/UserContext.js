import React, { useState, createContext } from 'react'

export const UserContext = createContext(true)

export const UserProvider = (props) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [myList, setMyList] = useState([])

  return <UserContext.Provider value={{ movies, setMovies, tvShows, setTvShows, loading, setLoading, user, setUser, myList, setMyList }}>{props.children}</UserContext.Provider>
}
