import React, {useState} from 'react'
import Home from './pages/Home'
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
    backgroundColor: theme.palette.text.primary,
    margin: theme.spacing(2),
  },
  menu: {
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: 'white',
    margin: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar} position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />

          <Link to="/" className={classes.link} color="inherit">
            Home
          </Link>
          <Link to="" className={classes.link} color="inherit">
            TV show
          </Link>
          <Link to="" className={classes.link} color="inherit">
            Movies
          </Link>
          <Link to="" className={classes.link} color="inherit">
            Recently added
          </Link>
          <Link to="" className={classes.link} color="inherit">
            My list
          </Link>

          <Button
            className={classes.menu}
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
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
export default Navbar
