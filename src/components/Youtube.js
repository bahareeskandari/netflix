import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  button: {
    width: '10px',
    padding: '1px'
  },
  youtube: {
    fontSize: '20px',
    color: 'rgba(0, 0, 0, 0.7)',
    transition: '0.4s',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      color: '#222'
    },
    '&:focus': {
      color: '#222'
    }

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
          Click to navigate to<Link className={classes.youtube} to='/Movies'>TRAILERS{' '}<i className='fab fa-youtube' /></Link>

        </Typography>

      </Container>

    </div>
  )
}
export default Youtube
