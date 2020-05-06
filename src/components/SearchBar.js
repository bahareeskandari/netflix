import React, {useState} from 'react'
import {createGlobalStyles} from '../Util/GlobalStyles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({}))

const SearchBar = ({handleInput}) => {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()
  const [input, setInput] = useState('')
  /*
const handleInput = (e) => {
    console.log(e)
  }
*/
  return (
    <React.Fragment>
      <SearchIcon className={classesGlobal.searchIcon} onClick={() => handleInput(input)} />
      <InputBase
        placeholder="Search ..…"
        className={classesGlobal.searchInput}
        onChange={(e) => setInput(e.target.value)}
      />
    </React.Fragment>
  )
}
export default SearchBar
