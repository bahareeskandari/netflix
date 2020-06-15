import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import fetch from 'node-fetch'
require('es6-promise').polyfill()
require('isomorphic-fetch')

let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = process.env
} else {
  Keys = require('../Keys.json')
}

const StarRating = () => {
  const [urlSearch, setUrlSearch] = useState('')
  const som = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${Keys.REACT_APP_APIKEYYOUTUBE}&q=inception%20trailer`)
      .then((res) => res.json())
      .then((r) => setUrlSearch('2g811Eo7K8U'))
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  return (
    <>
      <button onClick={() => som()}>add</button>
      <YouTube videoId={urlSearch} opts={opts} />
    </>
  )
}
export default StarRating
