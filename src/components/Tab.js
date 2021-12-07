import "../styles/Tab.css";

const Tab = (props) => {
    const { currentPlanet, currentTab } = props;
    const { name, overview, structure, geology, images } = currentPlanet;

    let textDisplayed;
    let wikipediaSource;

    if (currentTab === "overview") {
        textDisplayed = overview.content;
        wikipediaSource = overview.source;
    } else if (currentTab === "internal") {
        textDisplayed = structure.content;
        wikipediaSource = structure.source;
    } else if (currentTab === "surface") {
        textDisplayed = geology.content;
        wikipediaSource = geology.source;
    } 

    const surfaceImage = <img src={images.geology} className="geology-image" alt="Surface geology"/>;

    return (
        <div className="tab-content center">
            <div className="images-container center">
                <img 
                    src={currentTab === "internal" ? images.internal : images.planet} 
                    alt={name} 
                    className="planet-image"
                />
                {currentTab === "surface" ? surfaceImage : null}
            </div>
            <h1 className="planet-name">{name}</h1>
            <div className="text">{textDisplayed}</div>
            <div className="wikipedia-source">Source<span className="dots-span">:</span>
                <a href={wikipediaSource} target="_blank" rel="noreferrer" className="wikipedia-link">
                    Wikipedia
                </a>
            </div>
        </div>
    )
}

export default Tab;