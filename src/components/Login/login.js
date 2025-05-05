import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login({ email, password });
    if (success) {
      navigate('/');
    }
  };  


  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2 >Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='button-enter' onClick={handleLogin}>Ingresar</button>
        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </div>
  );
};

export default Login;