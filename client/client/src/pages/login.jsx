import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CicloPlanillas from '../components/CicloPlanillas';
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#252525' }}>
            <h2 style={{ color: '#fff' }}>Login</h2>
            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                style={{ marginBottom: '10px', padding: '15px', width: '300px', backgroundColor: '#1e1e1e', color: '#fff', border: 'none', borderRadius: '4px' }}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: '10px', padding: '15px', width: '300px', backgroundColor: '#1e1e1e', color: '#fff', border: 'none', borderRadius: '4px' }}
            />
            <br/>
            <button onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: '#363636', color: '#fff', border: 'none', borderRadius: '4px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>Login</button>
            
            <CicloPlanillas/>
        </div>
    );
};

export default Login;