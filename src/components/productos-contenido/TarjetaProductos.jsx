import React from "react";
import AppButtonCard from "../addCardButton/AppButtonCard";
//import ClearCardButton from "../clearCardButton/ClearCardButton";

export const TarjetaProductos = (prop) => {
  console.log(prop.id);
  return (
    <div className="col-productos-contenido col col-centered">
      <div className="card-productos-contenido card shadow-sm">
        <section className="pt-5 pb-3 container">
          <div className="card-productos-contenido-img">
            <img className="contenido-img" src={prop.src} alt={prop.alt} />
          </div>
        </section>
        <div className="card-body-productos">
          <p className="texto-de-tarjeta-productos-contenido card-text align-items-center ">
            {prop.nombreProducto}
            <br />
            <small className="text-precio">{prop.precio}</small>
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 g-1  align-items-center contenedor">
          <AppButtonCard buttonIdAnadir={4} />
        </div>
      </div>
    </div>
  );
};
