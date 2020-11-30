import React from "react";
import "./Header.css";
import { Switch, Route, Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { GiRingedPlanet } from "react-icons/gi";

import { SiCircle } from "react-icons/si";

const HeaderPlanets = () => {
  return (
    <header className="planets-header">
      <div className="planets-header-wrapper">
        <div className="planets-header-logo-text">
          <div className="planets-header-text">
            <h2>
              Sp
              <span className="planets-header-logo">
                <GiRingedPlanet />
              </span>
              ce Bodies
            </h2>
          </div>
        </div>
        <div className="planets-header-social-icons">
          <div className="planets-header-box-icon">
            <a
              className="planets-header-icon"
              href="https://github.com/systeme-solaire"
            >
              <FaGithub />
            </a>
          </div>
          <div className="planets-header-box-icon">
            <a
              className="planets-header-icon"
              href="https://www.facebook.com/le.systeme.solaire"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="planets-header-box-icon">
            <a
              className="planets-header-icon"
              href="https://twitter.com/systeme_solaire"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="planets-header-box-icon">
            <a
              className="planets-header-icon"
              href="https://www.le-systeme-solaire.net/"
            >
              <SiCircle />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderPlanets;
