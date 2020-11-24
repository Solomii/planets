import React from "react";
import "./Planets.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import PlanetDetals from "../PlanetDetals/PlanetDetals";

const Planets = ({ planets, getAllPlanets, getAllData }) => {
  let allData, allPlanets;
  if (planets.alldata && planets.alldata.data && planets.alldata.data.bodies) {
    allData = planets.alldata.data.bodies.map((i) => (
      <div className="planets-box-name">
        {i.englishName} <br />
        <Link to={"/planets/bodies/" + i.id}>More...</Link>
        <Switch>
          <Route path="/planets/bodies/:id" component={PlanetDetals}></Route>
        </Switch>
      </div>
    ));
  } else {
    allData = <div></div>;
  }

  if (planets.planet && planets.planet.data && planets.planet.data.bodies) {
    allPlanets = planets.planet.data.bodies.map((i) => (
      <div>{i.englishName}</div>
    ));
  } else {
    allPlanets = <div></div>;
  }
  let { id } = useParams();
  console.log(id);
  return (
    <div className="planets-box">
      <button className="planets-box-button" onClick={getAllData}>
        Planets
      </button>
      <button className="planets-box-button" onClick={getAllPlanets}>
        AllData
      </button>
      <div className="planets-box-names-wrapper">
        <div className="planets-box-names">{allData}</div>
      </div>
      <div className="planets-box-names-wrapper">
        <div className="planets-box-names">{allPlanets}</div>
      </div>
    </div>
  );
};
export default Planets;
