import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
    const { planetNames, changePlanet } = props;
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)
    const toggleNavbarVisibility = () => setIsNavbarExpanded(!isNavbarExpanded);
    const hideNavbar = () => setIsNavbarExpanded(false);
    const handleClick = (planetName) => {
        changePlanet(planetName);
        hideNavbar();
    }

    const navItems = planetNames.map((planetName) => {
        return (
            <li key={planetName} className="navbar-item">
                <div
                    className="navbar-link"
                    onClick={() => handleClick(planetName)}
                    >
                    {planetName.toUpperCase()}
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