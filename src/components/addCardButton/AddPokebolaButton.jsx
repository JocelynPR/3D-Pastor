import React, { useState } from "react";
import add from "../../img/logos/add.svg";
import "../../styles/addCardButton/AddPokebolaButton.css";

// Es el botón circular con el signo más dentro

// Define el componente funcional AddPokebolaButton que recibe una función llamada onAddPokebolaClick como prop
const AddPokebolaButton = ({ onAddPokebolaClick }) => {
  // Estado para controlar la visibilidad del botón, comienza como visible (true)
  const [isVisible, setIsVisible] = useState(true);

  // Función que maneja el clic en el botón
  const handleButtonClick = () => {
    // Cambia el estado de visibilidad a false cuando se hace clic en el botón
    setIsVisible(false);

    // Llama a la función proporcionada como prop (onAddPokebolaClick)
    onAddPokebolaClick();
  };

  // Renderiza el contenido del componente
  return (
    <div>
      {/* Botón con una imagen (add) que ejecuta la función handleButtonClick cuando se hace clic */}
      <button
        type="button"
        className={`add-pokebola-button ${isVisible ? "" : "hidden"}`} // Agrega o quita la clase "hidden" dependiendo del estado de visibilidad
        onClick={handleButtonClick}
      >
        {/* Imagen del símbolo de suma (add) */}
        <img src={add} alt="Add Circle" />
      </button>
    </div>
  );
};

// Exporta el componente AddPokebolaButton para que pueda ser utilizado en otros archivos
export default AddPokebolaButton;

//

//En resumen, este componente representa un botón con una imagen de un círculo y un símbolo de suma (add). La visibilidad del botón se controla mediante el estado isVisible, y cuando se hace clic en el botón, se oculta y se ejecuta la función onAddPokebolaClick proporcionada como prop. Este componente puede ser reutilizado en otras partes de la aplicación donde se necesite un botón con un comportamiento similar.

// import React, { useState } from "react";
// import add from "../../img/logos/add.svg";
// import "../../styles/addCardButton/AddPokebolaButton.css";

// // Este botón es el del círculo con un símbolo más

// const AddPokebolaButton = ({ onAddPokebolaClick }) => {
//   // Estado para controlar la visibilidad del botón
//   const [isVisible, setIsVisible] = useState(true);

//   // Maneja el clic en el botón
//   const handleButtonClick = () => {
//     setIsVisible(false);
//     onAddPokebolaClick(); // Llamar a la función proporcionada como prop
//   };

//   // Renderiza el contenido del componente
//   return (
//     <div>
//       <button
//         type="button"
//         className={`add-pokebola-button ${isVisible ? "" : "hidden"}`}
//         onClick={handleButtonClick}
//       >
//         <img src={add} alt="Add Circle" />
//       </button>
//     </div>
//   );
// };

// export default AddPokebolaButton;
