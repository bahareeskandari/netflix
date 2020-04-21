import {makeStyles} from '@material-ui/core/styles'

export const createGlobalStyles = makeStyles((theme) => ({
  containerImage: {
    display: 'flex',
    backgroundImage:
      'url(https://www.myanmore.com/wp-content/uploads/2019/05/netflix-background-9.jpg)',
  },
  container: {
    backgroundColor: 'black',
  },
}))
