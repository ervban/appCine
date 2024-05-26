import React from "react";
import NavbarGeneral from "../../common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "../../common/Footer/Footer";
import "./snacks.css";
import soda from "../../assets/soda.jpg";
import popcorn from "../../assets/popcorn.jpg";
import hotdog from "../../assets/hotdog.jpg";

export default function Snacks() {
  return (
    <div>
      <NavbarGeneral />
      <section class="wrap">
        <div class="wrap-title-section">
          <h2>Hamburguesas</h2>
        </div>
        <div class="wrap column-2 carta">
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={soda}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={soda}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={soda}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={soda}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
        </div>
        <div class="wrap-title-section">
          <h2>Pizzas</h2>
        </div>
        <div class="wrap column-2 carta">
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={popcorn}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={popcorn}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={popcorn}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={popcorn}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
        </div>
        <div class="wrap-title-section">
          <h2>Pastas</h2>
        </div>
        <div class="wrap column-2 carta">
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={hotdog}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={hotdog}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={hotdog}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
          <div class="plato-carta">
            <div class="img-plato-carta">
              <img src={hotdog}></img>
            </div>
            <div class="title-plato-carta">
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="precio-plato-carta">
              <span>S/. 9.00</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
