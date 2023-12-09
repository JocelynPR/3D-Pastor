import React from 'react'

export const TarjetaProductosJuegos = ({src, alt, nombreProductoJuegos, precioJuegos}) => {
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
                    {nombreProductoJuegos}<br />
                    <small class="text-precio">{precioJuegos}</small>
                </p>
            </div>
             Boton
        </div>
    </div>
)
}
