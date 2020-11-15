import React from "react";
import { connect } from "react-redux";
import { getPlanetFunc, getMorePlanetFunc } from "../actions/planets";
import { planets } from "../reducers";
import Planets from "../components/Planets";

const PlanetsContainer = ({ planets, getPlanets }) => (
  <Planets planets={planets} getPlanets={getPlanets} />
);

const mapStateToProps = (state) => ({
  planets: state.planets,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPlanets: getPlanetFunc(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
