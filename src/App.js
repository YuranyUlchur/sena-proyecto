import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import Home from './pages/Home';
import Menu from './components/Menu/Menu';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Cart from './components/Cart/Cart';

const App = () => {
  const { user } = useAuth(); // obtiene el usuario actual

  return (

    <AuthProvider>
      {user && <Navbar />} {/* Solo se muestra si hay sesión */}

      <Routes>
        {/* Si no está logueado, redirigir a login */}
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </AuthProvider>

  );
};

export default App;
