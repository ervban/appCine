import React from "react";
import Navbarusers from "../../common/navbarUsers/Navbarusers";
import "./login.css";

export default function Login() {
  return (
    <div>
      <Navbarusers />
      <div>
        <div class="login-box">
          <h2>INICIAR SESION</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required=""></input>
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required=""></input>
              <label>Password</label>
            </div>
            <center>
              <a href="#">
                SEND
                <span></span>
              </a>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
