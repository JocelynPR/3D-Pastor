import React, { useEffect, useState } from "react";
import { TarjetaProductos } from './TarjetaProductos'

import pokemonesData from "../../json/productos.json";

export default function FiltroTarjetaProducto({ nombreDelFiltro }) {

  const [currentPage, setCurrentPage] = useState(0); // Cambiado a 0 para que el primer clic sea la primera página
  const productsPerPage = 12; // Cantidad de productos por página

  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setProducts(pokemonesData);
  }, []);

  let filteredProducts = products;
  if (nombreDelFiltro !== "Todo") { filteredProducts = products.filter(product => product.category === nombreDelFiltro); }

  function filtrarPorCategoria() {
    return (
      filteredProducts
        .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
        .map((product) => (
          <TarjetaProductos
            key={product.id}
            id={product.id}
            src={require("../../img/productos/" + product.image)}
            alt={product.title}
            nombreProducto={product.title}
            precio={"$" + (product.price).toFixed(2) + " MXN"}
            onAddToCartClick={(infoProducto) => handleCarAddClick({ ...infoProducto, ...product })}

          />
        ))
    );
  }
  const handleCarAddClick = (producto) => {
    // Añade el producto al carrito
    setCarrito([...carrito, producto]);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <section>
        <div className="fondo container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            {filtrarPorCategoria(nombreDelFiltro)}
          </div>
          <br />
          <div>
            <button className="button-previous btn btn-outline-dark" onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 0}>
              Anterior
            </button>
            <button className="button-next btn btn-outline-dark" onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === totalPages - 1}>
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
