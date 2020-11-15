import React from "react";

function Planets({ planets, getPlanets }) {
  console.log(planets, getPlanets);
  return (
    <div className="header">
      <button onClick={getPlanets}>getPlanets</button>
    </div>
  );
}

export default Planets;
