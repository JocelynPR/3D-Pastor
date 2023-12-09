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

// En resumen, AppButtonCard es un componente que utiliza dos estados (mostrarAddCardButton y cantidadProductos) para controlar la visibilidad de dos componentes (AddCardButton y AddPokebolaButton). Dependiendo de la cantidad de productos (cantidadProductos), decide cuál de los dos mostrar. El código utiliza el hook useState para manejar el estado en el componente funcional de React.

// import React, { useState } from "react";
// import AddCardButton from "./AddCardButton";
// import AddPokebolaButton from "./AddPokebolaButton";

// const AppButtonCard = () => {
//   const [mostrarAddCardButton, setMostrarAddCardButton] = useState(false);
//   const [cantidadProductos, setCantidadProductos] = useState(0); // AGREGA EL ESTADO PARA EL CONTADOR DE AddCardButton

//   const handleAddPokebolaClick = () => {
//     setMostrarAddCardButton(true);
//   };

//   // FUNCION PARA MANEJAR EL CAMBIO EN EL CONTADOR DE AddCardButton
//   const handleCantidadProductosChange = (nuevaCantidad) => {
//     setCantidadProductos(nuevaCantidad);

//     // OCULTA AddCardButton SI LA CANTIDAD ES CERO, Y MUESTRA AddPokebolaButton
//     if (nuevaCantidad === 0) {
//       setMostrarAddCardButton(false);
//     } else {
//       setMostrarAddCardButton(true);
//     }
//   };

//   return (
//     <div>
//       {mostrarAddCardButton ? ( // CAMBIA LA CONDICION PARA MOSTRAR AddPokebolaButton
//         <AddCardButton onCantidadChange={handleCantidadProductosChange} /> // PASA LA FUNCION DE MANEJO DEL CONTADOR COMO PROP
//       ) : (
//         <AddPokebolaButton onAddPokebolaClick={handleAddPokebolaClick} />
//       )}
//     </div>
//   );
// };

// export default AppButtonCard;

/* 
import React, { useState } from "react";
import AddCardButton from "./AddCardButton";
import AddPokebolaButton from "./AddPokebolaButton";

// Nuevo componente que contiene ambos botones y gestiona el estado
const AppButtonCard = () => {
  // Estado para controlar la visibilidad de los botones
  const [mostrarAddCardButton, setMostrarAddCardButton] = useState(false);

  // Función para manejar el clic en AddPokebolaButton
  const handleAddPokebolaClick = () => {
    // Oculta el AddPokebolaButton y muestra el AddCardButton
    setMostrarAddCardButton(true);
  };

  // Renderiza el contenido del componente
  return (
    <div>
      
      {mostrarAddCardButton ? null : (
        <AddPokebolaButton onAddPokebolaClick={handleAddPokebolaClick} />
      )}


      {mostrarAddCardButton && <AddCardButton />}
    </div>
  );
};

export default AppButtonCard;
 */
