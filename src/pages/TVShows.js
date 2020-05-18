import React, { useContext } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'

import { UserContext } from '../components/UserContext'

const TVShows = () => {
  const { tvShows, setTvShows } = useContext(UserContext)

  const fetchTvShows = async () => {
    const popularTvShows = await fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
    )
    const topRatedTVSHows = await fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
    )

    const popularTvSHowsData = await popularTvShows.json()
    const topRatedTvShowsData = await topRatedTVSHows.json()

    const popular = popularTvSHowsData.results

    const topRated = topRatedTvShowsData.results

    setTvShows(topRated.concat(popular))
  }
  return <MediaDisplayer media={tvShows} fetchMedia={fetchTvShows} />
}
export default TVShows
