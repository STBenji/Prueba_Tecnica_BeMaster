import { useEffect } from 'react'
import './App.css'
import Login from './Pages/Login'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const session = localStorage.getItem('user-data')
    if (session) {
      navigate('/home')
    } else {
      navigate('/')
    }
  }, [navigate])
  return (
    <>
      <Login />
    </>
  )
}

export default App
