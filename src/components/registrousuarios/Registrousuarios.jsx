import React from "react";
import Navbarusers from "../../common/navbarUsers/Navbarusers";
import "./registro.css";
import { Link } from "react-router-dom";

export default function Registrousuarios() {
  return (
    <div>
      <Navbarusers />
      <div>
        <div class="login-box">
          <h2>REGISTRO DE USUARIOS</h2>
          <form>
            <div className="primeraFila">
              <div class="user-box">
                <input type="text" name="" required=""></input>
                <label>Nombre</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""></input>
                <label>Apellido</label>
              </div>
            </div>
            <div className="segundaFila">
              <div class="user-box">
                <input type="mail" name="" required=""></input>
                <label>Correo</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""></input>
                <label>Numero</label>
              </div>
            </div>
            <div class="user-box">
              <input type="password" name="" required=""></input>
              <label>Password</label>
            </div>
            <div className="botones">
              <Link to="/registrotarjeta">
              <button className="siguiente"> Agregar</button>

              </Link>
              <Link to="/login">
                <button className="siguiente"> Siguiente</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
