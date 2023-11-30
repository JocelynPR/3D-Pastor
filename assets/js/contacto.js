console.log("Contacto");

// Obtener la referencia del formulario
const registerForm = document.forms["formularioContacto"]; //Funciona con Id y no con clase

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

/*
const enviarDatosAlServidor = (user) => {
  console.table(user);
  // TODO enviar datos a la api del servidor
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: user.nombre,
    Password: "password",
    To: user.correo,
    From: "misaeltup@gmail.com",
    Subject: "Hola",
    Body: "And this is the body",
  }).then((message) => alert(message));
};
*/

const enviarDatosAlServidor = (user) => {
  console.table(user);
  // TODO enviar datos a la api del servidor
};

////

const btn = document.getElementById("boton");

document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_vml4y7r";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
