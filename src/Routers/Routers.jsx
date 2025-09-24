import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Home from "../components/Home"

const Routers = () => {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </BrowserRouter> 
  )
}

export default Routers
