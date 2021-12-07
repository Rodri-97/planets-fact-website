import { useState } from "react";
import Tab from "./Tab.js";
import "../styles/Planet.css";

const Planet = (props) => {
    const { currentPlanet } = props;
    const [currentTab, setCurrentTab] = useState("Overview");
    const styles = {
        borderBottom: `4px solid ${currentPlanet.color}`
    }

    return (
        <div className="planet page">
            <div className="selector selector-top">
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("Overview")}
                    style={currentTab === "Overview" ? styles : null}
                >
                    Overview
                </div>
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("Internal")}
                    style={currentTab === "Internal" ? styles : null}
                >
                        Internal
                </div>
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("Surface")}
                    style={currentTab === "Surface" ? styles : null}
                >
                    Surface
                </div>
            </div>
            <Tab currentPlanet={currentPlanet} currentTab={currentTab}/>
        </div>
    )
}

export default Planet;