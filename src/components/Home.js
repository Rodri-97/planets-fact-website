import "../styles/Home.css";

const Home = (props) => {
    const { rockyPlanets, gasPlanets } = props;
    const rockyDivs = rockyPlanets.map(planet => <div class="planet">{planet.name}</div>);
    const gasDivs = gasPlanets.map(planet => <div class="planet">{planet.name}</div>);

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