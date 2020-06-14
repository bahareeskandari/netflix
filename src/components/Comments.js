import React, { useState } from 'react'
import { createGlobalStyles } from '../Util/GlobalStyles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { UserContext } from '../components/UserContext'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import CardMedia from '@material-ui/core/CardMedia'
import Youtube from '../components/Youtube'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import YouTube from 'react-youtube'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import fetch from 'node-fetch'
require('es6-promise').polyfill()
require('isomorphic-fetch')

const useStyles = makeStyles((theme) => ({
  searchInput: {
    borderRadius: '0.25',
    backgroundColor: 'white',
    opacity: '0.5',
    padding: '5px',
    width: '200px',
    transition: 'all 0.325s',
    '&:hover': {
      opacity: '1'
    },
    '&:focus': {
      opacity: '1',
      width: '300px',
      transition: 'all 0.325s'
    }
  }
}))

const Comments = ({ commentsArray, chosenCommentIndex, expanded, editCommentValue }) => {
  const classes = useStyles()

  return (

    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <CardContent>
        {commentsArray.map((comment, index) =>
          chosenCommentIndex === index ? (
            <>
              <FilledInput
                id='component-filled'
                value={editCommentValue}
                onChange={(e) => setEditCommentValue(e.target.value)}
              />
              <Button
                variant='outlined'
                color='primary'
                onClick={() => {
                  handleAddEditedComment(editCommentValue)
                }}
              >
                Add
              </Button>
            </>
          ) : (
            <div>
              <li className={classes.li} key={index}>
                <p className={classes.p}>{user ? user.displayName : null}</p>
                {comment}
                <IconButton
                  aria-label='delete'
                  onClick={() => {
                    handleDeleteComment(index)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <Button
                  onClick={() => {
                    setEditCommentValue(commentsArray[index])
                    setchosenCommentIndex(index)
                  }}
                  className={classes.button}
                  variant='contained'
                >
                  Edit
                </Button>
                <br />
                <br />
              </li>
            </div>
          )
        )}
      </CardContent>
    </Collapse>
  )
}
export default Comments
