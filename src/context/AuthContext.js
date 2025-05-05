import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  // src/context/AuthContext.js
  const login = ({ email, password }) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      localStorage.setItem('userLogged', JSON.stringify(userFound));
      setUser(userFound);  // <-- Esto actualiza el estado global
      return true;
    } else {
      alert('Correo o contraseña incorrectos');
      return false;
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem('user');
    setUser(null);
  };



  return (
    <AuthContext.Provider value={{ user, login, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
