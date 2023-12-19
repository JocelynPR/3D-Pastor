import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/decoradores/logo_pikachu.png";
import "../../styles/logIn/LogIn.css";
import pokebolaLogIn from "../../img/decoradores/pokebolaLogIn.png";
import pikachuParado from "../../img/decoradores/pikachu-parao.png";
import CustomAlert from "./CustomAlert";


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const[showAlert, setshowAlert] = useState(false);
  const[alertMessage, setAlertMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email:
        e.target.value.trim() === ""
          ? "Por favor, ingresa tu correo electrónico."
          : "",
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({
      ...errors,
      password:
        e.target.value.trim() === "" ? "Por favor, ingresa tu contraseña." : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailError = email.trim() === "" ? "Por favor, ingresa tu correo electrónico." : "";
    const passwordError = password.trim() === "" ? "Por favor, ingresa tu contraseña." : "";
  
    setErrors({ email: emailError, password: passwordError });
  
    // Verificación en localStorage
    const storedUsers = localStorage.getItem('usuarios');
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      const foundUser = parsedUsers.find(user => user.email === email && user.contrasena === password);
  
      if (foundUser) {
        setAlertMessage("Autenticación exitosa");
        setshowAlert(true);
      } else {
        setAlertMessage("Verifica tus datos");
        setshowAlert(true);
      }
    }
  };
  const closeAlert = () => setshowAlert(false);


  return (
    <div>
      <main id="LogInForm">
        <img src={logo} alt="" id="logoPokemon" className="img-fluid" />
        <form
          className="container-md"
          id="formularioLogIn"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> Correo electrónico </label>
            <input type="email" className={`form-control form-logIn ${errors.email ? "error" : ""}`} id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmailChange}/>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="inputPassword5" className="form-label"> Contraseña </label>
            <input type="password" id="inputPassword5" className={`form-control form-logIn ${errors.password ? "error" : ""}`} aria-describedby="passwordHelpBlock" value={password} onChange={handlePasswordChange}/>
            {errors.password && ( <p className="error-message">{errors.password}</p> )}
          </div>
          <div className="containerPokebola">
            <img src={pikachuParado} alt="" id="pikachuParado" className="img-fluid d-none d-md-block"/>
            <button type="submit" className="bottonLogIn">
              <img src={pokebolaLogIn} alt="" className="logoPokebola" />
            </button>
          </div>
          {showAlert && (<CustomAlert message={alertMessage} onClose={closeAlert}/>)}
          <Link to="/UserRegistration ">
            <p>Registrarse</p>
          </Link>
          <Link to="/Registro">
            <p>¿Olvidaste tu contraseña?</p>
          </Link>
        </form>
      </main>
    </div>
  );
}
