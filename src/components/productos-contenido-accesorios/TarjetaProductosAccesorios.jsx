import React from 'react'

export const TarjetaProductosAccesorios = ({ src, alt, nombreProductoAccesorios, precioAccesorios }) => {
  return (
      <div className="col-productos-contenido col col-centered">
          <div className="card-productos-contenido card shadow-sm">
           <section className="pt-5 pb-3 container">
              <div className="card-productos-contenido-img">
                   <img className="contenido-img"
                  src={src}
                  alt={alt}
                   />
                 
              </div> 
              </section>
              <div className="card-body-productos">
                  <p className="texto-de-tarjeta-productos-contenido card-text align-items-center my-auto">
                      {nombreProductoAccesorios}<br />
                      <small class="text-precio">{precioAccesorios}</small>
                  </p>
              </div>
               Boton
          </div>
      </div>
  )
}
