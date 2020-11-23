import React from "react";
const PlanetDetals = ({ planets, getAllPlanets, getAllData }) => {
  let allData, allPlanets;
  if (planets.alldata && planets.alldata.data && planets.alldata.data.bodies) {
    allData = planets.alldata.data.bodies.map((i) => (
      <div className="planets-box-name">
        {i.englishName} <br />
        {/* {Object.keys(i).map(function (keyName, keyIndex) {
          return (
            // <p key={keyName}>
            //   {keyName}
            //   {console.log(i[keyName])}
            // </p>
            // <p>
            //   {JSON.stringify(i, null, 2)}
            //   {console.log(i[keyName])}
            // </p>
          );
        })} */}
        {/* <Link to={"/planets/bodies/" + i.id}>More...</Link>
        <Switch>
          <Route path="/planets/bodies/:id"></Route>
        </Switch> */}
      </div>
    ));
  } else {
    allData = <div></div>;
  }

  // if (planets.planet && planets.planet.data && planets.planet.data.bodies) {
  //   allPlanets = planets.planet.data.bodies.map((i) => (
  //     <div>{i.englishName}</div>
  //   ));
  // } else {
  //   allPlanets = <div></div>;
  // }
  return (
    <div className="planets-box">
      <button className="planets-box-button" onClick={getAllData}>
        Planets
      </button>
      {/* <button className="planets-box-button" onClick={getAllPlanets}>
        AllData
      </button> */}
      <div className="planets-box-names-wrapper">
        <div className="planets-box-names">{allData}</div>
      </div>
      {/* <div className="planets-box-names-wrapper">
        <div className="planets-box-names">{allPlanets} </div>
      </div> */}
    </div>
  );
};
export default PlanetDetals;
