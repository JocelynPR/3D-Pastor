import React, { useEffect, useState, useRef } from "react";
import { TarjetaProductos } from './TarjetaProductos'
// Importa directamente el archivo JSON
import pokemonesData from "../../json/productos.json";


export default function FiltroTarjetaProducto({ nombreDelFiltro }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Utiliza los datos importados directamente
    setProducts(pokemonesData);
  }, []);

  function filtrarPorCategoria(nombreDelFiltro) {
    products.map((product, index) => {
      if (product.category == nombreDelFiltro) {
        <TarjetaProductos
          key={index}
          src={require("../../img/productos/" + product.image)}
          alt={product.title}
          nombreProducto={product.title}
          precio={"$" + (product.price).toFixed(2) + " MXN"}
        />
      }
    })
  }

  return (
    <>
      <section>
        <div className="fondo container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            {filtrarPorCategoria(nombreDelFiltro)}
          </div>
        </div>
      </section>
    </>
  );
}