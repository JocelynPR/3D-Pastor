import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import '../../styles/Admin/admin.css';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const correctUsername = 'admin';
    const correctPassword = 'admin123';

    if (username === correctUsername && password === correctPassword) {
      console.log('Inicio de sesión exitoso');
      navigate('/productRegistration');
    } else {
      setError('Credenciales incorrectas'); // Usar setError en lugar de alert
    }
  };

  return (
    <div className="login-container-admin">
      <h2 className="h2-contacto">Administrador</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form id="formularioContacto" onSubmit={handleLogin}>
        <Form.Group controlId="formUsername">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            className="form-control-contacto"
            type="text"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            className="form-control-contacto"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button
          type="submit"
          className="btn btn-outline-dark"
          variant="primary"
          id="boton-verificador-password"
        >
          Iniciar Sesión
        </button>
      </Form>
    </div>
  );
};

export default LoginAdmin;
