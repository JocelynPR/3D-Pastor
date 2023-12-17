import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function LogIn() {
  return (
    <Link to="/UserRegistration ">
      <button
        type="submit"
        className="btn btn-outline-dark"
        variant="primary"
        id="boton-verificador-password"
      >
        Iniciar Sesión
      </button>
    </Link>
  );
}
