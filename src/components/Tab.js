const Tab = (props) => {
    const { currentPlanet, currentTab } = props;
    const { name, overview, structure, geology, images } = currentPlanet;

    let imageDisplayed;
    let textDisplayed;

    if (currentTab === "Overview") {
        imageDisplayed = images.planet;
        textDisplayed = overview.content;
    } else if (currentTab === "Internal") {
        imageDisplayed = images.internal;
        textDisplayed = structure.content;
    } else if (currentTab === "Surface") {
        imageDisplayed = images.geology;
        textDisplayed = geology.content;
    } 

    return (
        <div className="tab-content">
            <img src={imageDisplayed} alt={name}/>
            <h1>{name}</h1>
            <div className="text">{textDisplayed}</div>
        </div>
    )
}

export default Tab;