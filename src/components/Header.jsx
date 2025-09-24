import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header id="header">
        <nav className="navbar">
            <a href="#" className="logo">EduBridge</a>
            <ul>
                <li><a href="#">Home</a>
                </li>
                <li><a href="#">Contact</a>
                </li>
            </ul>
            <div className="account">
                <Link to={"/LoginPage"}>
                <button className="btn-login">Login</button>
                </Link>
                <a href="#" className="btn-join">Join US <FaArrowRight /></a>
            </div>
        </nav>
    </header>
  )
}