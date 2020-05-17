import React, { useState, useContext } from 'react'
import './App.css'
import Navbar from './Navbar'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import MyList from './pages/MyList'
import TVShows from './pages/TVShows'
import Footer from './Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserProvider, UserContext } from './components/UserContext'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Movies from './pages/Movies'
import { FirebaseProvider, FirebaseContext } from './Firebase/FirebaseContext'
import StartPage from './pages/StartPage'
import Trailer from './pages/Trailer'

const useStyles = makeStyles((theme) => ({
  containerNav: {
    backgroundColor: '#141414'
  }
}))

function App () {
  const classes = useStyles()
  // const classesGlobal = createGlobalStyles()
  const { movies, setMovies } = useContext(UserContext)

  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Container className={classes.containerNav} maxWidth='xl'>
            <FirebaseProvider>
              <Navbar />
              <Switch>
                <Route path='/' exact component={StartPage} />
                <Route path='/Movies' exact component={Movies} />
                <Route path='/TVShows' exact component={TVShows} />
                <Route path='/MyList' exact component={MyList} />
                <Route path='/Profile' exact component={Profile} />
                <Route path='/Notifications' exact component={Notifications} />
                <Route path='/Profile' exact component={Profile} />
                <Route
                  path='/Movies/:proId'
                  render={({ match }) => (
                    <Trailer movieId={match.params.proId} />
                  )}
                />
              </Switch>
            </FirebaseProvider>
            <Footer />
          </Container>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
