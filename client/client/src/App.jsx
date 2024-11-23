import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import HolaMundo from './pages/HolaMundo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HolaMundo />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;