import React from "react";
import "./Planets.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlanetDetails from "../PlanetDetails/PlanetDetails";

const Planets = ({ planets, getAllPlanets, getAllData, getOnePlanet }) => {
  let allData, allPlanets;
  if (planets.alldata && planets.alldata.data && planets.alldata.data.bodies) {
    allData = planets.alldata.data.bodies.map((i) => (
      <div className="planets-box-name">
        {i.englishName} <br />
        <Link to={"/planets/" + i.id}>More...</Link>
      </div>
    ));
  } else {
    allData = <div></div>;
  }

  if (planets.planet && planets.planet.data && planets.planet.data.bodies) {
    allPlanets = planets.planet.data.bodies.map((i) => (
      <div className="planets-box-name">
        {i.englishName} <br />
        <Link to={"/planets/" + i.id}>More...</Link>
      </div>
    ));
  } else {
    allPlanets = <div></div>;
  }

  return (
    <div className="planets-box">
      <Switch>
        <Route exact path="/planets">
          <div className="planets-box-buttons-wraper">
            <button className="planets-box-button" onClick={getAllData}>
              Planets
            </button>
            <button className="planets-box-button" onClick={getAllPlanets}>
              AllData
            </button>
          </div>
          <div className="planets-box-names">
            <div className="planets-box-names-wrapper">
              <div className="planets-box-names">{allData}</div>
              <div className="planets-box-names">{allPlanets}</div>
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
    </div>
  );
};
export default Planets;
