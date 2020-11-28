import React from "react";
import "./Footer.css";
const PlanetsFooter = () => {
  return (
    <footer className="planets-footer">
      <section className="planets-footer-section-one">
        <div className="planets-footer-section-one-wrapper">
          <p className="planets-footer-text">By the same aothor:</p>
          <a
            className="planets-footer-http"
            href="https://mobile.le-systeme-solaire.net/"
          >
            Le Système solaire à portée de votre souris.
          </a>
        </div>
        <div className="planets-footer-text">
          <p className="planets-footer-phon">CONTACTS:</p>
          <p>+38 (000) 555 55 55</p>
        </div>
      </section>
      <section className="planets-footer-section-two">
        <div className="planets-footer-section-two-wrapper">
          <p className="planets-footer-text">
            Made with ♥ in <img src="" /> by Solomiya - Copyright © 2020
          </p>
        </div>
      </section>
    </footer>
  );
};
export default PlanetsFooter;
