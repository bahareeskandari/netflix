import React, {useState} from 'react'
import Movies from './pages/Movies'
import Profile from './pages/Profile'
import MyList from './pages/MyList'
import TVShows from './pages/TVShows'
import Notifications from './pages/Notifications'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

//import Link from '@material-ui/core/Link'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    margin: theme.spacing(2),
  },

  link: {
    color: 'white',
    margin: theme.spacing(2),
    textDecorationLine: 'none',
  },
  navRight: {
    margin: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  navLeft: {
    margin: theme.spacing(2),
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Navbar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <CameraIcon color="inherit" />
          <div className={classes.navLeft}>
            <Link to="/" className={classes.link}>
              Home
            </Link>

            <Link to="/TVShows" className={classes.link}>
              TV shows
            </Link>
            <Link to="/Movies" className={classes.link} color="inherit">
              Movies
            </Link>
            <Link to="" className={classes.link} color="inherit">
              My list
            </Link>
          </div>

          <div className={classes.navRight}>
            <Link to="/Notifications" className={classes.link}>
              Notifications
            </Link>
            <Button
              className={classes.link}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <AccountBoxOutlinedIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
