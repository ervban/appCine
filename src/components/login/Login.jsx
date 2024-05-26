import React from "react";
import Navbarusers from "../../common/navbarUsers/Navbarusers";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Navbarusers />
      <div className="principal">
        <div class="login-box">
          <h2>INICIAR SESION</h2>
          <form class="form">
            <span class="input-span">
              <label for="email" class="label">
                Correo
              </label>
              <input type="email" name="email" id="email"></input>
            </span>
            <span class="input-span">
              <label for="password" class="label">
                Contraseña
              </label>
              <input type="password" name="password" id="password"></input>
            </span>
            <Link to="/home">
              <input className="submit" type="button" value="Ingresar" />
            </Link>{" "}
            <span className="span">
  ¿Aún no tienes una cuenta? <Link to="/registro">Registrate</Link>
</span>
          </form>
        </div>
      </div>
    </div>
  );
}
