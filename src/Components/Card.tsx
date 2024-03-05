import { useNavigate } from 'react-router-dom'
import { ActionIcon, DramaIcon, FictionIcon, SuspenseIcon, TerrorIcon } from './Icons'

const categories = [
  {
    title: 'Acción',
    image: <ActionIcon width="3rem" height="3rem" />,
    route: '/home/accion',
  },
  {
    title: 'Ciencia ficción',
    image: <FictionIcon width="3rem" height="3rem" />,
    route: '/home/ficcion',
  },
  {
    title: 'Terror',
    image: <TerrorIcon width="3rem" height="3rem" />,
    route: '/home/terror',
  },
  {
    title: 'Drama',
    image: <DramaIcon width="3rem" height="3rem" />,
    route: '/home/drama',
  },
  {
    title: 'Suspenso',
    image: <SuspenseIcon width="3rem" height="3rem" />,
    route: '/home/suspenso',
  },
]

export const Card = () => {
  const navigate = useNavigate()

  return categories.map((item, index) => (
    <div key={index} className="border-2 h-[15dvh] w-64 grid grid-rows-2 p-5 rounded-xl cursor-pointer flex-grow aspect-square" onClick={() => navigate(`${item.route}`)}>
      <i>{item.image}</i>
      <h3 className="text-2xl">{item.title}</h3>
    </div>
  ))
}
