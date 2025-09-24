import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "../components/Home"
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { LoginPage } from '../components/LoginPage'

const Routers = () => {
  return (
    
    <Router>
      <Header />
      
      <Routes>
        <Route path="/LoginPage" element={ <LoginPage/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default Routers