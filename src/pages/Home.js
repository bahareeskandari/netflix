import React, {useState, useEffect} from 'react'
import MoviesList from '../components/MovieList'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import {createGlobalStyles} from '../Util/GlobalStyles'
import Popup from '../components/Popup'

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    backgroundImage:
      'url(https://www.myanmore.com/wp-content/uploads/2019/05/netflix-background-9.jpg)',
  },
}))
//API Key: 45c558de41ced2373b930108825d0ef8
//style={{backgroundColor: '#cfe8fc'}}  <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>

export default function Home() {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()
  const [movies, setMovies] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

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

  return (
    <div className={classesGlobal.containerImage}>
      <Container maxWidth="lg">
        <Popup openModal={openModal} movie={selectedMovie} handleClose={handleClose} />
        <MoviesList
          handleClose={handleClose}
          handleOpen={handleOpen}
          openModal={openModal}
          movies={movies}
        />
      </Container>
    </div>
  )
}
