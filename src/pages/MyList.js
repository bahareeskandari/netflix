// todo: vad är detta? ta bort om ej behövs
import React from 'react'
import YouTube from 'react-youtube'

const MyList = () => {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
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
    <div>
      <YouTube videoId='2g811Eo7K8U' opts={opts} onReady={(event) => _onReady(event)} />
    </div>
  )
}
export default MyList
