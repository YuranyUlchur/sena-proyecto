import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert('Las contraseñas no coinciden');

    // Simula guardado del usuario (o integra con API aquí)
    localStorage.setItem('user', JSON.stringify({ email, password }));

    // Redirige al login
    navigate('/login');
  };

  return (
    <div className='auth-body'>
      <div className='auth-box'>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder=" Confirma la contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </form>
      </div>
    </div>

  );
};

export default Register;
