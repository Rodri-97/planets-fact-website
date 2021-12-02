import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)
    const toggleNavbarVisibility = () => setIsNavbarExpanded(!isNavbarExpanded);
    const { planetNames } = props;
    const navItems = planetNames.map((planetName) => {
        return (
            <li key={planetName} className="navbar-item">
                <NavLink 
                    activeclassname="active" 
                    to={`${planetName.toLowerCase()}`}
                    className="navbar-link"
                    onClick={toggleNavbarVisibility}
                    >
                    {planetName.toUpperCase()}
                </NavLink>
            </li>
        )
    })

    return (
        <header id="navbar">
            <nav className="navbar-container container">
                <Link to="/" className="home-link">
                    <h1 id="page-title">THE PLANETS</h1>
                </Link>
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