//TODO: translate-left on menupage (for menu titles)
// import logo from './logo.svg'
// import './App.css'
import React from 'react'
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MenuPage from './Components/MenuPage'
import Work from './Components/Work'
import Profile from './Components/Profile'
import Contact from './Components/Contact'
import Shop from './Components/Shop'

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/work' element={<Work />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
