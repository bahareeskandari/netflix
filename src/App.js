import React, { useContext } from 'react'
import './App.css'
import MyList from './pages/MyList'
import Home from './pages/Home'
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
import promise from 'es6-promise'
import 'isomorphic-fetch'

promise.polyfill()

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
                <Route path='/' exact component={Home} />
                <Route path='/Movies' exact component={Movies} />
                <Route path='/TVShows' exact component={TVShows} />
                <Route
                  path='/TVShows/:proId'
                  render={({ match }) => {
                    return <TVShows movieId={match.params.proId} />
                  }}
                />
                <Route path='/MyList' exact component={MyList} />
                <Route
                  path='/Movies/:proId'
                  render={({ match }) => {
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
