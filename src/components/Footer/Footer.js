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
      </section>
      <section className="planets-footer-section-two">
        <div className="planets-footer-section-two-wrapper">
          <p className="planets-footer-text">
            Made with ♥ in <img src="" /> by Christophe - Copyright © 2019-2020
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};
export default PlanetsFooter;
