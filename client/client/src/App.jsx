import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import HolaMundo from './pages/HolaMundo';
import AgregarEmpleado from './pages/AgregarEmpleado';
import Deducciones from './pages/Deducciones';
import Pagar from './pages/Pagar';
import ConfigurarCiclo from './pages/ConfigurarCiclo';
import VerEmpleados from './pages/VerEmpleados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HolaMundo />} />
        <Route path="/ciclos-de-planilla" element={<ConfigurarCiclo />} />
        <Route path="/deducciones" element={<Deducciones />} />
        <Route path="/agregar-empleado" element={<AgregarEmpleado />} />
        <Route path="/Pagar" element={<Pagar />} />
        <Route path="/Ver-Empleados" element={<VerEmpleados />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;