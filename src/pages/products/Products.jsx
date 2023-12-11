import React, { useEffect, useState } from "react";
import "../../styles/productos-contenido/Productos.css";
import { TarjetaProductos } from "../../components/productos-contenido/TarjetaProductos";

const urlLocal = "./pokemones.json";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsUsingAsyncAwait(urlLocal);
  }, []);

  const getProductsUsingAsyncAwait = async (url) => {
    try {
      const response = await fetch(url);
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light">
            <strong>Productos</strong>
          </h1>
        </section>

        {/* Inicio de: Tarjetas con los nombres de los productos */}
        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {/* Renderizar productos obtenidos del archivo local */}
              {products.map((product, index) => (
                <TarjetaProductos
                  key={index}
                  src={product.image}
                  alt={product.title}
                  nombreProducto={product.title}
                  precio={"$99.99"}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Final de: Tarjetas con los nombres de los integrantes del proyecto */}
      </main>
    </>
  );
}
