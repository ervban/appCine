import React from "react";
import "./registrotarjeta.css";
import Navbarusers from "../../common/navbarUsers/Navbarusers";

export default function Registrotarjeta() {
  return (
    <div>
      <Navbarusers />
      <div>
        <div class="login-box">
          <h2>REGISTRO TARJETA</h2>
          <form>
            <div class="user-box">
              <input
                type="text"
                name=""
                required=""
                placeholder="Nombre completo"
              ></input>
              <label>Nombre Completo</label>
            </div>
            <div class="user-box">
              <input
                type="text"
                name=""
                required=""
                placeholder="0000 0000 0000 0000"
              ></input>
              <label>Numero Tarjeta</label>
            </div>
            <div className="numerodeatras">
              <div class="user-box">
                <div>
                  <input
                    type="text"
                    name=""
                    required=""
                    placeholder="01/23"
                  ></input>
                  <input
                    type="text"
                    name=""
                    required=""
                    placeholder="CVV"
                  ></input>
                  <label>Fecha de expiracion / CVV</label>
                </div>
              </div>
            </div>
            <button className="btnContinuar"> Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
