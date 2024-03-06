import { useParams } from 'react-router-dom'
import { NavbarComponent } from '../Components/Navbar'
import { useMoviesID } from '../CustomHooks/useMoviesID'
import { useVideosMovies } from '../CustomHooks/useVideoMovies'

export default function ContentDetails() {
  const { id } = useParams()
  const { moviesDataId } = useMoviesID(id!)
  const { moviesVideo } = useVideosMovies(id!)

  return (
    <section className="min-h-auto bg-[#333] text-white  py-6 md:min-h-screen grid xl:place-content-center md:place-items-center gap-12">
      <NavbarComponent />
      <article className="grid gap-10 px-6 mt-24 xl:grid-cols-2 md:max-w-[60%]">
        <div>
          <img src={'https://image.tmdb.org/t/p/original' + moviesDataId?.poster_path} alt="" className="object-cover rounded-xl md:max-w-[90%]" loading="lazy" width={400} height={270} />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <h2 className="text-2xl font-bold xl:text-4xl">{moviesDataId?.title}</h2>
          <p className="text-gray-400">{moviesDataId?.overview}</p>
          <h2 className="text-xl font-semibold xl:text-3xl">Generos</h2>
          <div className="flex gap-5">
            {moviesDataId?.genres.map((item) => (
              <p className="px-5 py-2 bg-blue-600 rounded-xl" key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </article>
      <h2 className="px-6 text-3xl font-bold">Trailers</h2>
      <section className="flex flex-wrap justify-center gap-4">
        {Array.isArray(moviesVideo) && moviesVideo.length > 0 ? moviesVideo.slice(0, 3).map((item) => <iframe title={item.name} className="w-[370px] h-[400px] md:w-[550px]" src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0" allowFullScreen key={item.id}></iframe>) : <p className="font-bold tracking-widest text-2zxl">La película no tiene videos disponibles.</p>}
      </section>
    </section>
  )
}
