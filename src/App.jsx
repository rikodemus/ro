import Home from './component/Home'
import Pricing from './component/Pricing'
import Login from './component/Login'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route path='/Pricing' element={<Pricing/>} />
   <Route path='/Login' element={<Login/>} />
        </Routes>
   </Router>
  )
}

export default App
