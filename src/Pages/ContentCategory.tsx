import { useParams } from 'react-router-dom'
import { useMovies } from '../CustomHooks/useMovies'
import { useMemo } from 'react'

const genreMovie: Record<string, number> = {
  accion: 28,
  ficcion: 878,
  terror: 27,
  drama: 18,
  suspenso: 53,
}

export default function Movies() {
  const { moviesData } = useMovies()
  const { categoria } = useParams()

  const genreID = genreMovie[categoria ?? 'accion']
  const filterMovie = useMemo(() => moviesData.filter((pelicula) => pelicula.genre_ids.includes(genreID)), [moviesData, genreID])

  return (
    <section className="bg-[#333] min-h-screen text-white flex items-center justify-center flex-col">
      <h3 className="text-center mb-10 text-4xl font-bold">Películas de {categoria}</h3>
      <div className="grid grid-cols-5 gap-4">
        {filterMovie.map((item) => (
          <div key={item.id}>
            <img src={'https://image.tmdb.org/t/p/original' + item.poster_path} alt="" className="rounded-md" width={250} height={250} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
