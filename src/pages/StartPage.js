import React from 'react'
import StarRating from '../components/StarRating'
import {GoogleLogin} from 'react-google-login'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {createGlobalStyles} from '../Util/GlobalStyles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Netflix
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
const StartPage = (response) => {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()

  return (
    <div className={classesGlobal.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <StarRating />
          <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <GoogleLogin
                clientId="694887176212-qrgsq95vpivsm86n4d3af6s0bvpsbhqt.apps.googleusercontent.com"
                buttonText="Login with gmail"
                onSuccess={StartPage}
                onFailure={StartPage}
                cookiePolicy={'single_host_origin'}
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Click to create account
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      ,
    </div>
  )
}
export default StartPage
