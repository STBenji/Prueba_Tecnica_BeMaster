import { useNavigate, useParams } from 'react-router-dom'
import { useMovies } from '../CustomHooks/useMovies'
import { useMemo, useState, useEffect } from 'react'
import { ArrowIcon } from '../Components/Icons'
import { NavbarComponent } from '../Components/Navbar'
import { Skeleton } from '../Components/Skeleton'

const genreMovie: Record<string, number> = {
  accion: 28,
  ficcion: 878,
  terror: 27,
  drama: 18,
  suspenso: 53,
}

export default function ContentCategory() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [itemsPerPage, setItemsPerPage] = useState(6)

  const { moviesData } = useMovies()
  const { categoria } = useParams()

  const navigate = useNavigate()

  const genreID = genreMovie[categoria ?? 'accion']
  const filterMovie = useMemo(() => moviesData.filter((pelicula) => pelicula.genre_ids.includes(genreID)), [moviesData, genreID])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage >= filterMovie.length ? filterMovie.length - 1 : prevIndex + 1
      return newIndex
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1 < 0 ? filterMovie.length - 1 : prevIndex - 1
      return newIndex
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(6)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="bg-[#333] min-h-screen text-white flex items-center justify-center flex-col">
      <NavbarComponent />
      <h3 className="mb-10 text-4xl font-bold text-center">Películas de {categoria}</h3>
      <div className="flex gap-4">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="cursor-pointer">
          <ArrowIcon width="4em" height="4em" className="rotate-[-90deg]" />
        </button>
        <div className="grid grid-flow-col gap-4">
          {filterMovie.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="relative cursor-pointer group" onClick={() => navigate(`/movies/${item.id}`)}>
              {loading && <Skeleton />}
              <img src={'https://image.tmdb.org/t/p/original' + item.poster_path} alt="" className="object-cover h-full rounded-md" width={250} height={250} loading="lazy" onLoad={() => setLoading(false)} onError={() => setLoading(false)} />
              <div className="inset-0 flex items-end justify-center py-6 transition-opacity duration-300 ease-in-out opacity-0 xl:bg-opacity-50 xl:bg-black xl:absolute xl:opacity-1 group-hover:opacity-100">
                <p className="text-lg font-bold tracking-wide text-center text-white border-b xl:border-none">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= filterMovie.length} className="cursor-pointer">
          <ArrowIcon width="4em" height="4em" className="rotate-90" />
        </button>
      </div>
    </section>
  )
}
