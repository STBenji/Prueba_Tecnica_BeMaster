import { Card } from '../Components/Card'
import { NavbarComponent } from '../Components/Navbar'

export default function Home() {
  return (
    <section className="bg-[#333] text-white min-h-screen">
      <NavbarComponent />
      <section className="mt-48">
        <h3 className="text-center mb-10 text-4xl font-bold">Categorías</h3>
        <article className="flex flex-wrap gap-4 w-3/6 mx-auto">
          <Card />
        </article>
      </section>
    </section>
  )
}
