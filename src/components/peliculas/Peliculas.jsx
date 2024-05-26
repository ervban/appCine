import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dune from "../../assets/dune.jpg";
import evangelion from "../../assets/evangelion.png";
import hobbitjpg from "../../assets/hobbitjpg.jpg";
import lobo from "../../assets/lobo.jpg";
import narnia from "../../assets/narnia.jpg";
import "./peliculas.css";
import NavbarGeneral from "../../common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "../../common/Footer/Footer";

export default function Peliculas() {
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
    <div>
      <NavbarGeneral />
      <div className="peliculas">
        <h2>Peliculas En Cartelera</h2>
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
                
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
