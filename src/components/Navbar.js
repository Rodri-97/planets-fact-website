import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)
    const toggleNavbarVisibility = () => setIsNavbarExpanded(!isNavbarExpanded);
    const hideNavbar = () => setIsNavbarExpanded(false);
    const handleClick = (planet) => {
        changePlanet(planet);
        hideNavbar();
    }
    const { planets, changePlanet } = props;
    const [borderColor, setBorderColor] = useState("transparent");
    const styles = {
        borderTopColor: borderColor
    }

    const navItems = planets.map((planet) => {
        return (
            <li key={planet.name}
                className="navbar-link" 
                onClick={() => handleClick(planet)}
                onMouseEnter={() => setBorderColor(planet.color)}
                onMouseLeave={() => setBorderColor("transparent")}
                style={planet.color === borderColor ? styles : null}
            >
                <div className="navbar-link-content center">
                    <div className="dot" style={{backgroundColor: planet.color}}></div>
                    <div>
                        <p className="navbar-planet-name">{planet.name.toUpperCase()}</p>
                    </div>
                </div>
                
            </li>
        )
    })

    return (
        <header id="navbar">
            <nav className="navbar-container container">
                <div><h1 id="page-title">THE PLANETS</h1></div>
                <button
                    type="button"
                    id="navbar-toggle"
                    aria-controls="navbar-menu"
                    aria-label="Toggle menu"
                    aria-expanded={isNavbarExpanded}
                    onClick={toggleNavbarVisibility}
                >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle" onClick={toggleNavbarVisibility}>
                    <ul className="navbar-links" onClick={(e) => e.stopPropagation()}>{navItems}</ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;