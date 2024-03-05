import { useNavigate } from 'react-router-dom'
import { SettingIcon } from './Icons'

const itemsNavbar = ['Películas', 'Series', 'Documentales', 'Niños y familia', 'Mi lista']

export const NavbarComponent = () => {
  const navigate = useNavigate()

  return (
    <nav className="bg-[#333] text-white grid grid-cols-2 p-5 items-center border-b">
      <p className="font-bold">MediaStreamWeb</p>
      <ul className="flex gap-7 justify-end">
        {itemsNavbar.map((item) => (
          <li key={item} onClick={() => navigate(`/${item}`)} className="cursor-pointer flex items-center hover:border-b ">
            {item}
          </li>
        ))}
        <li className="flex items-center cursor-pointer">
          <SettingIcon width="1.5em" height="1.5em" />
        </li>
        <li className="text-white bg-red-500 p-2 rounded-xl cursor-pointer">Cerrar sesión</li>
      </ul>
    </nav>
  )
}
