import React from 'react'
import Product from './components/Product'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import Hero from './Hero'

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' exact element={<Nav><Product /></Nav>}></Route>
      <Route path='/product' element={<Nav><Product /></Nav>}></Route>
    </Routes>
    
  </Router>
  )
}

export default App
