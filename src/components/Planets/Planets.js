import React from "react";
import "./Planets.css";
import { useParams } from "react-router-dom";

const Planets = ({ planets, getPlanets }) => {
  let b;
  if (planets.plan && planets.plan.data && planets.plan.data.bodies) {
    b = planets.plan.data.bodies.map((i) => (
      <div className="planets-box-name">{i.englishName}</div>
    ));
  } else {
    b = <div></div>;
  }
  let { id } = useParams();
  console.log(id);
  return (
    <div className="planets-box">
      <button className="planets-box-button" onClick={getPlanets}>
        Planets
      </button>
      <div className="planets-box-names-wrapper">
        <div className="planets-box-names">{b}</div>
      </div>
    </div>
  );
};
export default Planets;
