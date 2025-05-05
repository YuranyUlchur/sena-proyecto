// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
