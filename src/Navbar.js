import React from 'react'
import SearchBar from './components/SearchBar'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

const useStyles = makeStyles((theme) => ({
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

const Navbar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {}

  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <div className={classes.navLeft}>
          <NavLink exact to='/' activeStyle={{ color: 'white' }} className={classes.link}>
            StartPage
          </NavLink>
          <NavLink exact to='/Movies' activeStyle={{ color: 'white' }} className={classes.link}>
            Movies
          </NavLink>
          <NavLink exact to='/TVShows' activeStyle={{ color: 'white' }} className={classes.link}>
            TV shows
          </NavLink>
          <NavLink exact to='/MyList' activeStyle={{ color: 'white' }} className={classes.link}>
            My list
          </NavLink>
        </div>

        <div className={classes.navRight}>
          <SearchBar className={classes.searchBar} />
          <NavLink
            exact
            to='/Notifications'
            className={classes.link}
            activeStyle={{ color: 'white' }}
          >
            Notifications
          </NavLink>
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
  )
}
export default Navbar
