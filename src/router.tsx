import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import ContentCategory from './Pages/ContentCategory'
import ContentDetails from './Pages/contentDetails'
import Movies from './Pages/Movies'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/home/:categoria',
    element: <ContentCategory />,
  },
  {
    path: '/movies/:id',
    element: <ContentDetails />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
])
