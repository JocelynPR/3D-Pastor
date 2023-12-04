import React, { useState } from "react";
import "../../styles/contacto/contacto.css";

import emailjs from "emailjs-com";

emailjs.init("u_xdz7mkwHjRvAVGs");

const Contacto = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const user = {
      nombre: event.target.elements["nombreFormulario"].value,
      correo: event.target.elements["correoFormulario"].value,
      telefono: event.target.elements["telefonoFormulario"].value,
      mensaje: event.target.elements["mensajeFormulario"].value,
    };

    if (datosVerificados(user)) {
      console.log(user);
      enviarDatosAlServidor(user);
    }
  };

  const datosVerificados = (user) => {
    let response = true;

    if (user.nombre === "") {
      mensajeError("Falta introducir el nombre");
      response = false;
    } else if (user.correo === "") {
      mensajeError("Falta introducir el correo");
      response = false;
    } else if (user.correo.includes(".") === false) {
      mensajeError("El formato del correo electrónico ingresado es incorrecto");
      response = false;
    } else if (user.telefono.length < 10) {
      mensajeError("El teléfono debe contener mínimo 10 dígitos");
      response = false;
    } else if (user.mensaje === "") {
      mensajeError("Falta introducir el mensaje");
      response = false;
    } else {
      mensajeError("");
    }
    return response;
  };

  const mensajeError = (message) => {
    console.log(message);
    setErrorMessage(message);
  };

  const enviarDatosAlServidor = (user) => {
    const serviceID = "default_service";
    const templateID = "template_vml4y7r";

    // Configura los parámetros del correo con los datos del usuario
    const templateParams = {
      nombreFormulario: user.nombre,
      correoFormulario: user.correo,
      telefonoFormulario: user.telefono,
      mensajeFormulario: user.mensaje,
      /*Se nombran con Formulario al final para que emailjs los reconozca en la plantilla*/
    };

    // Envía el formulario utilizando emailjs
    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log("Correo enviado con éxito:", response);
        alert("Correo enviado con éxito");
      },
      (error) => {
        console.error("Error al enviar el correo:", error);
        alert("Error al enviar el correo");
      }
    );
  };
  return (
    <form
      className="container-md"
      id="formularioContacto"
      onSubmit={handleFormSubmit}
    >
      <br />
      <h2 className="h2-contacto">Contáctanos</h2>
      <div className="mb-3">
        <label htmlFor="nombreFormulario" className="form-label">
          Nombre y apellido:
        </label>
        <input
          type="text"
          className="form-control form-control-contacto"
          name="nombreFormulario"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correoFormulario" className="form-label">
          Correo electrónico:
        </label>
        <input
          type="email"
          className="form-control form-control-contacto"
          name="correoFormulario"
          placeholder="nombre@ejemplo.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefonoFormulario" className="form-label">
          Teléfono:
        </label>
        <input
          type="tel"
          className="form-control form-control-contacto"
          name="telefonoFormulario"
          placeholder="+52 01 2345 6789"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mensajeFormulario" className="form-label">
          Mensaje:
        </label>
        <textarea
          className="form-control form-control-contacto"
          name="mensajeFormulario"
          rows="3"
        ></textarea>
      </div>
      <div className="bg-warning mt-3 rounded" id="error-message-container">
        {errorMessage && <p id="error-message">{errorMessage}</p>}
      </div>
      <button type="submit" className="btn btn-outline-dark" id="boton">
        Enviar
      </button>

      {/* Información adicional */}
      <div>
        <br />
        <p>
          <strong>Teléfono</strong>: <br /> (+52) 33 1308 9656
        </p>
        <p>
          <strong>E-mail</strong>: <br />
          pokemonplacegdl@gmail.com
        </p>
        <p>
          <strong>Redes sociales</strong>: <br />
          ¡Conéctate con nosotros en nuestras redes sociales para conocer las
          últimas novedades y ofertas! <br />
          <a
            href="https://my.bio/pkmnplacegdl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita nuestras redes sociales
          </a>
        </p>
      </div>
    </form>
  );
};

export default Contacto;
