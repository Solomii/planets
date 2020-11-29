import React from "react";
import "./Planets.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlanetDetails from "../PlanetDetails/PlanetDetails";

const Planets = ({ planets, getAllPlanets, getAllData, getOnePlanet }) => {
  let allData, allPlanets;
  if (planets.showPlanets === false) {
    if (
      planets.alldata &&
      planets.alldata.data &&
      planets.alldata.data.bodies
    ) {
      planets.showPlanets = true;
      allData = planets.alldata.data.bodies.map((i) => (
        <div className="planets-box-name">
          {i.englishName} <br />
          <Link className="planets-box-link" to={"/planets/" + i.id}>
            More...
          </Link>
        </div>
      ));
    } else {
      allData = <div></div>;
    }
  } else {
    if (!planets.alldata.isLoading) {
      planets.showPlanets = false;
    }
    allData = <div></div>;
  }

  if (planets.showBodies === false) {
    if (planets.planet && planets.planet.data && planets.planet.data.bodies) {
      planets.showBodies = true;
      allPlanets = planets.planet.data.bodies.map((i) => (
        <div className="planets-box-name">
          {i.englishName} <br />
          <Link className="planets-box-link" to={"/planets/" + i.id}>
            More...
          </Link>
        </div>
      ));
    } else {
      allPlanets = <div></div>;
    }
  } else {
    if (!planets.planet.isLoading) {
      planets.showBodies = false;
    }
    allPlanets = <div></div>;
  }

  return (
    <Switch>
      <Route exact path="/planets">
        <div className="planets-box">
          <div className="planets-box-buttons-wraper">
            <button className="planets-box-button" onClick={getAllData}>
              Planets
            </button>
            <button className="planets-box-button" onClick={getAllPlanets}>
              Bodies
            </button>
          </div>
          <div className="planets-box-names">
            {allData}
            {allPlanets}
          </div>
        </div>
      </Route>
      <Route
        path="/planets/:id"
        render={(props) => (
          <PlanetDetails
            {...props}
            data={planets}
            getOnePlanet={getOnePlanet}
          />
        )}
      />
    </Switch>
  );
};
export default Planets;
