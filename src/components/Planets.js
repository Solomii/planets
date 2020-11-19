import React from "react";
import { useParams } from "react-router-dom";

const Planets = ({ planets, getPlanets }) => {
  let b;
  if (planets.plan && planets.plan.data && planets.plan.data.bodies) {
    b = planets.plan.data.bodies.map((i) => <div>{i.englishName}</div>);
  } else {
    b = <div>No data</div>;
  }
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <button onClick={getPlanets}>Planets</button>
      <div className="planets-name">{b}</div>
    </div>
  );
};
export default Planets;
