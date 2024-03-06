import { Card } from '../Components/Card'
import { NavbarComponent } from '../Components/Navbar'

export default function Home() {
  return (
    <section className="bg-[#333] text-white min-h-screen ">
      <NavbarComponent />
      <section className="relative grid">
        <h3 className="text-4xl font-bold text-center mt-28 md:mt-48">Categorías</h3>
        <article className="flex flex-wrap w-3/6 gap-4 mx-auto py-14">
          <Card />
        </article>
      </section>
    </section>
  )
}
