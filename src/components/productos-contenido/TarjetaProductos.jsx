import React from "react";
import AppButtonCard from "../addCardButton/AppButtonCard";
//import ClearCardButton from "../clearCardButton/ClearCardButton";

export const TarjetaProductos = ({ src, alt, nombreProducto, precio }) => {
  return (
    <div className="col-productos-contenido col col-centered">
      <div className="card-productos-contenido card shadow-sm">
        <section className="pt-5 pb-3 container">
          <div className="card-productos-contenido-img">
            <img className="contenido-img" src={src} alt={alt} />
          </div>
        </section>
        <div className="card-body-productos">
          <p className="texto-de-tarjeta-productos-contenido card-text align-items-center my-auto">
            {nombreProducto}
            <br />
            <small className="text-precio">{precio}</small>
          </p>
        </div>
        <div>
          <AppButtonCard />
        </div>
      </div>
    </div>
  );
};
