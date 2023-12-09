import React, { useState } from "react";
import "../../styles/addCardButton/AddCardButton.css";
//aqui
// Es el botón que contiene el contador (- Numero +)

// Define el componente funcional AddCardButton
const AddCardButton = ({ onCantidadChange }) => {
  // Estado local para la cantidad de productos, inicia en 1
  const [cantidadProductos, setCantidadProductos] = useState(1);

  // Límite máximo de productos
  const maxProductos = 10;

  // Estado local para mostrar o no el mensaje de cantidad máxima alcanzada
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // Función para incrementar la cantidad de productos
  const incrementarCantidad = () => {
    // Verifica si la cantidad actual es menor al máximo permitido
    if (cantidadProductos < maxProductos) {
      // Incrementa la cantidad de productos
      setCantidadProductos(cantidadProductos + 1);
    } else {
      // Muestra el mensaje de cantidad máxima alcanzada temporalmente
      setMostrarMensaje(true);
      // Después de 2000 milisegundos (2 segundos), oculta el mensaje
      setTimeout(() => {
        setMostrarMensaje(false);
      }, 2000);
    }

    // Llama a la función proporcionada como prop con la nueva cantidad
    onCantidadChange(cantidadProductos + 1);
  };

  // Función para decrementar la cantidad de productos
  const decrementarCantidad = () => {
    // Verifica si la cantidad actual es mayor a 0
    if (cantidadProductos > 0) {
      // Decrementa la cantidad de productos
      setCantidadProductos(cantidadProductos - 1);
      // Llama a la función proporcionada como prop con la nueva cantidad
      onCantidadChange(cantidadProductos - 1);
    }
  };

  // Función para manejar el clic en el botón "Añadir al carrito"
  const handleCarAddClick = () => {
    // Muestra en la consola la cantidad de productos al añadir al carrito
    console.log("Añadir al carrito:", cantidadProductos);
  };

  // Retorna la estructura JSX del componente

  return (
    <div>
      <div className="add-card-container">
        {/* Botón para decrementar la cantidad de productos */}
        <button
          type="button"
          className="carrito-button carrito-decrement"
          onClick={decrementarCantidad}
        >
          -
        </button>
        {/* Contenedor de la cantidad actual de productos y botón para incrementar */}
        <div className="cantidad-container">
          <span className="cantidad">{cantidadProductos}</span>
          {/* Botón para incrementar la cantidad de productos */}
          <button
            type="button"
            className="carrito-button carrito-increment"
            onClick={incrementarCantidad}
          >
            +
          </button>
        </div>
        {/* Muestra el mensaje de cantidad máxima alcanzada si es necesario */}
        {mostrarMensaje && (
          <div className="mensaje-maximo">Máximo de artículos</div>
        )}
      </div>

      {/* Botón principal para añadir al carrito */}
      <button
        type="button"
        className="carrito-button carrito-add"
        onClick={handleCarAddClick}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default AddCardButton;
