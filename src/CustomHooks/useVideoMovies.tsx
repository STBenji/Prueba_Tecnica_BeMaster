import axios from 'axios'
import { useEffect, useState } from 'react'

interface MovieVideo {
  moviesVideo: Array<VideoJSON> | null
  error: string | null
}

interface VideoJSON {
  id: number
  name: string
  key: string
}

export const useVideosMovies = (id: string): MovieVideo => {
  const [moviesVideo, setMoviesVideo] = useState<Array<VideoJSON> | null>([])
  const [error, setError] = useState<string | null>(null)

  const idMovie = parseInt(id, 10)

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${idMovie}/videos`,
        params: {
          language: 'es',
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjI2ZDQ1YTcyMzg3NDRhMzAyZWNlZjk4Y2M4ZTlhMiIsInN1YiI6IjY1ZTc4N2U1Njg0MGNjMDE4Njc2NzE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73GHfZKpCOpnnn44BCoxa-OdfqnyLv8DIvJ8doF3g1A',
        },
      }

      try {
        const response = await axios.request(options)
        setMoviesVideo(response.data.results)
      } catch (error) {
        setError('Error al obtener el video de la película.')
      }
    }

    fetchData()
  }, [idMovie])

  return { moviesVideo, error }
}
