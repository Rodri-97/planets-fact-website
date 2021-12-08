import { useState } from "react";
import Tab from "./Tab.js";
import "../styles/Planet.css";

const Planet = (props) => {
    const { currentPlanet } = props;
    const { rotation, revolution, radius, temperature } = currentPlanet;
    const [currentTab, setCurrentTab] = useState("overview");
    const styles = {
        borderBottom: `4px solid ${currentPlanet.color}`,
        color: "white"
    }

    return (
        <div className="planet page">
            <div className="selector selector-top">
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("overview")}
                    style={currentTab === "overview" ? styles : null}
                >
                    OVERVIEW
                </div>
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("internal")}
                    style={currentTab === "internal" ? styles : null}
                >
                        INTERNAL
                </div>
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("surface")}
                    style={currentTab === "surface" ? styles : null}
                >
                    SURFACE
                </div>
            </div>
            <Tab currentPlanet={currentPlanet} currentTab={currentTab}/>
            <div className="statistics">
                <div className="statistics-container">
                    <div className="statistic-name">ROTATION TIME</div>
                    <div className="statistic">{rotation}</div>
                </div>
                <div className="statistics-container">
                    <div className="statistic-name">REVOLUTION TIME</div>
                    <div className="statistic">{revolution}</div>
                </div>
                <div className="statistics-container">
                    <div className="statistic-name">RADIUS</div>
                    <div className="statistic">{radius}</div>
                </div>
                <div className="statistics-container">
                    <div className="statistic-name">AVERAGE TEMP.</div>
                    <div className="statistic">{temperature}</div>
                </div>
            </div>
        </div>
    )
}

export default Planet;