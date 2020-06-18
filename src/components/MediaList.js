import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Media from './Media'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  searchInput: {
    borderRadius: '0.25',
    backgroundColor: 'white',
    opacity: '0.5',
    padding: '5px',
    border: '0 solid transparent',
    fontSize: '18px',
    marginTop: '5px',
    height: '50px',
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

const MovieList = ({ entertainments, handleOpen }) => {
  const classes = useStyles()
  const [input, setInput] = useState('')

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {'   '}
        <br />
        {'   '}
        <input
          placeholder='Search movie'
          className={classes.searchInput}
          onChange={(e) => setInput(e.target.value)}
        />

        <Grid container item xs={12} spacing={3}>
          {entertainments.map((product, idx) => {
            if (input.length !== 0) {
              if (product.original_title.toLowerCase().startsWith(input.toLowerCase())) {
                return (
                  <Media handleOpen={handleOpen} key={idx} product={product} idx={idx} />
                )
              } else {
                return null
              }
            }
            return (
              <Media handleOpen={handleOpen} key={idx} product={product} idx={idx} />
            )
          }

          )}
        </Grid>
      </Grid>
    </div>
  )
}
export default MovieList
