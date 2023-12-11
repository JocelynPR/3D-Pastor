import deleteIcon from "../../img/logos/deleteIcon.svg";
import React from "react";
import "../../styles/clearCardButton/clearCardButton.css";

const CleanCardButton = ({ onCleanCardClick }) => {
  const handleCleanCardClick = () => {
    // Lógica para limpiar el carrito (a implementar en el futuro)
    console.log("Limpiar carrito");
    // Llama a la función proporcionada como prop (onCleanCardClick)
    onCleanCardClick();
  };

  return (
    <div>
      {/* Botón con una imagen (add) que ejecuta la función handleCleanCardClick cuando se hace clic */}
      <button
        type="button"
        className="clean-card-button"
        onClick={handleCleanCardClick}
      >
        {/* Imagen del icono proporcionado (add) */}
        <img src={deleteIcon} alt="Clean Card" />
      </button>
    </div>
  );
};

export default CleanCardButton;
