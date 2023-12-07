import React from 'react'

export const TarjetaProductosPostres = ({src, alt, nombreProductoPostres, precioPostres}) => {
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
                    {nombreProductoPostres}<br />
                    <small class="text-precio">{precioPostres}</small>
                </p>
            </div>
             Boton
        </div>
    </div>
)
}
