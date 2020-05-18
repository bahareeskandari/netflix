import React, { useState } from 'react'
import { createGlobalStyles } from '../Util/GlobalStyles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ handleInput }) => {
  const classesGlobal = createGlobalStyles()
  const [input, setInput] = useState('')

  return (
    <>
      <SearchIcon className={classesGlobal.searchIcon} onClick={() => handleInput(input)} />
      <InputBase
        placeholder='Search ..…'
        className={classesGlobal.searchInput}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  )
}
export default SearchBar
