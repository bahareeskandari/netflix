import React from 'react'
import YouTube from 'react-youtube'

const YoutubeWrapper = () => {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
  const opts = {
    height: '394',
    width: '1000'
  }
  return (
    <div>
      <YouTube videoId='LE22Dn27sVw' opts={opts} onReady={(event) => _onReady(event)} />
    </div>
  )
}
export default YoutubeWrapper

/*

function searchByKeyword() {
  var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

  for(var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  }
}
*/
