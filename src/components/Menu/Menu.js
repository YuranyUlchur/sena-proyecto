import React from 'react';
import './menu.css';
import menuItems from '../data/menuItems';

const Menu = () => {
  const addToCart = (item) => {
    console.log("Añadido al carrito:", item);
  };

  return (
    <section className="menu-container">
      <h1 className="menu-title">Nuestro Menú</h1>
      <div className="menu-grid">
        {menuItems?.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.imagen} alt={item.nombre} className="menu-img" />
            <div className="menu-content">
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
              <span className="menu-price">${item.precio.toLocaleString()}</span>
              <button
                className="button-cart-menu"
                onClick={() =>
                  addToCart({
                    nombre: item.nombre,
                    precio: item.precio,
                    imagen: item.imagen
                  })
                }
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
