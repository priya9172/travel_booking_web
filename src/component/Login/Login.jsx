import React, { useState } from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword'; // Import the ForgotPassword component
import './Login.css';
import { FcGoogle } from "react-icons/fc";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    setIsLoggedIn(true);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add Google login logic here
  };

  return (
    <div className="login-container">
      {showForgotPassword ? (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      ) : (
        <center>
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="submit"
              value="Login"
            />
            <p className="forgot-password">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="forgot-password-link"
              >
                Forgot Password?
              </button>
            </p>
            <div className="google-login" onClick={handleGoogleLogin}>
              <FcGoogle />
              <span>Login with Google</span>
            </div>
          </form>
        </center>
      )}
    </div>
  );
}

export default Login;
