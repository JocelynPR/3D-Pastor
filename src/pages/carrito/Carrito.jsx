// Carrito.jsx
import React from "react";
import "../../styles/buyButton/buyButton.css";
import "../../styles/carrito/carrito.css";
import BuyButton from "../../components/buyButton/BuyButton.jsx";
import TablaCarrito from "./TablaCarrito.jsx"
import CleanCardButton from "../../components/clearCardButton/ClearCardButton.jsx";

const Carrito = () => {

    const productos = [
        { nombre: 'Pokémon Coup', precio: 250.00, cantidad: 2, subtotal: 500.00 },
        { nombre: 'Pokélate', precio: 100.00, cantidad: 1, subtotal: 100.00 },
        // Agrega más productos según sea necesario
    ];


    const calcularTotalPorProducto = (producto) => {
        return (producto.precio * producto.cantidad);
    };

    const calcularTotalGeneral = () => {
        let totalGeneral = 0;
        productos.forEach((producto) => {
            totalGeneral += calcularTotalPorProducto(producto);
        });
        return totalGeneral.toFixed(2);
    };

    return (
        <>
            <main id="main-carrito-contenido">
                <section className="pt-5 pb-3 text-center container">
                    <h1 className="h1-productos-contenido fw-light"><strong>Mi carrito</strong></h1>
                </section>
                <section>
                    <div className="container">
                        <div className="fondo container">
                            <TablaCarrito productos={productos} />
                        </div>
                        <br />
                        <div className="total-carrito">Total:</div>
                        <div className="total-carrito"><strong>${calcularTotalGeneral()}</strong></div>

                        <br />
                        <BuyButton />
                        <CleanCardButton />
                    </div>
                </section>
            </main>
        </>

    );
};

export default Carrito;
