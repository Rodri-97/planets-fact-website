import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Planet from "./components/Planet.js";
import { data } from "./data.js";
import "./styles/App.css";

const App = () => {
  const planetNames = data.map(planet => planet.name);
  const planetRoutes = data.map(planet => <Route 
                                            key={planet.name} 
                                            path={`/${planet.name.toLowerCase()}`} 
                                            element={<Planet name={planet.name} />}
                                          />);

  return (
    <HashRouter basename='/'>
      <Navbar planetNames={planetNames}/>
      <Routes>
          <Route path="/" element={<Home data={data} />} />
          {planetRoutes}
      </Routes>
    </HashRouter>
  )
}

export default App;