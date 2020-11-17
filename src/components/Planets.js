import React from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";

const Planets = ({ planets, getPlanets }) => {
  let b;
  if (planets.plan && planets.plan.data && planets.plan.data.bodies) {
    b = planets.plan.data.bodies.map((i) => <div>{i.name}</div>);
  } else {
    b = <div>No data</div>;
  }
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h3>Planets</h3>
      <button onClick={getPlanets}>Planets</button>
      {b}
    </div>
  );
};
export default Planets;
