// src/pages/Home.js
import React from 'react'; import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Items from '../../components/data/Items';
import Ubicacion from '../Location/Location';
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


    const chunkArray = (arr, size) => {
        const chunked = [];
        for (let i = 0; i < arr.length; i += size) {
            chunked.push(arr.slice(i, i + size));
        }
        return chunked;
    };

    const chunkedMenuItems = chunkArray(Items, 2); //

    return (
        <>
            <header className="hero-section d-none d-md-block">
                <div className="box-img">
                    <img className="hero-img" src="../Banner.jpg" alt="Banner de hamburguesa" />
                </div>
                <div className="hero-content">
                    <div class="banner-content">
                        <h1 class="title">1ERA PARADA</h1>
                        <p class="subtitle">
                            Porque sabemos que tu tiempo es valioso, te ofrecemos comida rápida sin comprometer el sabor ni la calidad.
                            ¡Disfruta cada bocado sin esperar!
                        </p>

                        <ul class="highlights">
                            <li>Ingredientes 100% frescos</li>
                            <li>Pedidos rápidos en línea</li>
                            <li>Promociones todos los días</li>
                        </ul>

                        <button class="button-menu">Ver Menú</button>
                    </div>

                </div>
            </header>


            <section className="home-container">
                <h1 className="promo-title">¡PROMOCIONES!</h1>
                {chunkedMenuItems.map((row, rowIndex) => (
                    <div className="home-row" key={rowIndex}>
                        {row.map((item, index) => (
                            <div className="home-card" key={index}>
                                <img src={item.imagen} alt={item.nombre} className="home-img" />
                                <div className="home-content">
                                    <h3>{item.nombre}</h3>
                                    <p>{item.descripcion}</p>
                                    <span className="home-price">${item.precio.toLocaleString()}</span>
                                    <button onClick={() => addToCart(item)} className="button-cart">
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>

                        ))}
                    </div>
                ))}
            </section>

            <Ubicacion />
        </>

    );
};

export default Home;