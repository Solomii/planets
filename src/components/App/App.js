import React from "react";
import "./App.css";
import HeaderPlanets from "../Header/Header";
import PlanetsContainer from "../../containers/PlanetsContainer";
// import PlanetDetals from "../PlanetDetals/PlanetDetals";
import PlanetsFooter from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderPlanets />
      <PlanetsContainer />
      {/* <PlanetDetals /> */}
      <PlanetsFooter />
    </div>
  );
}

export default App;

// import React, { Component } from "react";

// export default class Planets extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch(`https://api.le-systeme-solaire.net/rest/bodies`, {
//       mode: "no-cors",
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           items: json.api_products,
//         });
//       });
//   }

//   render() {
//     let { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading... </div>;
//     } else {
//       return (
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
