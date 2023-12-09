import React from 'react'

export const TarjetaProductosOtros = ({src, alt, nombreProductoOtros, precioOtros}) => {
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
                    {nombreProductoOtros}<br />
                    <small class="text-precio">{precioOtros}</small>
                </p>
            </div>
             Boton
        </div>
    </div>
)
}