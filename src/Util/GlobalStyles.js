import { makeStyles } from '@material-ui/core/styles'

export const createGlobalStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: 'white'
  },
  searchBar: {
    color: '#fff'
  },
  searchIcon: {
    color: '#fff'
  },
  searchInput: {
    textEmphasisColor: '#fff' // NOT WORKING WHY
  },
  footer: {
    padding: '50px',
    margin: '50px',
    color: '#808080',
    backgroundColor: '#141414'
  }

}))
