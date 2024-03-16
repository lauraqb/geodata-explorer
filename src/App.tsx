import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './containers/login/Login'
import Signup from './containers/signup/Signup'
import Header from './components/header/Header'
import MapPage from './containers/mapPage/MapPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/map' element={<MapPage />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
