import React from "react";

const SectionThree = () => (
  <section id="three" className="spotlight style3 left">
    <span className="image fit main bottom">
      <img src="images/pic04.jpg" alt="Technologie-Stack" />
    </span>
    <div className="content">
      <header>
        <h2>Modernste Technologien</h2>
        <p>Zukunftssichere Lösungen mit aktuellsten Technologien</p>
      </header>
      <p>
        Wir nutzen die neuesten Frameworks und Plattformen wie React, Angular, Vue.js für die Webentwicklung und native/hybride Ansätze für Mobile Apps. Unsere Lösungen integrieren bei Bedarf KI, Machine Learning und IoT-Fähigkeiten, um sicherzustellen, dass Ihre digitale Präsenz in einem sich wandelnden Marktumfeld wettbewerbsfähig bleibt.
      </p>
      <ul className="actions">
        {/* <li>
          <a href="#" className="button">
            Unsere Technologien
          </a>
        </li> */}
      </ul>
    </div>
    <a href="#four" className="goto-next scrolly">
      Weiter
    </a>
  </section>
);

export default SectionThree; 