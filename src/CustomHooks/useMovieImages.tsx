import axios from 'axios'
import { useEffect, useState } from 'react'

interface ImageMovie {
  file_path: string
}

export const useMoviesImage = (id: string) => {
  const [moviesImages, setMoviesImages] = useState<Array<ImageMovie> | null>([])
  const [error, setError] = useState<string | null>(null)

  const idMovie = parseInt(id, 10)

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${idMovie}/images`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjI2ZDQ1YTcyMzg3NDRhMzAyZWNlZjk4Y2M4ZTlhMiIsInN1YiI6IjY1ZTc4N2U1Njg0MGNjMDE4Njc2NzE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73GHfZKpCOpnnn44BCoxa-OdfqnyLv8DIvJ8doF3g1A',
        },
      }

      try {
        const response = await axios.request(options)
        setMoviesImages(response.data.backdrops)
      } catch (error) {
        setError('Error al obtener las imagenes de las películas')
      }
    }

    fetchData()
  }, [idMovie])

  return { moviesImages, error }
}
