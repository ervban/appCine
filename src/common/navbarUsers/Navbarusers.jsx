import React from "react";
import "./navbarusers.css";
import atraswhite from "../../assets/atraswhite.svg";
import homewhitesvg from "../../assets/homewhitesvg.svg";

export default function Navbarusers() {
  return (
    <div className="contenedorNavbar">
      {/* Capa de fondo desenfocado */}
      <div className="fondoDesenfocado"></div>

      <div className="contexto">
        <button className="botonNavbar">
          <img src={atraswhite} className="icons" />
        </button>
        <button className="botonNavbar">
          <img src={homewhitesvg} className="icons" />
        </button>
      </div>
    </div>
  );
}
