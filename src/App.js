import React, { useState } from 'react'
import './App.css'
import firebase from 'firebase'
import Profile from './pages/Profile'
import MyList from './pages/MyList'
import TVShows from './pages/TVShows'
import Footer from './Footer'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import Container from '@material-ui/core/Container'
import Movies from './pages/Movies'
import FirebaseContext, { db, provider } from './Firebase/FirebaseContext'
import Trailer from './pages/Trailer'
import SearchBar from './components/SearchBar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

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
  const [authButtonLable, setAuthButtonLable] = useState('Login')
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {}
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      handleUserExists(user)
    } else {
      handleUserNotExists()
    }
  })

  const handleUserExists = (user) => {
    setAuthButtonLable('Logout')
    if (!user.providerData.length) return

    window.localStorage.setItem('user', JSON.stringify(user.providerData[0]))
  }
  const handleUserNotExists = () => {
    setAuthButtonLable('Login')
    const user = window.localStorage.getItem('user')
    return JSON.parse(user)
  }
  const onClickLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken
        const user = result.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      })
  }

  return (
    <div>
      <Container className={classes.containerNav} maxWidth='xl'>
        <BrowserRouter>
          <UserProvider>
            <FirebaseContext.Provider value={db}>
              <AppBar position='static' color='transparent'>
                <Toolbar>
                  <div className={classes.navLeft}>
                    <NavLink
                      exact
                      to='/Movies'
                      activeStyle={{ color: 'white' }}
                      className={classes.link}
                    >
                      Movies
                    </NavLink>
                    <NavLink
                      exact
                      to='/TVShows'
                      activeStyle={{ color: 'white' }}
                      className={classes.link}
                    >
                      TV shows
                    </NavLink>
                    <NavLink
                      exact
                      to='/'
                      activeStyle={{ color: 'white' }}
                      className={classes.link}
                    >
                      My list
                    </NavLink>
                    <NavLink
                      exact
                      onClick={onClickLogin}
                      to='#'
                      activeStyle={{ color: 'white' }}
                      className={classes.link}
                    >
                      {authButtonLable}
                    </NavLink>
                  </div>

                  <div className={classes.navRight}>
                    <SearchBar className={classes.searchBar} />
                    <Button
                      className={classes.link}
                      aria-controls='simple-menu'
                      aria-haspopup='true'
                      onClick={handleClick}
                    >
                      <AccountBoxOutlinedIcon />
                    </Button>
                    <Menu
                      id='simple-menu'
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <NavLink
                          exact
                          to='/Profile'
                          activeStyle={{ color: 'white' }}
                          className={classes.dropwDownLink}
                        >
                          Profile
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                  </div>
                </Toolbar>
              </AppBar>

              <Switch>
                <Route path='/' exact component={MyList} />
                <Route path='/Movies' exact component={Movies} />
                <Route path='/TVShows' exact component={TVShows} />
                <Route path='/Profile' exact component={Profile} />
                <Route
                  path='/Movies/:proId'
                  render={({ match }) => <Trailer movieId={match.params.proId} />}
                />
              </Switch>
            </FirebaseContext.Provider>
            <Footer />

          </UserProvider>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
