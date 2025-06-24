import React from "react";

const Header = () => (
  <header id="header">
    <h1 id="logo">
      <a href="index.html">appventuregmbh.com</a>
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <a href="/">Startseite</a>
        </li>
        <li>
          <a href="#four">Leistungen</a>
          {/* <ul>
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
          </ul> */}
        </li>
        {/* <li>
          <a href="portfolio.html">Portfolio</a>
        </li> */}
        <li>
          <a href="#five" className="button primary">
            Angebot anfordern
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header; 