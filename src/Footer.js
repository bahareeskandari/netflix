import React from 'react'

import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(6),
    color: 'white',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
export default Footer
