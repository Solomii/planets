import React from "react";
import "./PlanetDetails.css";
import eris from "../../img/eris.jpg";
import ceres from "../../img/ceres.jpg";
import haumea from "../../img/haumea.jpg";
import jupiter from "../../img/jupiter.jpg";
import makemake from "../../img/makemake.jpg";
import mars from "../../img/mars.jpg";
import mercure from "../../img/mercure.jpg";
import neptune from "../../img/neptune.jpg";
import pluton from "../../img/pluton.jpg";
import saturne from "../../img/saturne.jpg";
import terre from "../../img/terre.jpg";
import uranus from "../../img/uranus.jpg";
import venus from "../../img/venus.jpg";

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
    let list = nameList.map((item) => (
      <li key={item}>
        {item} = {data[item]}
      </li>
    ));
    return list;
  }

  handleListPlanetPhoto(data) {
    switch (data.id) {
      case "eris":
        return eris;
      case "ceres":
        return ceres;
      case "haumea":
        return haumea;
      case "jupiter":
        return jupiter;
      case "makemake":
        return makemake;
      case "mars":
        return mars;
      case "mercure":
        return mercure;
      case "neptune":
        return neptune;
      case "pluton":
        return pluton;
      case "saturne":
        return saturne;
      case "terre":
        return terre;
      case "uranus":
        return uranus;
      case "venus":
        return venus;
      default:
        break;
    }
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
              {/* <img className="planet-details-img" src={eris} alt="" /> */}
              <img
                className="planet-details-img"
                src={this.handleListPlanetPhoto(data)}
                alt=""
              />
              {/* <img src={require(`../../img/${myImg}`)} /> */}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default PlanetDetails;
