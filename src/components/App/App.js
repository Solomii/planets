import React from "react";
import "./App.css";
import HeaderPlanets from "../Header/Header";
import PlanetsContainer from "../../containers/PlanetsContainer";
import PlanetsFooter from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderPlanets />
      <PlanetsContainer />
      <PlanetsFooter />
    </div>
  );
}

export default App;
