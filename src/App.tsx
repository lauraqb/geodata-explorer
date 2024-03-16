import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './containers/login/Login'
import Signup from './containers/signup/Signup'
import Header from './components/header/Header'
import MapPage from './containers/mapPage/MapPage'
// import Home from './containers/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/geodata-explorer' element={<Login />} />
          <Route path='/geodata-explorer/map' element={<MapPage />} />
          <Route path='/geodata-explorer/login' element={<Login />} />
          <Route path='/geodata-explorer/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
