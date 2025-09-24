import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from "../components/LoginPage";
import Home from "../components/Home"
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Routers = () => {
  return (
    
    <Router>
      <Header />
      <Main />
      <Routes>
        <Route path="/LoginPage" element={ <LoginPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default Routers
