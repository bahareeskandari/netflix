// todo: vad är detta? ta bort om ej behövs
import React, { useState } from 'react'

import YoutubeWrapper from '../components/YoutubeWrapper'

const MyList = () => {
  const [urlSearch, setUrlSearch] = useState('LE22Dn27sVw')
  const keyYoutube = 'AIzaSyAfWZGuXaHJDi2HXN8c9j_W1nATC6JI8nM'
  const urlYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keyYoutube}&q=${urlSearch}%20trailer`
  const searchYoutube = () => {
    fetch(urlYoutube).then(res => res.json()).then(r => console.log(r.items[0].id.videoId))
  }

  return (
    <div>
      <button onClick={searchYoutube}>add</button>
      <YoutubeWrapper urlSearch={urlSearch} />
    </div>
  )
}
export default MyList
