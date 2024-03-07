import { useNavigate } from 'react-router-dom'
import { NavbarComponent } from '../Components/Navbar'
import { useMovies } from '../CustomHooks/useMovies'
import { useState, useEffect } from 'react'
import { Skeleton } from '../Components/Skeleton'

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

export default function Movies() {
  const [loading, setLoading] = useState<boolean>(true)
  const [moviesData, setMoviesData] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)
  const [numPage, setNumPage] = useState<number>(1)
  const navigate = useNavigate()

  const { moviesData: fetchedMoviesData, error: fetchError } = useMovies(numPage)

  useEffect(() => {
    setLoading(true) // Set loading to true before fetching data
    if (fetchedMoviesData && fetchedMoviesData.length > 0) {
      setMoviesData((prevData) => [...prevData, ...fetchedMoviesData])
    }
    setLoading(false) // Set loading to false after fetching data
  }, [fetchedMoviesData])

  useEffect(() => {
    setError(fetchError)
    setLoading(false) // Set loading to false if there's an error
  }, [fetchError])

  const loadMoreMovies = () => {
    setNumPage((prevPage) => prevPage + 1)
  }

  const loadLessMovies = () => {
    if (numPage > 1) {
      setMoviesData([])
      setNumPage(1)
    }
  }

  const handleImageLoad = () => {
    setLoading(false) // Set loading to false after image loads
  }

  return (
    <section className="min-h-screen bg-[#333] text-white py-20">
      <NavbarComponent />

      <div className="grid gap-6 place-content-center">
        <h2 className="py-12 text-3xl font-bold text-center">Películas</h2>

        {error && <p>Error al cargar películas: {error}</p>}

        <aside className="grid grid-cols-6 gap-3">
          {moviesData.map((item) => (
            <div key={item.id} className="relative cursor-pointer group" onClick={() => navigate(`/movies/${item.id}`)}>
              {loading && <Skeleton />} {/* Render skeleton only when loading is true */}
              <img src={'https://image.tmdb.org/t/p/original' + item.poster_path} alt="" className="object-cover h-full rounded-md" width={250} height={250} loading="lazy" onLoad={handleImageLoad} onError={handleImageLoad} />
              <div className="inset-0 flex items-end justify-center py-6 transition-opacity duration-300 ease-in-out opacity-0 xl:bg-opacity-50 xl:bg-black xl:absolute xl:opacity-1 group-hover:opacity-100">
                <p className="text-lg font-bold tracking-wide text-center text-white border-b xl:border-none">{item.title}</p>
              </div>
            </div>
          ))}
        </aside>
        <div className="flex justify-center gap-4">
          {numPage > 1 && (
            <button className="px-6 py-2 font-semibold tracking-wide bg-red-500 rounded-md" onClick={loadLessMovies}>
              Ver menos
            </button>
          )}
          <button className="px-6 py-2 font-semibold tracking-wide bg-blue-500 rounded-md" onClick={loadMoreMovies}>
            Ver más
          </button>
        </div>
      </div>
    </section>
  )
}
