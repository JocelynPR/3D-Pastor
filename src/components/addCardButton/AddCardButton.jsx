import React, { useState } from "react";
import "../../styles/addCardButton/AddCardButton.css";
import { Link } from "react-router-dom";


/* const [productos, setProducts] = useState([]);

useEffect(() => {
  setProducts(pokemonesData);
}, []); */


const guardadoEnElCarrito = [];

const sendFetchedDataToLocalStorage = (productos) => {
  const data = (productos);
  localStorage.setItem("data", JSON.stringify(data));
}


const AddCardButton = ({ onCantidadChange, buttonIdAnadir }) => {
  const [cantidadProductos, setCantidadProductos] = useState(1);
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

  const handleCarAddClick = () => {
    console.log("Añadir al carrito:", cantidadProductos);
  };

  return (
    <div className="d-grid gap-2 col-2 mx-auto">
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
      <Link to="/Carrito">
        <button
          type="button"
          className="carrito-button carrito-add"
          onClick={handleCarAddClick}
        >
          Añadir({buttonIdAnadir})
        </button>
      </Link>
    </div>
  );
};

export default AddCardButton;
