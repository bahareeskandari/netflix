import { makeStyles } from '@material-ui/core/styles'

export const createGlobalStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#141414'
  },
  searchBar: {
    color: 'white'
  },
  searchIcon: {
    color: 'white'
  },
  searchInput: {
    textEmphasisColor: 'white' // NOT WORKING WHY
  }
}))
