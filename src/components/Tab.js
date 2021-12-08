import "../styles/Tab.css";

const Tab = (props) => {
    const { currentPlanet, currentTab, changeTab } = props;
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

    const styles = {
        backgroundColor: `${currentPlanet.color}`
    }

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

            <div className="main-information">
                <div className="text-container">
                    <h1 className="planet-name">{name}</h1>
                    <div className="text">{textDisplayed}</div>
                    <div className="wikipedia-source">Source<span className="dots-span">:</span>
                        <a href={wikipediaSource} target="_blank" rel="noreferrer" className="wikipedia-link">
                            Wikipedia
                        </a>
                    </div>
                </div>

                <div className="selector desktop-selector">
                    <div 
                        className="selector-item desktop-selector-item" 
                        onClick={() => changeTab("overview")}
                        style={currentTab === "overview" ? styles : null}
                    >
                        <span className="desktop-selector-num">01</span> OVERVIEW
                    </div>
                <div 
                    className="selector-item desktop-selector-item" 
                    onClick={() => changeTab("internal")}
                    style={currentTab === "internal" ? styles : null}
                >
                    <span className="desktop-selector-num">02</span> INTERNAL
                </div>
                <div 
                    className="selector-item desktop-selector-item" 
                    onClick={() => changeTab("surface")}
                    style={currentTab === "surface" ? styles : null}
                >
                    <span className="desktop-selector-num">03</span> SURFACE
                </div>
            </div>
            </div>
        </div>
    )
}

export default Tab;