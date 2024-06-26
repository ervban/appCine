import React, { useState, useEffect } from "react";
import NavbarGeneral from "../../common/navbar/navBarGeneral/NavbarGeneral";
import axios from "axios";
import "./home.css";
import dune from "../../assets/dune.jpg";
import evangelion from "../../assets/evangelion.png";
import hobbitjpg from "../../assets/hobbitjpg.jpg";
import lobo from "../../assets/lobo.jpg";
import narnia from "../../assets/narnia.jpg";
import Footer from "../../common/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [movies, setMovies] = useState([]);

  const images = [evangelion, narnia, dune, hobbitjpg, lobo];

  useEffect(() => {
    axios.get("http://localhost:8090/api/peliculas/listar").then((response) => {
      const updatedMovies = response.data.map((movie, index) => ({
        ...movie,
        image: images[index % images.length],
      }));
      console.log(updatedMovies);
      setMovies(updatedMovies);
    });
  }, []);

  return (
    <div className="container">
      <div className="parteSuperior">
        <NavbarGeneral />
        <div className="textoCentral">
          <h1>MEJOR CALIDAD DE IMAGEN CINERAMA</h1>
          <h3>Disfruta de la magia del cine</h3>
        </div>
      </div>
      <div className="peliculas">
        <h2>Peliculas</h2>
        <div className="container-peliculas">
          <div className="image-group">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="image-container"
                onMouseEnter={() => setHoveredImage(movie.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={movie.image} alt={movie.nombre} />
                {hoveredImage === movie.image && (
                  <Link
                    to={{
                      pathname: "/horario",
                      state: { movie },
                    }}
                    onClick={() =>
                      localStorage.setItem(
                        "selectedMovie",
                        JSON.stringify(movie)
                      )
                    }
                  >
                    <button className="buy-ticket-button">
                      Comprar entrada
                    </button>
                  </Link>
                )}
                <div>
                  <h3>{movie.nombre}</h3>
                  <p>{movie.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
