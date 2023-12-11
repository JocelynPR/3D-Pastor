import React, { useEffect, useState } from "react";
import "../../styles/productos-contenido/Productos.css";
import { TarjetaProductos } from "../../components/productos-contenido/TarjetaProductos";

// Importa directamente el archivo JSON
import pokemonesData from "../../json/productos.json";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Utiliza los datos importados directamente
    setProducts(pokemonesData);
  }, []);

  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light">
            <strong>Productos</strong>
          </h1>
        </section>

        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {products.map((product, index) => (
                <TarjetaProductos
                  key={index}
                  src={require("../../img/productos/" + product.image)}
                  alt={product.title}
                  nombreProducto={product.title}
                  precio={"$" + product.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
