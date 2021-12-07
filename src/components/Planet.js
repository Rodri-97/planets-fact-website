import { useState } from "react";
import Tab from "./Tab.js";
import "../styles/Planet.css";

const Planet = (props) => {
    const { currentPlanet } = props;
    const [currentTab, setCurrentTab] = useState("Overview");

    return (
        <div className="planet page">
            <div className="selector selector-top">
                <div 
                    className="selector-item selector-top-item" 
                    onClick={() => setCurrentTab("Overview")}
                >
                    Overview
                </div>
                <div className="selector-item selector-top-item" onClick={() => setCurrentTab("Internal")}>Internal</div>
                <div className="selector-item selector-top-item" onClick={() => setCurrentTab("Surface")}>Surface</div>
            </div>
            <Tab currentPlanet={currentPlanet} currentTab={currentTab}/>
        </div>
    )
}

export default Planet;