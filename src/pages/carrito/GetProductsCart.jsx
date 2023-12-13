import React, { useEffect, useState, useRef } from "react";
import pokemonesData from "../../json/productos.json";
import { TarjetaProductos } from "../../components/productos-contenido/TarjetaProductos";

export default function GetProductsCart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(pokemonesData);
    }, []);

    return (
        <>
            <section>
                <div className="fondo container">
                    {products.map((product, index) => (
                        <TarjetaProductos
                            key={index}
                            src={require("../../img/productos/" + product.image)}
                            alt={product.title}
                            nombreProducto={product.title}
                            precio={"$" + (product.price).toFixed(2) + " MXN"}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

//