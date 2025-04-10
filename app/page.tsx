"use client";

import "@/public/css/main.css";
import "@/public/css/noscript.css";

import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="/js/jquery.min.js"></Script>
      <Script src="/js/jquery.scrolly.min.js"></Script>
      <Script src="/js/jquery.dropotron.min.js"></Script>
      <Script src="/js/jquery.scrollex.min.js"></Script>
      <Script src="/js/browser.min.js"></Script>
      <Script src="/js/breakpoints.min.js"></Script>
      <Script src="/js/util.js"></Script>
      <Script src="/js/main.js"></Script>
      <body className="is-preload landing">
        <div id="page-wrapper">
          {/* <!-- Header --> */}
          <header id="header">
            <h1 id="logo">
              <a href="index.html">Nexus Digital</a>
            </h1>
            <nav id="nav">
              <ul>
                <li>
                  <a href="index.html">Startseite</a>
                </li>
                <li>
                  <a href="#">Leistungen</a>
                  <ul>
                    <li>
                      <a href="web-entwicklung.html">Webentwicklung</a>
                    </li>
                    <li>
                      <a href="app-entwicklung.html">App-Entwicklung</a>
                    </li>
                    <li>
                      <a href="ui-ux.html">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Speziallösungen</a>
                      <ul>
                        <li>
                          <a href="#">E-Commerce</a>
                        </li>
                        <li>
                          <a href="#">Enterprise Apps</a>
                        </li>
                        <li>
                          <a href="#">Progressive Web Apps</a>
                        </li>
                        <li>
                          <a href="#">Individuelle CMS</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="#" className="button primary">
                    Angebot anfordern
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          {/* <!-- Banner --> */}
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
                <img
                  src="images/pic01.jpg"
                  alt="Digitale Lösungen Illustration"
                />
              </span>
            </div>
            <a href="#one" className="goto-next scrolly">
              Weiter
            </a>
          </section>

          {/* <!-- One --> */}
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
                      Unsere individuellen Webentwicklungsdienstleistungen
                      erstellen responsive, skalierbare Websites, die Besucher
                      in Kunden verwandeln. Von eleganten Unternehmensseiten bis
                      zu komplexen E-Commerce-Plattformen - wir entwickeln
                      digitale Erlebnisse, die auf allen Geräten und Browsern
                      optimal funktionieren.
                    </p>
                  </div>
                  <div className="col-4 col-12-medium">
                    <p>
                      Unser App-Entwicklungsteam spezialisiert sich auf
                      intuitive, funktionsreiche Anwendungen für iOS und
                      Android. Wir konzentrieren uns auf nutzerzentriertes
                      Design und robuste Funktionalität, um Apps zu liefern, die
                      Nutzer lieben und Unternehmen schätzen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#two" className="goto-next scrolly">
              Weiter
            </a>
          </section>

          {/* <!-- Two --> */}
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
                Wir arbeiten nach einer agilen Methodik, die Sie in jede Phase
                einbindet. Vom ersten Konzept bis zum finalen Launch
                gewährleistet unser Prozess, dass Ihre Vision perfekt in die
                digitale Realität umgesetzt wird. Regelmäßige Updates,
                Testphasen und iterative Verbesserungen garantieren ein
                Endergebnis, das alle Erwartungen übertrifft.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Mehr über unsere Methodik
                  </a>
                </li>
              </ul>
            </div>
            <a href="#three" className="goto-next scrolly">
              Weiter
            </a>
          </section>

          {/* <!-- Three --> */}
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
                Wir nutzen die neuesten Frameworks und Plattformen wie React,
                Angular, Vue.js für die Webentwicklung und native/hybride
                Ansätze für Mobile Apps. Unsere Lösungen integrieren bei Bedarf
                KI, Machine Learning und IoT-Fähigkeiten, um sicherzustellen,
                dass Ihre digitale Präsenz in einem sich wandelnden Marktumfeld
                wettbewerbsfähig bleibt.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Unsere Technologien
                  </a>
                </li>
              </ul>
            </div>
            <a href="#four" className="goto-next scrolly">
              Weiter
            </a>
          </section>

          {/* <!-- Four --> */}
          <section id="four" className="wrapper style1 special fade-up">
            <div className="container">
              <header className="major">
                <h2>Unsere umfassenden Dienstleistungen</h2>
                <p>End-to-end Digitallösungen für Unternehmen jeder Größe</p>
              </header>
              <div className="box alt">
                <div className="row gtr-uniform">
                  <section className="col-4 col-6-medium col-12-xsmall">
                    <span className="icon solid alt major fa-code"></span>
                    <h3>Individuelle Webentwicklung</h3>
                    <p>
                      Maßgeschneiderte Websites für Performance, Sicherheit und
                      nahtlose Nutzererlebnisse.
                    </p>
                  </section>
                  <section className="col-4 col-6-medium col-12-xsmall">
                    <span className="icon solid alt major fa-mobile-alt"></span>
                    <h3>Mobile App-Entwicklung</h3>
                    <p>
                      Native und Cross-Platform Apps, die Engagement und
                      Geschäftserfolg steigern.
                    </p>
                  </section>
                  <section className="col-4 col-6-medium col-12-xsmall">
                    <span className="icon solid alt major fa-paint-brush"></span>
                    <h3>UI/UX Design</h3>
                    <p>
                      Ästhetische, intuitive Interfaces, die Usability und
                      Markenwahrnehmung verbessern.
                    </p>
                  </section>
                  <section className="col-4 col-6-medium col-12-xsmall">
                    <span className="icon solid alt major fa-shopping-cart"></span>
                    <h3>E-Commerce Lösungen</h3>
                    <p>
                      Leistungsstarke Online-Shops mit sicheren Zahlungssystemen
                      und Warenwirtschaft.
                    </p>
                  </section>
                  <section className="col-4 col-6-medium col-12-xsmall">
                    <span className="icon solid alt major fa-chart-line"></span>
                    <h3>Digitale Strategie</h3>
                    <p>
                      Datengetriebene Konzepte zur Maximierung Ihrer
                      Online-Präsenz und ROI.
                    </p>
                  </section>
                  <section className="col-4 col-6-medium col-12-xsmall">
                    <span className="icon solid alt major fa-headset"></span>
                    <h3>Laufender Support</h3>
                    <p>
                      Kontinuierlicher Wartungsservice, Updates und
                      Optimierungen.
                    </p>
                  </section>
                </div>
              </div>
              <footer className="major">
                <ul className="actions special">
                  <li>
                    <a href="#" className="button">
                      Gesamtleistungskatalog
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </section>

          {/* <!-- Five --> */}
          <section id="five" className="wrapper style2 special fade">
            <div className="container">
              <header>
                <h2>Bereit für Ihre digitale Transformation?</h2>
                <p>Kostenlose Beratung durch unsere Digitalexperten</p>
              </header>
              <form method="post" action="#" className="cta">
                <div className="row gtr-uniform gtr-50">
                  <div className="col-8 col-12-xsmall">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Ihre Geschäfts-E-Mail"
                    />
                  </div>
                  <div className="col-4 col-12-xsmall">
                    <input
                      type="submit"
                      value="Jetzt starten"
                      className="fit primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>

          {/* <!-- Footer --> */}
          <footer id="footer">
            <ul className="icons">
              <li>
                <a href="#" className="icon brands alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon solid alt fa-envelope">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; Nexus Digital Solutions. Alle Rechte vorbehalten.</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </>
  );
}
