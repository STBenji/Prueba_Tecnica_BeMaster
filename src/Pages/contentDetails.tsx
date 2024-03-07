import { useParams } from 'react-router-dom'
import { NavbarComponent } from '../Components/Navbar'
import { useMoviesID } from '../CustomHooks/useMoviesID'
import { useVideosMovies } from '../CustomHooks/useVideoMovies'
import { useMoviesImage } from '../CustomHooks/useMovieImages'

export default function ContentDetails() {
  const { id } = useParams()
  const { moviesDataId } = useMoviesID(id!)
  const { moviesVideo } = useVideosMovies(id!)
  const { moviesImages } = useMoviesImage(id!)

  return (
    <section className="min-h-auto bg-[#333] text-white  py-6 md:min-h-screen grid xl:place-content-center md:place-items-center gap-12 items-center">
      <img src={'https://image.tmdb.org/t/p/original' + moviesDataId?.backdrop_path} alt="" className="absolute hidden object-cover w-full h-screen md:flex top-20 opacity-20 blur-sm" loading="lazy" />
      <NavbarComponent />
      <article className="grid gap-10 px-6 mt-24 xl:grid-cols-2 md:max-w-[60%] h-full xl:h-screen place-items-center">
        <div className="">
          <img src={'https://image.tmdb.org/t/p/original' + moviesDataId?.poster_path} alt="" className="z-20 object-cover shadow-md shadow-slate-100 rounded-xl md:max-w-full md:max-h-full" loading="lazy" width={400} height={200} />
        </div>
        <div className="grid gap-10">
          <h2 className="text-2xl font-bold xl:text-4xl">{moviesDataId?.title}</h2>
          <p className="text-gray-200">{moviesDataId?.overview}</p>
          <h2 className="text-xl font-semibold xl:text-3xl">Generos</h2>
          <div className="flex gap-5">
            {moviesDataId?.genres.map((item) => (
              <p className="px-5 py-2 bg-blue-600 rounded-xl text-wrap" key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </article>
      <h2 className="px-6 text-3xl font-bold text-center">Trailers</h2>
      <section className="flex flex-wrap justify-center h-full gap-4">
        {Array.isArray(moviesVideo) && moviesVideo.length > 0 ? moviesVideo.slice(0, 3).map((item) => <iframe title={item.name} className="w-[370px] h-[400px] md:w-[550px]" src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0" allowFullScreen key={item.id}></iframe>) : <p className="font-bold tracking-widest text-2zxl">La película no tiene videos disponibles.</p>}
      </section>
      <h2 className="px-6 text-3xl font-bold text-center">Galería</h2>
      <section className="flex flex-wrap justify-center flex-grow gap-4 px-12">
        {Array.isArray(moviesImages) && moviesImages.length > 0 ? (
          moviesImages.slice(0, 6).map((item, index) => <img key={index} src={'https://image.tmdb.org/t/p/original' + item.file_path} alt="" width={350} height={300} className="flex-grow rounded-lg hover:scale-[1.03] transition-scale ease-in delay-75" />)
        ) : (
          <p className="text-2xl font-bold tracking-widest">La película no tiene videos disponibles.</p>
        )}
      </section>
    </section>
  )
}
