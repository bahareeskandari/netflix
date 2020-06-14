import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import fetch from 'node-fetch'

const useStyles = makeStyles((theme) => ({
  button: {
    width: '10px',
    padding: '1px'
  },
  youtube: {
    fontSize: '20px'

  },
  li: {
    fontSize: '22px',
    listStyle: 'none'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '25ch'
  },
  root: {
    maxWidth: 1000,
    backgroundColor: 'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  userName: {
    opacity: '0.5',
    fontSize: '10px'
  },
  addBtn: {
    border: '0px solid transparent',
    marginLeft: '15px',
    borderRadius: '0.25px'
  }
}))

const Youtube = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='sm'>
        <Typography variant='h2' component='h1' gutterBottom>
          Go back
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          Go back to Movies and choose a movie trailer.

        </Typography>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Link className={classes.youtube} to='/Movies'>TRAILERS{' '}<i className='fab fa-youtube' /></Link>
        </Container>
      </footer>
    </div>
  )
}
export default Youtube
