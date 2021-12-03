import "../styles/Home.css";

const Home = (props) => {
    const { data } = props;
    const rockyPlanets = data.slice(0, 4);
    const gasPlanets = data.slice(4);
    const getPlanetsDivs = (planets) => {
        return planets.map((planet) => {
            return <div className="planet-container center">
                <h4 className="planet-name">{planet.name}</h4>
                <img key={planet.name} className="planet center" src={planet.images.planet} alt={planet.name}/>
            </div>
            
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