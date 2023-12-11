import React, { useState } from "react";
import AddCardButton from "./AddCardButton";
import AddPokebolaButton from "./AddPokebolaButton";

// Aplicación que enlaza los dos botones

// Define el componente funcional AppButtonCard
const AppButtonCard = () => {
  // Estado para controlar la visibilidad del componente AddCardButton
  const [mostrarAddCardButton, setMostrarAddCardButton] = useState(false);

  // Estado para almacenar la cantidad de productos del componente AddCardButton
  const [cantidadProductos, setCantidadProductos] = useState(0);

  // Función que se ejecuta al hacer clic en el botón del componente AddPokebolaButton
  const handleAddPokebolaClick = () => {
    // Muestra el componente AddCardButton
    setMostrarAddCardButton(true);
  };

  // Función para manejar el cambio en el contador del componente AddCardButton
  const handleCantidadProductosChange = (nuevaCantidad) => {
    // Actualiza el estado de cantidadProductos con la nueva cantidad
    setCantidadProductos(nuevaCantidad);

    // Oculta el componente AddCardButton si la cantidad es cero, y muestra AddPokebolaButton
    if (nuevaCantidad === 0) {
      setMostrarAddCardButton(false);
    } else {
      setMostrarAddCardButton(true);
    }
  };

  // Renderiza el contenido del componente
  return (
    <div>
      {mostrarAddCardButton ? ( // Condicional para mostrar AddCardButton o AddPokebolaButton
        <AddCardButton onCantidadChange={handleCantidadProductosChange} /> // Pasa la función de manejo del contador como prop
      ) : (
        <AddPokebolaButton onAddPokebolaClick={handleAddPokebolaClick} />
      )}
    </div>
  );
};

// Exporta el componente AppButtonCard para que pueda ser utilizado en otros archivos
export default AppButtonCard;
