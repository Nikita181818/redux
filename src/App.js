import React from 'react'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar.jsx'

const App = () => {
  return (
   <>
    <Navbar/>
   <Routes> 
    <Route path='/'  element={<Home/>}/>
    <Route path='/cart' element={<Cart/>} />
   </Routes>
   </>
  )
}

export default App
