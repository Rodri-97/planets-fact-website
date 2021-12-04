import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Planet from "./components/Planet.js";
import { planets } from "./data.js";
import "./styles/App.css";

const App = () => {
  const [currentPlanet, setCurrentPlanet] = useState(planets[0].name);
  const changePlanet = (newCurrentPlanetName) => setCurrentPlanet(newCurrentPlanetName);

  return (
    <div>
      <Navbar planets={planets} changePlanet={changePlanet}/>
      <Planet name={currentPlanet} />
    </div>
  )
}

export default App;