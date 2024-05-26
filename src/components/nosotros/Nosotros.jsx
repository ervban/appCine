import React from "react";
import "./nosotros.css";
import NavbarGeneral from "../../common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "../../common/Footer/Footer";
import megap from "../../assets/megap.jpg";


export default function Nosotros() {
  return (
    <div>
      <NavbarGeneral />
      <section class="about-us">
        <h2>Sobre Nosotros</h2>
        <img src={megap} alt="Buffer team photo"></img>
        <p>
          Somos una empresa que ofrece entretenimiento y atencion de calidad a todo publico para que puedan disfrutar de un buen momento en familia. Visualizando espectaculos visuales de calidad y con un servicio de excelencia.
        </p>
        <p>
          La magia del cine y la comodidad de como si estuvieras en tu hogar, es lo que queremos ofrecerte.
        </p>
      </section>
      <Footer />
    </div>
  );
}
