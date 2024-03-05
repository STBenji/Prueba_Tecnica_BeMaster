import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import Movies from './Pages/ContentCategory'

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
    element: <Movies />,
  },
])
