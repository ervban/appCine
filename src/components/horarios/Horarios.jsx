import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./horarios.css";
import NavbarGeneral from "../../common/navbar/navBarGeneral/NavbarGeneral";
import evangelion from "../../assets/evangelion.png";
import Footer from "../../common/Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Horarios() {
  const location = useLocation();
  const movie = location.state
    ? location.state.movie
    : JSON.parse(localStorage.getItem("selectedMovie")) || {
        nombre: "",
        descripcion: "",
        image: evangelion,
      };

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
            <img src={movie.image} alt={movie.nombre} />
          </div>
          <div className="cuadroDerecho">
            <div className="cuadroDerechoInfo">
              <div className="texto">
                <h1>{movie.nombre}</h1>
                <p>{movie.descripcion}</p>
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
                  <Link key={index} to="/asientos">
                    <button>{horario}</button>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="segundasede">
              <h3>PLAZA DEL SOL</h3>
              <ul>
                {horariosCineplex2.map((horario, index) => (
                  <Link key={index} to="/asientos">
                    <button>{horario}</button>
                  </Link>
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
