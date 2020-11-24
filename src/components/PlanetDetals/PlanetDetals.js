import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PlanetDetals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null,
    };
  }
  componentDidMount() {
    let baseUrl = "https://api.le-systeme-solaire.net/rest/bodies/";
    fetch(baseUrl + "lune")
      .then((res) => res.json())
      .then((json) => {
        console.log(this.state.items);
        this.setState({
          isLoaded: true,
          // за цю лінійку напевно не правильно!!  items: json.bodies,
          items: json.bodies,
        });
      });
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error!</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}></li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default PlanetDetals;
