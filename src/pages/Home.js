// src/pages/Home.js
import React from 'react'; import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './Home.css';

const Home = () => {

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.nombre} añadido al carrito 🛒`);
  };

  return (
    <>
      <header className="hero-section  d-none d-md-block">
        <div className="box-img">
          <img className="hero-img" src="../banner.jpg" alt="Banner de hamburguesa" />
        </div>
        <div className="hero-content">
          <h1 className="title">1ERA PARADA</h1>
          <p>
            Porque sabemos que tu tiempo es valioso, te ofrecemos comida rápida sin comprometer el sabor ni la calidad. ¡Disfruta cada bocado sin esperar!
          </p>
          <button className="button-menu">Ver Menu</button>
        </div>
      </header>

      <section className="container img-section mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-12 col-md-4 mb-3">
            <div className="card menu-card">
              <img className="card-img-top img-fluid" src="../hamburguesa.jpg" alt="Hamburguesa 1" />
              <div className="card-body">
                <h5 className="card-title">Hamburguesa Clásica</h5>
                <p className="card-text">Deliciosa hamburguesa con carne 100% de res, acompañada de lechuga, tomate y queso cheddar.</p>
                <p className="card-text"><strong>Precio: $12.000</strong></p>
                <button
                  className="button-cart"
                  onClick={() =>
                    addToCart({
                      nombre: 'Hamburguesa Clásica',
                      precio: 12000,
                      imagen: '../hamburguesa.jpg'
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-4 mb-3">
            <div className="card menu-card">
              <img className="card-img-top img-fluid" src="../salchi.jpg" alt="Salchipapas" />
              <div className="card-body">
                <h5 className="card-title">Salchipapas</h5>
                <p className="card-text">Una deliciosa combinación de papas crujientes y salchichas artesanales con salsas especiales.</p>
                <p className="card-text"><strong>Precio: $10.000</strong></p>
                <button
                  className="button-cart"
                  onClick={() =>
                    addToCart({
                      nombre: 'salchipapa',
                      precio: 12000,
                      imagen: '../salchi.jpg'
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-4 mb-3">
            <div className="card  menu-card">
              <img className="card-img-top img-fluid" src="../papas2.jpg" alt="Salchipapas" />
              <div className="card-body">
                <h5 className="card-title">Papas a la francesa</h5>
                <p className="card-text">Crocantes papas a la francesa servidas con una variedad de salsas a elecion</p>
                <p className="card-text"><strong>Precio: $6.000</strong></p>
                <button
                  className="button-cart"
                  onClick={() =>
                    addToCart({
                      nombre: 'Papas a la francesa',
                      precio: 12000,
                      imagen: '../papas2.jpg'
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default Home;
