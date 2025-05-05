// src/pages/Ubicacion.js
import React from 'react';
import './ubicacion.css';

const Ubicacion = () => {
  return (
    <section className="ubicacion-container">
      <div className="ubicacion-info">
        <h1>¿Dónde nos encontramos?</h1>
        <p>¡Ven a visitarnos y disfruta de nuestros platos en un ambiente acogedor y delicioso!</p>
        <p><strong>Dirección:</strong> Calle 123 #45-67, Barrio Gourmet, Ciudad Sabor</p>
        <p><strong>Teléfono:</strong> (123) 456-7890</p>
        <p><strong>Horario:</strong> Lunes a Domingo - 12:00 p.m. a 10:00 p.m.</p>
      </div>

      <div className="mapa-box">
        <iframe
          title="Mapa del restaurante"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9443780140564!2d-74.081753!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99edb40f47ab%3A0x25744f54f6214d85!2sPlaza%20de%20Bol%C3%ADvar%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1615903801305!5m2!1ses!2sco"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Ubicacion;
