// Carrito.jsx
import React from "react";
import "../../styles/buyButton/buyButton.css";
import "../../styles/carrito/carrito.css";
import BuyButton from "../../components/buyButton/BuyButton.jsx";

const Carrito = ({ nombreProducto, cantidadProductos, precio }) => {
    // Calcula el total multiplicando la cantidad por el precio
    const total = cantidadProductos * precio;

    // Función que maneja la lógica de compra
    const handleCompra = () => {
        // Aquí puedes agregar la lógica de compra, por ejemplo, enviar una solicitud al servidor, etc.
        console.log("Compra realizada");
    };

    return (
        <div className="carrito-de-compras">
            <h2>Carrito de Compras</h2>
            <div>
                <p>Nombre del Producto: {nombreProducto}</p>
                <p>Cantidad de Productos: {cantidadProductos}</p>
                <p>Total: ${total}</p>
                <BuyButton onClick={handleCompra} />
            </div>
        </div>
    );
};

export default Carrito;
