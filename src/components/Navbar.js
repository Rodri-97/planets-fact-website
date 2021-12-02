import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
    const { planetNames } = props;
    const navItems = planetNames.map((planetName) => {
        return (
            <li key={planetName} className="navbar-item">
                <NavLink 
                    activeclassname="active" 
                    to={`${planetName.toLowerCase()}`}
                    className="navbar-link">
                    {planetName.toUpperCase()}
                </NavLink>
            </li>
        )
    })

    return (
        <header id="navbar">
            <nav className="navbar-container container">
                <Link to="/" className="home-link">
                    <div className="navbar-logo">THE PLANETS</div>
                </Link>
                <button
                    type="button"
                    id="navbar-toggle"
                    aria-controls="navbar-menu"
                    aria-label="Toggle menu"
                    aria-expanded="false"
                >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                    <ul className="navbar-links">{navItems}</ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;