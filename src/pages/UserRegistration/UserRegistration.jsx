import React, { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/UserRegistration/UserRegistration.css";
import miImagen from "../../img/registro/img2.png";

function UserRegistration() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasenaVerificar, setContrasenaVerificar] = useState("");

  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mostrarContrasenaVerificar, setMostrarContrasenaVerificar] =
    useState(false);

  const [errores, setErrores] = useState([]);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let erroresTemp = [];

    // Validaciones
    if (!nombre.trim()) erroresTemp.push("El nombre completo es requerido");
    if (!telefono.trim() || !/^\d+$/.test(telefono))
      erroresTemp.push("Número de teléfono no válido");
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      erroresTemp.push("Email no válido");
    if (!contrasena.trim()) erroresTemp.push("La contraseña es requerida");
    if (contrasena !== contrasenaVerificar)
      erroresTemp.push("Las contraseñas no coinciden");

    if (erroresTemp.length > 0) {
      setErrores(erroresTemp);
    } else {
      const usuario = {
        nombreCompleto: nombre,
        numeroTelefono: telefono,
        email: email,
        contrasena: contrasena,
      };
      setErrores([]);
      setMensajeConfirmacion("Datos guardados");
      verificarYGuardarDatos(usuario);
    }
  };
  const verificarYGuardarDatos = (nuevoUsuario) => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    // Verificamos si el usuario ya existe (puedes cambiar la lógica según tu criterio, aquí usamos el email)
    if (!usuarios.some((usuario) => usuario.email === nuevoUsuario.email)) {
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      console.log("Nuevo usuario guardado:", nuevoUsuario);
      // Actualizamos el mensaje de confirmación
      setMensajeConfirmacion("Nuevo usuario guardado.");
    } else {
      console.log("El usuario ya existe.");
      setMensajeConfirmacion("El usuario ya está registrado.");
    }
  };

  return (
    <div class="custom-background">

      <div className="login-container-admin">
        <img
          src={miImagen}
          alt="Descripción"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h2>Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Número de teléfono</label>
            <input
              type="number"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="rounded-input form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <div className="input-group">
              <input
                type={mostrarContrasena ? "text" : "password"}
                className="form-control"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setMostrarContrasena(!mostrarContrasena)}
                >
                  {mostrarContrasena ? <EyeSlashFill /> : <EyeFill />}
                </button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Verificar Contraseña</label>
            <div className="input-group">
              <input
                type={mostrarContrasenaVerificar ? "text" : "password"}
                className="form-control"
                value={contrasenaVerificar}
                onChange={(e) => setContrasenaVerificar(e.target.value)}
                required
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    setMostrarContrasenaVerificar(!mostrarContrasenaVerificar)
                  }
                >
                  {mostrarContrasenaVerificar ? <EyeSlashFill /> : <EyeFill />}
                </button>
              </div>
            </div>
          </div>

          {errores.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {errores.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-outline-dark"
            variant="primary"
            id="boton-verificador"
          >
            Registrar
          </button>
        </form>

        {mensajeConfirmacion && (
          <div className="alert alert-success">{mensajeConfirmacion}</div>
        )}
      </div>
      
    </div>
  );
}

export default UserRegistration;
