import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Media from './Media'
import TextField from '@material-ui/core/TextField'

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
  const [input, setInput] = useState('')

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <TextField
          className={classes.marginI}
          style={{margin: 5, fontSize: 24, backgroundColor: 'white', borderRadius: 5, width: 1150}}
          label="Search movie"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Grid container item xs={12} spacing={3}>
          {entertainments.map((product, idx) => {
            if (input.length !== 0) {
              if (product.original_title.toLowerCase().startsWith(input.toLowerCase())) {
                return <Media handleOpen={handleOpen} key={idx} product={product} idx={idx} />
              } else {
                return null
              }
            }
            return <Media handleOpen={handleOpen} key={idx} product={product} idx={idx} />
          })}
        </Grid>
      </Grid>
    </div>
  )
}
export default MovieList
