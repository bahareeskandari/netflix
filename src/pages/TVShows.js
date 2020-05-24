import React, { useContext, useEffect } from 'react'
import MediaDisplayer from '../components/MediaDisplayer'

import { UserContext } from '../components/UserContext'

const TVShows = () => {
  const { tvShows, setTvShows } = useContext(UserContext)

  useEffect(() => {
    const fetchTvShows = async () => {
      const popularTvShows = await fetch(
        'https://api.themoviedb.org/3/tv/popular?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
      )
      const topRatedTVSHows = await fetch(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1'
      )

      const popularTvSHowsData = await popularTvShows.json()
      const topRatedTvShowsData = await topRatedTVSHows.json()

      const popular = await popularTvSHowsData.results.map(tvShow => {
        return {
          original_title: tvShow.original_title,
          poster_path: tvShow.poster_path,
          id: tvShow.id,
          overview: tvShow.overview,
          valueOfHeart: false,
          rating: null,
          comments: []
        }
      })

      const topRated = await topRatedTvShowsData.results.map(tvShow => {
        return {
          original_title: tvShow.original_title,
          poster_path: tvShow.poster_path,
          id: tvShow.id,
          overview: tvShow.overview,
          valueOfHeart: false,
          rating: null,
          comments: []
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
