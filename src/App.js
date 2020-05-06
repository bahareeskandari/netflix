import React, {useState} from 'react'
import './App.css'
import Navbar from './Navbar'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import MyList from './pages/MyList'
import TVShows from './pages/TVShows'
import Footer from './Footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {UserProvider} from './components/UserContext'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Movies from './pages/Movies'
import {createGlobalStyles} from './Util/GlobalStyles'
import StartPage from './pages/StartPage'

const useStyles = makeStyles((theme) => ({
  containerNav: {
    backgroundColor: '#141414',
  },
}))

function App() {
  const classes = useStyles()
  // const classesGlobal = createGlobalStyles()
  const [myList, setMyList] = useState([])

  const user = {
    name: 'bahare',
    list: [],
  }
  const addToList = () => {}

  return (
    <div>
      <BrowserRouter>
        <UserProvider value={user}>
          <Container className={classes.containerNav} maxWidth="xl">
            <Navbar />
          </Container>
          <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/Movies" exact component={Movies} />
            <Route path="/TVShows" exact component={TVShows} />
            <Route path="/MyList" exact component={MyList} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/Notifications" exact component={Notifications} />
            <Route path="/Profile" exact component={Profile} />
          </Switch>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
