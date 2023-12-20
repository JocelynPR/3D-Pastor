import React, { useState } from "react";
import "../../styles/logIn/CustomAlert.css"; 

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={onClose}>Aceptar</button>
    </div>
  );
};

export default CustomAlert;
