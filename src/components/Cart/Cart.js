// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.precio, 0);

  const handleCheckout = () => {
    alert('Gracias por tu compra 🍔');
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="cart-container">
      <h2>🛒 Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.imagen} alt={item.nombre} />
                <div>
                  <h4>{item.nombre}</h4>
                  <p>{item.descripcion}</p>
                  <strong>${item.precio.toLocaleString()}</strong>
                </div>
                <button className="remove-btn" onClick={() => removeItem(index)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${getTotal().toLocaleString()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Pagar Ahora</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
