import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {

    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <Link to="/">Inicio</Link>
      ) : (
        <div>
          <h1>Iniciar sesión</h1>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Correo electrónico" />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Contraseña" />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

