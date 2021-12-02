import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Planet from "./components/Planet.js";
import "./styles/App.css";

const App = () => {
  const data = require('./data.json');
  const planetNames = data.map(planet => planet.name);

  let uniqueKey = -1;
  const planetRoutes = data.map((planet) => {
    uniqueKey++;
    return (
      <Route key={uniqueKey.toString()} path={`/${planet.name.toLowerCase()}`} element={<Planet name={planet.name} />}/>
    )
  })

  return (
    <HashRouter basename='/'>
      <Navbar planetNames={planetNames}/>
      <Routes>
          <Route path="/" element={<Home />} />
          {planetRoutes}
      </Routes>
    </HashRouter>
  )
}

export default App;