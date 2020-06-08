import React, { useContext, useEffect } from 'react'
import { popularTvsShows, topRatedTvShows } from '../Util/Constants'
import MediaDisplayer from '../components/MediaDisplayer'
import { UserContext } from '../components/UserContext'
require('es6-promise').polyfill()
require('isomorphic-fetch')

const TVShows = () => {
  const { tvShows, setTvShows } = useContext(UserContext)

  useEffect(() => {
    const fetchTvShows = async () => {
      const popularTvShows = await fetch(popularTvsShows)
      const topRatedTVSHows = await fetch(topRatedTvShows)

      const popularTvSHowsData = await popularTvShows.json()
      const topRatedTvShowsData = await topRatedTVSHows.json()

      const popular = await popularTvSHowsData.results.map((tvShow) => {
        return {
          original_title: tvShow.original_title,
          poster_path: tvShow.poster_path,
          id: tvShow.id,
          overview: tvShow.overview
        }
      })

      const topRated = await topRatedTvShowsData.results.map((tvShow) => {
        return {
          original_title: tvShow.original_title,
          poster_path: tvShow.poster_path,
          id: tvShow.id,
          overview: tvShow.overview
        }
      })

      await setTvShows(topRated.concat(popular))
    }
    fetchTvShows()
  }, [])
  return (
    <div>
      {' '}
      <MediaDisplayer media={tvShows} />
    </div>
  )
}
export default TVShows
