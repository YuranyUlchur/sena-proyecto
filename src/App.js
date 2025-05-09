import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import Home from './components/pages/Home';
import Menu from './components/Menu/Menu';
import Location from './components/Location/Location';
import Cart from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { useAuth } from './context/AuthContext';


const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}

      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ubicacion" element={<Location />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;
