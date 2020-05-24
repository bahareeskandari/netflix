import React from 'react'
import './App.css'
import Profile from './pages/Profile'
import MyList from './pages/MyList'
import TVShows from './pages/TVShows'
import Footer from './Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import Container from '@material-ui/core/Container'
import Movies from './pages/Movies'
import { FirebaseProvider } from './Firebase/FirebaseContext'
import Trailer from './pages/Trailer'
import { makeStyles } from '@material-ui/core/styles'
import Appbar from './components/Appbar'

const useStyles = makeStyles((theme) => ({
  containerNav: {
    backgroundColor: '#141414'
  },
  appbar: {
    margin: theme.spacing(2)
  },

  link: {
    color: '#e9e9e9',
    margin: theme.spacing(2),
    textDecorationLine: 'none',
    fontFamily: "'Netflix Sans', 'Helvetica Neue',´ Helvetica, Arial, sans-serif",
    fontWeight: 'normal'
  },
  searchBar: {
    color: '#e9e9e9',
    margin: theme.spacing(2),
    textDecorationLine: 'none',
    fontFamily: "'Netflix Sans', 'Helvetica Neue',´ Helvetica, Arial, sans-serif",
    fontWeight: 'normal'
  },
  dropwDownLink: {
    color: 'black',
    textDecorationLine: 'none',
    fontWeight: 'normal'
  },
  navRight: {
    margin: theme.spacing(2),
    justifyContent: 'flex-end'
  },
  navLeft: {
    margin: theme.spacing(2),
    justifyContent: 'flex-start',
    flexGrow: 1
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div>
      <Container className={classes.containerNav} maxWidth='xl'>
        <BrowserRouter>
          <UserProvider>
            <FirebaseProvider>
              <Appbar />
              <Switch>
                <Route path='/' exact component={MyList} />
                <Route path='/Movies' exact component={Movies} />
                <Route path='/TVShows' exact component={TVShows} />
                <Route path='/Profile' exact component={Profile} />
                <Route
                  path='/Movies/:proId'
                  render={({ match }) => {
                    console.log(match)
                    return <Trailer movieId={match.params.proId} />
                  }}
                />
              </Switch>
            </FirebaseProvider>
            <Footer />
          </UserProvider>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
