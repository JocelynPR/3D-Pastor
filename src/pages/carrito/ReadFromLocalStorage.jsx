import React, { useEffect, useState } from "react";
import "../../styles/buyButton/buyButton.css";
import "../../styles/carrito/carrito.css";

const ReadFromLocalStorage = () => {

    const readLocalStorage = (localStorageKey) => {
        const data = JSON.parse(localStorage.getItem(localStorageKey));
        const carritoStorage = [];
        const map = data.map((element, index, array) => carritoStorage.push(element));
        return carritoStorage;
    }

    const data = readLocalStorage("data");
    return (
        <>
            <tbody>
                {data.map((producto, index) => (
                    <tr key={producto.id}>
                        <td>{producto.title}</td>
                        <td>{producto.price.toFixed(2)}</td>
                        <td>2</td>
                        <td>{(producto.price * 2).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}

export default ReadFromLocalStorage;