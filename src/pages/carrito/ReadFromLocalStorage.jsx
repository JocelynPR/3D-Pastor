import React, { useEffect, useState } from "react";
import "../../styles/buyButton/buyButton.css";
import "../../styles/carrito/carrito.css";
import pokemonesData from "../../json/productos.json";

const ReadFromLocalStorage = () => {

    const [productos, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        setProducts(pokemonesData);
    }, []);



    const sendFetchedDataToLocalStorage = (productos) => {
        const data = (productos);
        localStorage.setItem("data", JSON.stringify(data));
    }

    const readLocalStorage = (localStorageKey) => {
        const data = JSON.parse(localStorage.getItem(localStorageKey));
        const carritoStorage = [];
        const map = data.map((element, index, array) => carritoStorage.push(element));
        return carritoStorage;
    }

    const organizeDataIntoHTML = (data) => {
        const organizedData = data.map((producto, index, array) => `
            <tr key="${producto.id}">
                <td>${producto.title}</td>
                <td>${producto.price}</td>
            </tr>
        ` );
        const joined = organizedData.join("");
        //console.log(joined);
        return joined;
    }
    organizeDataIntoHTML(readLocalStorage("data"));

    return (
        <>
            {organizeDataIntoHTML(readLocalStorage("data"))}
        </>

    );

}

export default ReadFromLocalStorage;