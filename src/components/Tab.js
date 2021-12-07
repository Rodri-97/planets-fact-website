import "../styles/Tab.css";

const Tab = (props) => {
    const { currentPlanet, currentTab } = props;
    const { name, overview, structure, geology, images } = currentPlanet;

    let imageDisplayed;
    let textDisplayed;
    let wikipediaSource;

    if (currentTab === "overview") {
        imageDisplayed = images.planet;
        textDisplayed = overview.content;
        wikipediaSource = overview.source;
    } else if (currentTab === "internal") {
        imageDisplayed = images.internal;
        textDisplayed = structure.content;
        wikipediaSource = structure.source;
    } else if (currentTab === "surface") {
        imageDisplayed = images.geology;
        textDisplayed = geology.content;
        wikipediaSource = geology.source;
    } 

    return (
        <div className="tab-content">
            <img src={imageDisplayed} alt={name} className="planet-image"/>
            <h1 className="planet-name">{name}</h1>
            <div className="text">{textDisplayed}</div>
            <div className="wikipedia-source">Source<span className="dots-span">:</span>
                <a href={wikipediaSource} target="_blank" rel="noreferrer">
                    Wikipedia
                </a>
            </div>
        </div>
    )
}

export default Tab;