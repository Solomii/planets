import React from "react";
import "./PlanetDetails.css";
import eris from "../../img/eris.jpg";
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

  handleListPlanetPhoto() {
    let namePlanetPhoto = [
      "ceres",
      "eris",
      "uranus",
      "pluton",
      "neptune",
      "haumea",
      "makemake",
      "jupiter",
      "mars",
      "mercure",
      "saturne",
      "terre",
      "venus",
    ];
  }

  render() {
    console.log(this.props);

    // const myImg ='../../img/eris.jpg'

    const { error, isLoading, data } = this.props.data.onePlanet;
    if (error) {
      return <div className="planet-details-loading-error">Error!</div>;
    }
    if (isLoading) {
      return <div className="planet-details-loading-error">Loading...</div>;
    } else {
      return (
        <div className="planet-details">
          <div className="planet-details-wrapper">
            <div>
              <h2 className="planet-details-title">Information</h2>
              <ol className="planet-details-box">{this.handleList(data)}</ol>
            </div>
            <div>
              {/* const eris = require("../../img/eris.jpg") */}
              <img className="planet-details-img" src={eris} alt="" />

              {/* <img src={require(`../../img/${myImg}`)} /> */}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default PlanetDetails;
