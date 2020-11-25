import React from "react";
import { connect } from "react-redux";
import {
  getAllPlanetFunc,
  getAllDataFunc,
  getOnePlanetFunc,
} from "../actions/planets";
import planets from "../reducers/planets";
import Planets from "../components/Planets/Planets";

const PlanetsContainer = ({
  planets,
  getAllPlanets,
  getAllData,
  getOnePlanet,
}) => (
  <Planets
    planets={planets}
    getAllData={getAllData}
    getAllPlanets={getAllPlanets}
    getOnePlanet={getOnePlanet}
  />
);

const mapStateToProps = (state) => ({
  planets: state.planets,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPlanets: getAllPlanetFunc(dispatch),
    getAllData: getAllDataFunc(dispatch),
    getOnePlanet: getOnePlanetFunc(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
