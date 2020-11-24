import React from "react";
import "./App.css";
import HeaderPlanets from "../Header/Header";
import PlanetsContainer from "../../containers/PlanetsContainer";
// import PlanetDetals from "../PlanetDetals/PlanetDetals";
import PlanetsFooter from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderPlanets />
      <PlanetsContainer />
      {/* <PlanetDetals /> */}
      <PlanetsFooter />
    </div>
  );
}

export default App;
