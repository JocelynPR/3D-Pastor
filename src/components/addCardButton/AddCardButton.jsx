import React, { useEffect, useState } from "react";
import "../../styles/addCardButton/AddCardButton.css";
import { Link } from "react-router-dom";
import pokemonesData from "../../json/productos.json";
import CustomAlert from "../../pages/logIn/CustomAlert";

const AddCardButton = ({ onCantidadChange, buttonIdAnadir }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(pokemonesData);
  }, []);

  

  const readLocalStorage = (localStorageKey) => {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    const carritoStorage = [];
    const map = data.map((element, index, array) => carritoStorage.push(element));
    return carritoStorage;
  }

  const anadirAlCarrito = (id, products) => {

    let guardadoEnElCarrito = [];
    guardadoEnElCarrito = readLocalStorage("data");

    const productoEncontrado = products.find((producto) => producto.id === id);
    productoEncontrado.qty = cantidadProductos;

    guardadoEnElCarrito.push(productoEncontrado);
    if (guardadoEnElCarrito[0].id == 0) {
      guardadoEnElCarrito.splice(0, 1);
    }
    sendDataToLocalStorage(guardadoEnElCarrito);
  };

  const sendDataToLocalStorage = (productos) => {
    const data = (productos);
    localStorage.setItem("data", JSON.stringify(data));
  }

  let [cantidadProductos, setCantidadProductos] = useState(1);
  const maxProductos = 9;

  const incrementarCantidad = () => {
    if (cantidadProductos < maxProductos) {
      setCantidadProductos(cantidadProductos + 1);
    }
    onCantidadChange(cantidadProductos + 1);
  };

  const decrementarCantidad = () => {
    if (cantidadProductos > 0) {
      setCantidadProductos(cantidadProductos - 1);
      onCantidadChange(cantidadProductos - 1);
    }
  };

  const[showAlert, setshowAlert] = useState(false);  
  const closeAlert = () => setshowAlert(false);

  const handleCarAddClick = () => {
    anadirAlCarrito(buttonIdAnadir, products);
    setCantidadProductos(cantidadProductos = 1);
    setshowAlert(true);
  };

  return (
    <div className="d-grid gap-2 col-2 mx-auto" >
      {/* Contenedor centrado horizontalmente */}
      <div className="add-card-container">
        <button
          type="button"
          className="carrito-button carrito-decrement"
          onClick={decrementarCantidad}
        >
          {" "}
          -{" "}
        </button>
        {/* Contenedor con ancho fijo */}
        <div
          className="cantidad-container"
          style={{ width: "40px", textAlign: "center" }}
        >
          <span className="cantidad">{cantidadProductos}</span>
          {/* Condición para renderizar el botón de incremento */}
          {cantidadProductos < maxProductos && (
            <button
              type="button"
              className="carrito-button carrito-increment"
              onClick={incrementarCantidad}
            >
              {" "}
              +{" "}
            </button>
          )}
        </div>
      </div>
      {/* Botón principal para añadir al carrito */}

        <button
          type="button"
          className="carrito-button carrito-add"
          onClick={handleCarAddClick}
        >
          Añadir
        </button>
        {showAlert && (<CustomAlert message={"Producto agregado"} onClose={closeAlert}/>)}
    </div>
  );
};

export default AddCardButton;


