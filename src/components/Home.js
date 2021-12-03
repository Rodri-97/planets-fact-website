import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = (props) => {
    const { setIsNavbarHidden, data } = props;
    setIsNavbarHidden(true);
    const rockyPlanets = data.slice(0, 4);
    const gasPlanets = data.slice(4);
    const getPlanetsDivs = (planets) => {
        return planets.map((planet) => {
            return <Link to={`${planet.name.toLowerCase()}`}><div className="planet-container center">
                <h3 className="planet-name">{planet.name}</h3>
                
                    <img key={planet.name} 
                        className="planet center" 
                        src={planet.images.planet} 
                        alt={planet.name}
                    />
            </div>
            </Link>
            
        })
    }
    const rockyDivs = getPlanetsDivs(rockyPlanets);
    const gasDivs = getPlanetsDivs(gasPlanets);

    return (
        <div className="page center" id="home">
            <div className="grid-container center">
                <h2>Rocky Planets</h2>
                <div className="grid">
                    {rockyDivs}
                </div>
            </div>

            <div className="grid-container center">
                <h2>Gas Planets</h2>
                <div className="grid">
                    {gasDivs}
                </div>
            </div>
        </div>
    )
}

export default Home;