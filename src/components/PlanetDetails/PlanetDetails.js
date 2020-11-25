import React from "react";
import "./PlanetDetails.css";

class PlanetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null,
    };
    this.handleList = this.handleList.bind(this);
  }

  componentDidMount() {
    this.props.getOnePlanet(this.props.match.params.id);
  }

  handleList() {
    let list = this.state.items.map((item) => <li key={item.id}></li>);
    console.log(list, this.props);

    return list;
  }

  render() {
    console.log(this.props);

    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error!</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="planets-details">
          <ul>{this.handleList}</ul>
        </div>
      );
    }
  }
}
export default PlanetDetails;
