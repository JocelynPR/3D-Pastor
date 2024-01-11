import deleteIcon from "../../img/logos/deleteIcon.svg";
import React from "react";
import "../../styles/clearCardButton/clearCardButton.css";

const CleanCardButton = ({ productId }) => {
  const handleCleanCardClick = () => {
    // Lógica para limpiar el carrito (a implementar en el futuro)
    borrarProductoCarrito(productId);
    // Llama a la función proporcionada como prop (onCleanCardClick)
    //onCleanCardClick(); //se comento para que no marcara error
  };


  const readLocalStorage = (localStorageKey) => {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    const carritoStorage = [];
    const map = data.map((element, index, array) => carritoStorage.push(element));
    return carritoStorage;
  }

  const borrarProductoCarrito = (id) => {
    let guardadoEnElCarrito = [];
    guardadoEnElCarrito = readLocalStorage("data");
    console.log(id);

    // Corregir y recargar pagina carrito al dar click
    guardadoEnElCarrito = guardadoEnElCarrito.filter((producto) => producto.id === id);
    console.log(guardadoEnElCarrito);

    if (localStorage.getItem("data") == null) {
      const emptyArray = [{ id: 0, title: "Carrito vacío", price: 0, qty: 0 }];
      localStorage.setItem("data", JSON.stringify(emptyArray));
    }
    sendDataToLocalStorage(guardadoEnElCarrito);
  };

  const sendDataToLocalStorage = (productos) => {
    const data = (productos);
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div>
      <button
        type="button"
        className="clean-card-button"
        onClick={handleCleanCardClick}
      >
        <img src={deleteIcon} alt="Clean Card" />
      </button>
    </div>
  );
};

export default CleanCardButton;
