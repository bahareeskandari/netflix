import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Media from './Media'
import Popup from './Popup'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
const MovieList = ({entertainments, handleOpen}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {entertainments.map((product, idx) => (
            <Media handleOpen={handleOpen} key={idx} product={product} />
          ))}
        </Grid>
      </Grid>
    </div>
  )
}
export default MovieList
