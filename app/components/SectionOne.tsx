import React from "react";

const SectionOne = () => (
  <section id="one" className="spotlight style1 bottom">
    <span className="image fit main">
      <img src="images/pic02.jpg" alt="Teamarbeit" />
    </span>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <header>
              <h2>Maßgeschneiderte Digitallösungen</h2>
              <p>Präzise entwickelt für Ihre Geschäftsziele</p>
            </header>
          </div>
          <div className="col-4 col-12-medium">
            <p>
              Unsere individuellen Webentwicklungsdienstleistungen erstellen responsive, skalierbare Websites, die Besucher in Kunden verwandeln. Von eleganten Unternehmensseiten bis zu komplexen E-Commerce-Plattformen - wir entwickeln digitale Erlebnisse, die auf allen Geräten und Browsern optimal funktionieren.
            </p>
          </div>
          <div className="col-4 col-12-medium">
            <p>
              Unser App-Entwicklungsteam spezialisiert sich auf intuitive, funktionsreiche Anwendungen für iOS und Android. Wir konzentrieren uns auf nutzerzentriertes Design und robuste Funktionalität, um Apps zu liefern, die Nutzer lieben und Unternehmen schätzen.
            </p>
          </div>
        </div>
      </div>
    </div>
    <a href="#two" className="goto-next scrolly">
      Weiter
    </a>
  </section>
);

export default SectionOne; 