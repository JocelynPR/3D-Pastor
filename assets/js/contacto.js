console.log("Contacto");

// Obtener la referencia del formulario
const registerForm = document.forms["formulario_contacto"];

registerForm.addEventListener("submit", (event) => {
  // Evita el comportamiento predeterminado asociadoa un evento.
  event.preventDefault();
  console.log(event);

  const user = {
    nombre: registerForm.elements["nombreFormulario"].value,
    correo: registerForm.elements["correoFormulario"].value,
    telefono: registerForm.elements["telefonoFormulario"].value,
    mensaje: registerForm.elements["mensajeFormulario"].value, // Checar
  };

  if (datosVerificados(user)) {
    enviarDatosAlServidor(user);
  }
});

const datosVerificados = (user) => {
  let response = true;

  if (user.nombre === "") {
    mensajeError("Falta introducir el nombre");
    response = false;
  } else if (user.correo) {
    mensajeError("Falta introducir el correo");
    response = false;
  } else if (user.telefono.length <= 10) {
    mensajeError("El número debe contener 10 dígitos");
    response = false;
  } else if (!user.termsandconditions) {
    mensajeError("Debe aceptar los términos y condiciones");
    response = false;
  } else {
    mensajeError("");
  }

  return response;
};

const mensajeError = (message) => {
  console.log(message);
  const errorMessage = document.getElementById("error-message");
  const errorMessageContainer = document.getElementById(
    "error-message-container"
  );

  errorMessage.innerHTML = message;
  if (message === "") {
    // displaty: none: quita el elemento del DOM
    // visibility: hidden : ocultar visualmente el elemento
    errorMessageContainer.style.display = "none";
  } else {
    errorMessageContainer.style.display = "block";
  }
};

const enviarDatosAlServidor = (user) => {
  console.table(user);
  // TODO enviar datos a la api del servidor
};
