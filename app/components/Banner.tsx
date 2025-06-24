import React from "react";

const Banner = () => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Digitale Transformation beginnt hier</h2>
        <p>
          Wir entwickeln hochleistungsfähige Websites und Mobile Apps
          <br />
          die Wachstum generieren und Ihre Kunden begeistern.
        </p>
      </header>
      <span className="image">
        <img src="images/pic01.jpg" alt="Digitale Lösungen Illustration" />
      </span>
    </div>
    <a href="#one" className="goto-next scrolly">
      Weiter
    </a>
  </section>
);

export default Banner; 