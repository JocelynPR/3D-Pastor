import React, { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
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
  const verificarYGuardarDatos = async (nuevoUsuario) => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    if (!usuarios.some((usuario) => usuario.email === nuevoUsuario.email)) {
      try {
        // Realizar la solicitud POST
        const response = await fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: nuevoUsuario.nombreCompleto,
            email: nuevoUsuario.email,
            phone: nuevoUsuario.numeroTelefono,
            password: nuevoUsuario.contrasena,
            // Puedes incluir otros campos según tu entidad
          }),
        });

        if (response.ok) {
          // Usuario registrado con éxito en el servidor
          const responseData = await response.json();
          console.log("Nuevo usuario registrado en el servidor:", responseData);

          // Guardar el nuevo usuario en el almacenamiento local
          usuarios.push(nuevoUsuario);
          localStorage.setItem("usuarios", JSON.stringify(usuarios));

          setMensajeConfirmacion("Nuevo usuario registrado y guardado.");
          // Limpia los campos después de guardar
          limpiarCampos();
        } else {
          // Manejar errores de la respuesta del servidor
          console.error("Error al registrar el usuario en el servidor");
          setMensajeConfirmacion("Error al registrar el usuario en el servidor.");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        setMensajeConfirmacion("Error al realizar la solicitud POST.");
      }
    } else {
      console.log("El usuario ya existe.");
      setMensajeConfirmacion("El usuario ya está registrado.");
    }
  };


  const limpiarCampos = () => {
    setNombre("");
    setTelefono("");
    setEmail("");
    setContrasena("");
    setContrasenaVerificar("");
    setMostrarContrasena(false);
    setMostrarContrasenaVerificar(false);
  };

  return (
    <div class="custom-background">

      <div className="login-container-registration">
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
              className="form-control input-registro"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Número de teléfono</label>
            <input
              type="text"
              className="form-control input-registro"
              value={telefono}
              onChange={(e) => {
                // Permite solo números y limita la longitud a 10 dígitos
                const valor = e.target.value;
                if (valor === '' || (/^\d+$/.test(valor) && valor.length <= 10)) {
                  setTelefono(valor);
                }
              }}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-registro form-control"
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
                className="form-control input-registro"
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
                className="form-control input-registro"
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
