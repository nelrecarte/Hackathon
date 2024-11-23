import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import puzzleLogo from '../assets/images/puzzle_logo.png'; // Adjust path based on your folder structure

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Correo:', correo);
    console.log('Password:', password);
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#252525',
      }}
    >
      {/* Container Div */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '400px', // Set width for the container
          padding: '20px',
          backgroundColor: '#333', // Slightly lighter background for the container
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Puzzle Logo */}
        <img
          src={puzzleLogo}
          alt="Puzzle Logo"
          style={{ width: '150px', marginBottom: '20px' }}
        />

        {/* Login Heading */}
        <h2 style={{ color: '#fff' }}>Login</h2>

        {/* Email Input */}
        <input
          type='email'
          placeholder='Correo'
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={{
            marginBottom: '10px',
            padding: '15px',
            width: '80%',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        />
        <br />

        {/* Password Input */}
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: '10px',
            padding: '15px',
            width: '80%',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        />
        <br />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            backgroundColor: '#363636',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
