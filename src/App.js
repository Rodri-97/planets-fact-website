import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Planet from "./components/Planet.js";
import { planets } from "./data.js";
import "./styles/App.css";

const App = () => {
  const planetNames = planets.map(planet => planet.name);
  const [currentPlanet, setCurrentPlanet] = useState(planetNames[0]);
  const changePlanet = (newCurrentPlanetName) => setCurrentPlanet(newCurrentPlanetName);

  return (
    <div>
      <Navbar planetNames={planetNames} changePlanet={changePlanet}/>
      <Planet name={currentPlanet} />
    </div>
  )
}

export default App;