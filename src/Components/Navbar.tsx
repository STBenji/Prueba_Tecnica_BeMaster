import { useNavigate } from 'react-router-dom'
import { MenuIcon, SettingIcon } from './Icons'
import { useState } from 'react'

const itemsNavbar = ['Películas', 'Series', 'Documentales', 'Niños y familia', 'Mi lista']

export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className={`bg-[#333] text-white grid xl:grid-cols-2 p-5 items-center border-b fixed top-0 w-full z-10 xl:${() => setIsOpen(false)}`}>
      <div className="flex items-center justify-between w-full">
        <p className="font-bold">MediaStreamWeb</p>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none xl:hidden">
          <MenuIcon width="2em" height="2em" />
        </button>
      </div>
      <ul className="justify-end hidden gap-2 xl:flex">
        {itemsNavbar.map((item) => (
          <li key={item} onClick={() => navigate(`/${item}`)} className="flex items-center px-6 cursor-pointer hover:border-b text-wrap">
            {item}
          </li>
        ))}
        <li className="flex items-center cursor-pointer">
          <SettingIcon width="1.5em" height="1.5em" />
        </li>
        <li className="p-2 text-white bg-red-500 cursor-pointer rounded-xl">Cerrar sesión</li>
      </ul>
      <div className="grid xl:hidden">
        <ul className={`bg-[#333] text-white transition-all duration-300 ${isOpen ? 'h-screen' : 'h-0'} overflow-hidden`}>
          {itemsNavbar.map((item) => (
            <li key={item} onClick={() => navigate(`/${item}`)} className="p-3 cursor-pointer hover:bg-gray-700">
              {item}
            </li>
          ))}
          <li className="p-3 text-white bg-red-500 cursor-pointer rounded-xl">Cerrar sesión</li>
        </ul>
      </div>
    </nav>
  )
}
