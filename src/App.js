import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Planet from "./components/Planet.js";
import { planets } from "./data.js";
import "./styles/App.css";

const App = () => {
  const [currentPlanet, setCurrentPlanet] = useState(planets[0]);
  const changePlanet = (newCurrentPlanet) => setCurrentPlanet(newCurrentPlanet);

  return (
    <div>
      <Navbar planets={planets} changePlanet={changePlanet}/>
      <Planet 
        currentPlanet={currentPlanet}
      />
    </div>
  )
}

export default App;