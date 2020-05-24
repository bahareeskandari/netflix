import React, { useContext } from 'react'
import firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import { UserContext } from './UserContext'
import { provider } from '../Firebase/FirebaseContext'

import SearchBar from './SearchBar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

const useStyles = makeStyles((theme) => ({
  containerNav: {
    backgroundColor: 'rgb(20, 20, 20)'
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

const RoutingWrapper = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { user, setUser } = useContext(UserContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        window.localStorage.removeItem('user')
        setUser(null)
      })
      .catch((error) => { console.log(error) })
  }
  const onClickLogin = () => {
    if (user) {
      return handleSignOut()
    }
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
    <AppBar position='static' className={classes.containerNav}>
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
          <NavLink exact to='/' activeStyle={{ color: 'white' }} className={classes.link}>
            My list
          </NavLink>
          <NavLink
            exact
            onClick={onClickLogin}
            to='#'
            activeStyle={{ color: 'white' }}
            className={classes.link}
          >
            {user ? 'Logout' : 'Login'}
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
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default RoutingWrapper
