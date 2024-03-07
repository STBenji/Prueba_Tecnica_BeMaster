import { useNavigate } from 'react-router-dom'
import { MenuIcon, SettingIcon } from './Icons'
import { useState } from 'react'

const itemsNavbar = [
  { name: 'Películas', route: 'movies' },
  { name: 'Series', route: 'series' },
  { name: 'Mis favoritos', route: 'favorite' },
]

export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user-data')
    navigate(`/`)
  }

  return (
    <nav className={`bg-[#333] text-white grid xl:grid-cols-2 p-5 items-center border-b fixed top-0 w-full z-10 xl:${() => setIsOpen(false)}`}>
      <div className="flex items-center justify-between w-full">
        <p className="font-bold">MediaStreamWeb</p>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none xl:hidden">
          <MenuIcon width="2em" height="2em" />
        </button>
      </div>
      <ul className="justify-end hidden gap-2 xl:flex">
        <li className="flex items-center px-4 cursor-pointer hover:border-b text-wrap" onClick={() => navigate(`/home`)}>
          Categorías
        </li>
        {itemsNavbar.map((item) => (
          <li key={item.name} onClick={() => navigate(`/${item.route}`)} className="flex items-center px-4 cursor-pointer hover:border-b text-wrap">
            {item.name}
          </li>
        ))}
        <li className="flex items-center cursor-pointer">
          <SettingIcon width="1.5em" height="1.5em" />
        </li>
        <li className="p-2 text-white bg-red-500 cursor-pointer rounded-xl" onClick={logout}>
          Cerrar sesión
        </li>
      </ul>
      <div className="grid xl:hidden">
        <ul className={`bg-[#333] text-white transition-all duration-300 ${isOpen ? 'h-screen' : 'h-0'} overflow-hidden`}>
          <li className="p-3 cursor-pointer" onClick={() => navigate(`/home`)}>
            Categorías
          </li>
          {itemsNavbar.map((item) => (
            <li key={item.name} className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate(`/${item.route}`)}>
              {item.name}
            </li>
          ))}
          <li className="p-3 text-white bg-red-500 cursor-pointer rounded-xl" onClick={logout}>
            Cerrar sesión
          </li>
        </ul>
      </div>
    </nav>
  )
}
