import React, { useContext, useState } from 'react'
import firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import { UserContext } from './UserContext'
import { provider } from '../Firebase/FirebaseContext'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

const useStyles = makeStyles((theme) => ({
  containerNav: {
    backgroundColor: 'rgb(20, 20, 20)',
    boxShadow: '1px 1px 1px  1px black;'
  },
  appbar: {
    margin: theme.spacing(2)
  },
  heart: {
    color: '#e9e9e9',
    fontFamily: "'Netflix Sans', 'Helvetica Neue',´ Helvetica, Arial, sans-serif",
    fontWeight: 'normal',
    fontSize: 11,
    transition: '0.4s',
    '&:hover': {
      color: 'gray'
    }
  },
  link: {
    color: '#e9e9e9',
    margin: theme.spacing(2),
    textDecorationLine: 'none',
    fontFamily: "'Netflix Sans', 'Helvetica Neue',´ Helvetica, Arial, sans-serif",
    fontWeight: 'normal',
    transition: '0.4s',
    '&:hover': {
      color: 'gray'
    }
  },
  linkA: {
    color: '#e9e9e9',
    margin: theme.spacing(2),
    textDecorationLine: 'none',
    fontFamily: "'Netflix Sans', 'Helvetica Neue',´ Helvetica, Arial, sans-serif",
    fontWeight: 'normal',
    transition: '0.4s',
    '&:hover': {
      color: 'rgba(255, 255,255, 1)'
    }
  },
  searchBar: {
    color: '#e9e9e9',
    margin: theme.spacing(2),
    textDecorationLine: 'none',
    fontFamily: "'Netflix Sans', 'Helvetica Neue',´ Helvetica, Arial, sans-serif",
    fontWeight: 'normal'
  },
  dropwDownLink: {
    color: 'white',
    textDecorationLine: 'none',
    fontWeight: 'normal',
    transition: '0.4s',
    '&:hover': {
      color: 'gray'
    }
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
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchedMovie, setSearchedMovie] = React.useState(null)
  const { user, setUser, myList } = useContext(UserContext)

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
          <NavLink exact to='/' activeStyle={{ color: 'white' }} className={classes.link}>
            Home

          </NavLink>

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
            Series
          </NavLink>
          <NavLink
            exact
            to='/MyList'
            activeStyle={{ color: 'white' }}
            className={classes.linkA}
          >

            <IconButton aria-label='add to favorites' className={classes.heart}>
              <FavoriteIcon />  {myList.length}
            </IconButton>
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
                to='/MyList'
                activeStyle={{ color: 'white' }}
                className={classes.dropwDownLink}
              >
                My list
              </NavLink>
            </MenuItem>
            <MenuItem onClick={onClickLogin}> {user ? 'Logout' : 'Login'}</MenuItem>
          </Menu>

        </div>
      </Toolbar>
    </AppBar>
  )
}
export default RoutingWrapper
