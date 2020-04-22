import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {createGlobalStyles} from './Util/GlobalStyles'

import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

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

const Navbar = () => {
  const classesGlobal = createGlobalStyles()
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
            <Link to="/MyList" className={classes.link} color="inherit">
              My list
            </Link>
          </div>

          <div className={classes.navRight}>
            <SearchIcon className={classesGlobal.search} />
            <InputBase
              placeholder="Search…"
              className={classesGlobal.searchInput}
              inputProps={{'aria-label': 'search'}}
            />

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
