import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
  return (
    <header id="header">
        <nav className="navbar">
            <a href="#" className="logo">EduBridge</a>
            <ul>
                <li><a href="/Home">Home</a>
                </li>
                <li><a href="#">Contact</a>
                </li>
            </ul>
            <div className="account">
                <a href="http://localhost:5173/LoginPage">Login</a>
                <a href="#" className="btn-join">Join US <FaArrowRight /></a>
            </div>
        </nav>
    </header>
  )
}