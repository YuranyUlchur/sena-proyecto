// src/pages/Menu.js
import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <section className="menu-container">
      <h1 className="menu-title">Nuestro Menú</h1>
      <div className="menu-grid">
        {/* Card 1 */}
        <div className="menu-card">
          <img src="/hamburguesa.jpg" alt="Hamburguesa Clásica" className="menu-img" />
          <div className="menu-content">
            <h3>Hamburguesa Clásica</h3>
            <p>Carne 100% de res, lechuga, tomate, queso cheddar.</p>
            <span className="menu-price">$12.000</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="menu-card">
          <img src="/salchi.jpg" alt="Salchipapas" className="menu-img" />
          <div className="menu-content">
            <h3>Salchipapas</h3>
            <p>Papas crujientes, salchichas artesanales, salsas especiales.</p>
            <span className="menu-price">$10.000</span>
          </div>
        </div>

        {/* Puedes seguir agregando más productos aquí */}
      </div>
    </section>
  );
};

export default Menu;
