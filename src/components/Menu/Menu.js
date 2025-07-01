import React from 'react';
import './menu.css';
import menuItems from '../data/menuItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {
  const addToCart = (item) => {
    console.log("Añadido al carrito:", item);
    toast.success(`${item.nombre} añadido al carrito 🛒`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
  };

  return (
    <section className="menu-container">
      <ToastContainer />
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
                onClick={() => addToCart(item)}
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
