import React, {useState, useEffect} from 'react'
import MoviesList from '../components/MovieList'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import {createGlobalStyles} from '../Util/GlobalStyles'
import Popup from '../components/Popup'
import SearchBar from '../components/SearchBar'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    backgroundColor: '#141414',
  },
}))
//API Key: 45c558de41ced2373b930108825d0ef8
//style={{backgroundColor: '#cfe8fc'}}  <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>

export default function Home() {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()
  const [movies, setMovies] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(undefined)
  const [input, setInput] = useState('')

  const fetchMovies = async () => {
    const popularMovies = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
    )
    const topRatedMovies = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
    )

    const popularMoviesData = await popularMovies.json()
    const topRatedMoviesData = await topRatedMovies.json()

    const popular = popularMoviesData.results

    const topRated = topRatedMoviesData.results

    setMovies(topRated.concat(popular))
  }
  useEffect(() => {
    fetchMovies()
  }, [])

  const handleOpen = (movie) => {
    setSelectedMovie(movie)
    setOpenModal(true)
  }

  const handleClose = () => {
    setSelectedMovie(undefined)
    setOpenModal(false)
  }

  const handleInput = (e) => {
    console.log(e)
  }

  return (
    <div className={classesGlobal.container}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="flex-end" alignItems="center" spacing={3}>
          <SearchBar handleInput={handleInput} />
          <Grid item xs={12}>
            <Popup openModal={openModal} movie={selectedMovie} handleClose={handleClose} />
            <MoviesList
              handleClose={handleClose}
              handleOpen={handleOpen}
              openModal={openModal}
              movies={movies}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
