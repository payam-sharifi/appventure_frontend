import React from "react";

const SectionTwo = () => (
  <section id="two" className="spotlight style2 right">
    <span className="image fit main">
      <img src="/images/pic03.jpg" alt="Webentwicklungsprozess" />
    </span>
    <div className="content">
      <header>
        <h2>Unser Entwicklungsprozess</h2>
        <p>Transparent, kooperativ und ergebnisorientiert</p>
      </header>
      <p>
        Wir arbeiten nach einer agilen Methodik, die Sie in jede Phase einbindet. Vom ersten Konzept bis zum finalen Launch gewährleistet unser Prozess, dass Ihre Vision perfekt in die digitale Realität umgesetzt wird. Regelmäßige Updates, Testphasen und iterative Verbesserungen garantieren ein Endergebnis, das alle Erwartungen übertrifft.
      </p>
      <ul className="actions">
        {/* <li>
          <a href="#" className="button">
            Mehr über unsere Methodik
          </a>
        </li> */}
      </ul>
    </div>
    <a href="#three" className="goto-next scrolly">
      Weiter
    </a>
  </section>
);

export default SectionTwo; 