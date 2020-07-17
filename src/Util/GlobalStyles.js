import { makeStyles } from '@material-ui/core/styles'

export const createGlobalStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: 'yellow'
  },
  footer: {
    color: '#808080',
    backgroundColor: 'black',
    bottom: 0,
    width: '100%',
    height: '100px',
    padding: 20
  }

}))
