import React, { useState } from "react";
import Navbar from "../../common/navbar/Navbar";
import "./home.css";
import fondo from "../../assets/fondo.jpg";
import dune from "../../assets/dune.jpg";
import evangelion from "../../assets/evangelion.png";
import hobbitjpg from "../../assets/hobbitjpg.jpg";
import lobo from "../../assets/lobo.jpg";
import narnia from "../../assets/narnia.jpg";
import Footer from "../../common/Footer/Footer";

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="container">
      <div className="parteSuperior">
        <Navbar />
        <div className="textoCentral">
          <h1>MEJOR CALIDAD DE IMAGEN CINERAMA</h1>
          <h3>Disfruta de la magia del cine</h3>
        </div>
      </div>
      <div className="peliculas">
        <h2>Peliculas</h2> {/* Added line */}
        <div className="container-peliculas">
          
          <div className="image-group">
            <div
              className="image-container"
              onMouseEnter={() => setHoveredImage(evangelion)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={evangelion} />
              {hoveredImage === evangelion && (
                <button className="buy-ticket-button">Comprar entrada</button>
              )}
            </div>
            <div
              className="image-container"
              onMouseEnter={() => setHoveredImage(narnia)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={narnia} />
              {hoveredImage === narnia && (
                <button className="buy-ticket-button">Comprar entrada</button>
              )}
            </div>
            <div
              className="image-container"
              onMouseEnter={() => setHoveredImage(dune)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={dune} />
              {hoveredImage === dune && (
                <button className="buy-ticket-button">Comprar entrada</button>
              )}
            </div>
            <div
              className="image-container"
              onMouseEnter={() => setHoveredImage(hobbitjpg)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={hobbitjpg} />
              {hoveredImage === hobbitjpg && (
                <button className="buy-ticket-button">Comprar entrada</button>
              )}
            </div>
            <div
              className="image-container"
              onMouseEnter={() => setHoveredImage(lobo)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={lobo} />
              {hoveredImage === lobo && (
                <button className="buy-ticket-button">Comprar entrada</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
