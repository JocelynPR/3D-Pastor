import React, { useEffect, useState } from "react";
import "../../styles/buyButton/buyButton.css";
import "../../styles/carrito/carrito.css";
import CleanCardButton from "../../components/clearCardButton/ClearCardButton";

const ReadFromLocalStorage = () => {

    const readLocalStorage = (localStorageKey) => {
        if (localStorage.getItem("data") == null) {
            const emptyArray = [{ id: 0, title: "Carrito vacío", price: 0, qty: 0 }];
            localStorage.setItem("data", JSON.stringify(emptyArray));
        }
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
                        <td>${producto.price.toFixed(2)} c/u</td>
                        <td>{producto.qty}</td>
                        <td>${(producto.price * (producto.qty)).toFixed(2)}</td>
                        <td><CleanCardButton productId={producto.id} /></td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}

export default ReadFromLocalStorage;