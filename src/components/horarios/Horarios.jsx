import React, { useState } from "react";

import "./horarios.css";
import NavbarGeneral from "../../common/navbar/navBarGeneral/NavbarGeneral";
import evangelion from "../../assets/evangelion.png";
import Footer from "../../common/Footer/Footer";

export default function Horarios() {

  const horariosCineplex1 = [
    "10:00 AM ",
    "1:00 PM ",
    "4:00 PM ",
    "7:00 PM ",
    "10:00 PM ",
  ];
  const horariosCineplex2 = [
    "11:00 AM ",
    "2:00 PM ",
    "5:00 PM ",
    "8:00 PM ",
    "11:00 PM ",
  ];

  return (
    <div className="general">
      <NavbarGeneral />
      <div className="principal">
        <div className="cuadroPrincipal">
          <div className="cuadroIzquierdo">
            <img src={evangelion} alt="" />
          </div>
          <div className="cuadroDerecho">
            <div className="cuadroDerechoInfo">
              <div className="texto">
                <h1>Evangelion 3.0 + 1.0</h1>
                <p>
                  Shinji Ikari sigue a la deriva después de perder sus ganas de
                  vivir, pero el lugar al que llega le enseña lo que significa
                  la esperanza. Finalmente, el Proyecto Instrumentalidad se pone
                  en marcha y Wille hace un último y agotador esfuerzo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horarioContenedor">
        <div className="contenedorHorarios">
          <div className="sede-horarios">
            <div className="primerasede">
              <h3>MEGAPLAZA</h3>
              <ul>
                {horariosCineplex1.map((horario, index) => (
                  <button key={index}>{horario}</button>
                ))}
              </ul>
            </div>
            <div className="segundasede">
              <h3>PLAZA DEL SOL</h3>
              <ul>
                {horariosCineplex2.map((horario, index) => (
                  <button key={index}>{horario}</button>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
