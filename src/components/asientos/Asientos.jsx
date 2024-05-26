import React, { useState } from "react";
import Navbarusers from "../../common/navbarUsers/Navbarusers";
import "./asientos.css";
import evangelion from "../../assets/evangelion.png";

export default function Asientos() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter((s) => s !== seat);
      } else {
        return [...prevSeats, seat];
      }
    });
  };

  const renderSeats = (numSeats, row) => {
    let seats = [];
    for (let i = 1; i <= numSeats; i++) {
      let seatId = `${row}${i}`;
      seats.push(
        <button
          key={seatId}
          onClick={() => handleSeatClick(seatId)}
          className={`seat-button ${
            selectedSeats.includes(seatId) ? "selected" : ""
          }`}
        >
          {seatId}
        </button>
      );
    }
    return seats;
  };

  // Obtén la fecha actual
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <Navbarusers />
      <div className="parteGeneral">
        <div className="parteIzquierda">
          <div className="tarjetaPelicula">
            <h1 className="titulo">Titulo</h1>
            <img src={evangelion} />
            <div>
              <h1>Asientos: {selectedSeats.join(", ")}</h1>
              <h1>Lugar: </h1>
              <h1>Fecha: {currentDate}</h1>
            </div>
          </div>
        </div>
        <div className="parteDerecha">
          <div>{renderSeats(10, "A")}</div>
          <div>{renderSeats(10, "B")}</div>
          <div>{renderSeats(10, "C")}</div>
        </div>
      </div>
    </div>
  );
}