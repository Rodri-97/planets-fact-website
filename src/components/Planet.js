import { useState } from "react";
import Tab from "./Tab.js";
import "../styles/Planet.css";

const Planet = (props) => {
    const { currentPlanet } = props;
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
        </div>
    )
}

export default Planet;