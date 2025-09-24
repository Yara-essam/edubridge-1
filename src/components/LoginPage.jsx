import React from 'react'
import { Link } from "react-router-dom";


 export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-header">
        <h1>Login page</h1>
        <p><Link to="/Home">Home</Link> / Login</p>
      </div>
      <div className="login-container">
        <form className="login-form">
          <label>
            <span className="dot" /> Username or Email
          </label>
          <input type="text" placeholder="Username or Email" />

          <label>
            <span className="dot" /> Password
          </label>
          <input type="password" placeholder="Password" />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button className="login-btn">Login now</button>
        </form>

        <div className="social-login">
          <p>Or login with</p>
          <button className="facebook-btn">
            <i className="fab fa-facebook-f"></i> Login with facebook
          </button>
          <button className="twitter-btn">
            <i className="fab fa-twitter"></i> Login with twitter
          </button>
          <p className="signup-text">
            Not yet registered? <Link to="/signup">Signup</Link> here
          </p>
        </div>
      </div>
    </div>
  );
};

