import axios from 'axios'
import { useEffect, useState } from 'react'

interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const useMovies = () => {
  const [moviesData, setMoviesData] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 1,
          sort_by: 'popularity.desc',
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjI2ZDQ1YTcyMzg3NDRhMzAyZWNlZjk4Y2M4ZTlhMiIsInN1YiI6IjY1ZTc4N2U1Njg0MGNjMDE4Njc2NzE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73GHfZKpCOpnnn44BCoxa-OdfqnyLv8DIvJ8doF3g1A',
        },
      }

      try {
        const response = await axios.request(options)
        setMoviesData(response.data.results)
      } catch (error) {
        setError('Error al obtener las películas')
      }
    }

    fetchData()
  }, [])

  return { moviesData, error }
}
