import React from "react";
import "./PlanetDetails.css";

class PlanetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.props.data.onePlanet = {
      data: [],
      isLoading: true,
      error: null,
    };
    this.handleList = this.handleList.bind(this);
  }

  componentDidMount() {
    this.props.getOnePlanet(this.props.match.params.id);
  }

  handleList(data) {
    console.log(JSON.stringify(data));
    let nameList = [
      "englishName",
      "semimajorAxis",
      "perihelion",
      "aphelion",
      "eccentricity",
      "inclination",
      "density",
      "gravity",
      "escape",
      "meanRadius",
      "equaRadius",
      "polarRadius",
      "flattening",
      "sideralOrbit",
      "sideralRotation",
      // "discoveredBy",
      // "discoveryDate",
      // "alternativeName",
    ];
    // let list = [];
    let list = nameList.map((item) => (
      <li key={item}>
        {item} = {data[item]}
      </li>
    ));
    // list.push(
    //   <li key={key}>
    //     {key}={data[key]}
    //   </li>
    // );

    // let list = this.state.data.map((item) => <li key={item.id}>{item.id}</li>);
    // console.log(list);
    // console.log(this.props);
    return list;
  }

  render() {
    console.log(this.props);

    const { error, isLoading, data } = this.props.data.onePlanet;
    if (error) {
      return <div>Error!</div>;
    }
    if (isLoading) {
      return <div className="planet-details-loading">Loading...</div>;
    } else {
      return (
        <div className="planet-details">
          <div className="planet-details-wrapper">
            <h2>Information</h2>
            <ol className="planet-details-box">{this.handleList(data)}</ol>
          </div>
        </div>
      );
    }
  }
}
export default PlanetDetails;

{
  /* {Object.keys(i).map(function (keyName, keyIndex) {
          return (
            <p>
              {JSON.stringify(i, null, 2)}
              {console.log(i[keyName])}
            </p>
          );
        })} */
}

{
  /* {Object.keys(i).map(function (keyName, keyIndex) {
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
        })} */
}
