import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import MyList from './pages/MyList'
import TVShows from './pages/TVShows'
import Footer from './Footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Movies from './pages/Movies'
import {createGlobalStyles} from './Util/GlobalStyles'

const useStyles = makeStyles((theme) => ({
  containerNav: {
    backgroundColor: 'black',
  },
}))

function App() {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()

  return (
    <div>
      <BrowserRouter>
        <Container className={classes.containerNav} maxWidth="xl">
          <Navbar />
        </Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TVShows" exact exact component={TVShows} />
          <Route path="/Movies" exact exact component={Movies} />
          <Route path="/MyList" exact exact component={MyList} />
          <Route path="/Profile" exact exact component={Profile} />
          <Route path="/Notifications" exact exact component={Notifications} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
